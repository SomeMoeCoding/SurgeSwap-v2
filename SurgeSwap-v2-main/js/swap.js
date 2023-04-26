var inputToken = {
    ca: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    name: "Binance Coin",
    symbol: "BNB",
    balance: 0,
    img: "img/bsc.png",
    contract: null,
    contractChain: null
}

var outputToken = {
    ca: "0x9f19c8e321bD14345b797d43E01f0eED030F5Bff",
    name: "SURGE",
    symbol: "SRG",
    balance: 0,
    img: "img/Token.png",
    contract: null,
    contractChain: null
}

async function GetTokenInfoByCa(ca) {
    try {
        var contract;
        var tokenInfo = {
            name: "",
            symbol: "",
            balance: 0,
            ca: ca
        };
        if (account !== "") {
            contract = new web3.eth.Contract(defaultABI, ca);
        } else {
            contract = new web3bsc.eth.Contract(defaultABI, ca);
        }

        if (await IsSurge(contract)) {
            var decimals = Number(await contract.methods.decimals().call());
            tokenInfo.name = await contract.methods.name().call();
            tokenInfo.symbol = await contract.methods.symbol().call();
            if (account !== "") {
                tokenInfo.balance = Number(await contract.methods.balanceOf(account).call());
                tokenInfo.balance = tokenInfo.balance / Math.pow(10, decimals);
            }
            return tokenInfo;
        }

        return null;
    }
    catch (error) {
        return null;
    }
}

async function IsSurge(contract) {
    try {
        if (contract.methods == null || contract.methods === undefined) {
            if (web3.utils.isAddress(contract)) {
                if ([caSRGBSC, caSRGETH, caSRGTEST].includes(contract)) {
                    return true;
                }
                if ([caSRGBSC, caSRGETH, caSRGTEST].includes(web3.utils.toChecksumAddress(contract))) {
                    return true;
                }
                contract = await GetChainContract(contract);
            }
        }

        var price = await contract.methods.getSRGPrice().call();
        return true;
    }
    catch (error) {
        return false
    }
}

function IsNative(contract) {
    try {
        switch (chainid) {
            case 1:
                return web3.utils.toChecksumAddress(contract) == web3.utils.toChecksumAddress(caETH) ? true : false;
                break;
            case 56:
                return web3.utils.toChecksumAddress(contract) == web3.utils.toChecksumAddress(caBNB) ? true : false;
                break;
            case 137:
                return web3.utils.toChecksumAddress(contract) == web3.utils.toChecksumAddress(caPOLY) ? true : false;
                break;
            case 97:
                return web3.utils.toChecksumAddress(contract) == web3.utils.toChecksumAddress(caTEST) ? true : false;
                break;
            case 42161:
                return web3.utils.toChecksumAddress(contract) == web3.utils.toChecksumAddress(caETHARBI) ? true : false;
                break;
        }


        return false;
    }
    catch (error) {
        return false
    }
}

async function GetPrice(ca) {
    try {
        var contract = new web3.eth.Contract(defaultABI, ca);
        var price = await contract.methods.getSRGPrice().call();
        return price;
    }
    catch (error) {
        return 0;
    }
}

async function GetBalance(ca) {
    try {
        var balance = 0;

        if (account !== "") {
            if (IsNative(ca)) {

                if (chainid !== 42161 && chainid !== 1) {
                    balance = Number(web3.utils.fromWei(await web3.eth.getBalance(account)));
                }
                if (chainid == 42161) {
                    balance = Number(web3.utils.fromWei(await web3arbi.eth.getBalance(account)));
                }
                if (chainid == 1) {
                    balance = Number(web3.utils.fromWei(await web3eth.eth.getBalance(account)));
                }                
            } else {
                var _contract = GetChainContract(ca);
                var decimals = Number(await _contract.methods.decimals().call());
                balance = Number(await _contract.methods.balanceOf(account).call());
                balance = balance / Math.pow(10, decimals);
            }
        }

        return balance;
    }
    catch (error) {
        return 0;
    }
}

async function Swap() {
    try {
        $("#verifyModal").modal("hide");
        var amount = $("#inputField").val();
        var decimalsInput = await GetInputDecimals();
        var decimalsOutput = await GetOutputDecimals();
        var estimate = await CheckAmountOut();
        var min = estimate * ((100 - options.slippage) / 100);
        amount = Math.floor(amount * Math.pow(10, decimalsInput));
        min = Math.floor(min * Math.pow(10, decimalsOutput));
        var deadline = new Date().getTime() + (options.deadline * 60000);

        $("#awaitTrade").text(`Trading ${$("#inputField").val()} ${inputToken.symbol} for ${estimate} ${outputToken.symbol}`);
        $("#loadingModal").modal("show");

        var inputType = GetCAType(inputToken.ca);
        var outputType = GetCAType(outputToken.ca);

        switch (inputType) {
            case "BNB":
            case "tBNB":
            case "ETH":
                var multicall = outputType == "SRG20" ? true : false;
                if (multicall) {
                    var contract = GetMultiSendContract();
                    await SwapNativeToSRG20(contract, min, deadline, amount, outputToken.ca);
                } else {
                    await Buy(outputToken.contract, min.toString(), deadline, amount.toString());
                }
                break;
            case "SRG":
                if (outputType == "SRG20") {
                    await Buy(outputToken.contract, min.toString(), deadline, amount.toString(), true);
                } else {
                    await Sell(inputToken.contract, min.toString(), deadline, amount.toString());
                }
                break;
            case "SRG20":
                var multicall = outputType == "BNB" || outputType == "ETH" || outputType == "SRG20" ? true : false;
                if (multicall) {
                    var contract = GetMultiSendContract();
                    if (outputType == "SRG20") {
                        await SwapSRG20ToSRG20(contract, min.toString(), deadline, amount.toString(), inputToken.ca, outputToken.ca);
                    } else {
                        await SwapSRG20ToNative(contract, min.toString(), deadline, amount.toString(), inputToken.ca);
                    }
                } else {
                    await Sell(inputToken.contract, min.toString(), deadline, amount.toString(), true);
                }
                break;
        }
    }
    catch (error) {
        $("#loadingModal").modal("hide");
        console.log(error);
    }
}

async function Buy(contract, min, deadline, amount, SRG20 = false) {
    try {
        var gwei = null;
        if (chainid == 56 && options.gwei > 5) {
            gwei = options.gwei * Math.pow(10, 9);
        }

        //var _value = null;
        //if (chainid == 1) {
        //    SRG20 = true;
        //    _value = amount;
        //    amount = (Number($("#outputField").val()) * Math.pow(10, 9)).toString();
        //}        

        if (SRG20) {
            contract.methods._buy(amount, min, deadline.toString())
                .send({
                    from: account, gasPrice: gwei
                })
                .on("receipt", function (receipt) {
                    $("#loadingModal").modal("hide");
                    $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                    $("#confirmModal").modal("show");
                    transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                    $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                    Init_Master(false);
                })
                .on("error", function (error) {
                    $("#loadingModal").modal("hide");
                    if (error.receipt) {
                        transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                    }
                    ShowError(error.message);
                    Init_Master(false);
                });
        }
        else {
            contract.methods._buy(min, deadline.toString())
                .send({
                    from: account, value: amount, gasPrice: gwei
                })
                .on("receipt", function (receipt) {
                    $("#loadingModal").modal("hide");
                    $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                    $("#confirmModal").modal("show");
                    transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                    $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                    Init_Master(false);
                })
                .on("error", function (error) {
                    $("#loadingModal").modal("hide");
                    if (error.receipt) {
                        transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                    }
                    ShowError(error.message);
                    Init_Master(false);
                });
        }
    }
    catch (error) {
        setTimeout(function () {
            $("#loadingModal").modal("hide");
        }, 500);
        ShowError(error.message);
        console.log(error);
    }
}

async function Sell(contract, min, deadline, amount, SRG20 = false) {
    try {
        var gwei = null;
        if (chainid == 56 && options.gwei > 5) {
            gwei = options.gwei * Math.pow(10, 9);
        }

        //var _value = null;
        //if (chainid == 1) {
        //    SRG20 = true;
        //    _value = amount;
        //}

        if (SRG20) {
            contract.methods._sell(amount, deadline.toString(), min)
                .send({
                    from: account, gasPrice: gwei
                })
                .on("receipt", function (receipt) {
                    $("#loadingModal").modal("hide");
                    $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                    $("#confirmModal").modal("show");
                    transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                    $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                    Init_Master(false);
                })
                .on("error", function (error) {
                    $("#loadingModal").modal("hide");
                    if (error.receipt) {
                        transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                    }
                    ShowError(error.message);
                    Init_Master(false);
                });
        }
        else {
            contract.methods._sell(amount, min, deadline.toString())
                .send({
                    from: account, gasPrice: gwei
                })
                .on("receipt", function (receipt) {
                    $("#loadingModal").modal("hide");
                    $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                    $("#confirmModal").modal("show");
                    transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                    $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                    Init_Master(false);
                })
                .on("error", function (error) {
                    $("#loadingModal").modal("hide");
                    if (error.receipt) {
                        transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                    }
                    ShowError(error.message);
                    Init_Master(false);
                });
        }
    }
    catch (error) {
        setTimeout(function () {
            $("#loadingModal").modal("hide");
        }, 500);
        ShowError(error.message);
        console.log(error);
    }
}

async function Approve() {
    try {
        var isMulti = IsMultiRoute(GetCAType(inputToken.ca), GetCAType(outputToken.ca));

        if (!isMulti) {
            await contractSurge.methods.approveMax(outputToken.ca)
                .send({
                    from: account
                })
                .on("receipt", function (receipt) {
                    transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                    Init_Master(false);
                })
                .on("error", function (error) {
                    ShowError(error.message);
                    if (error.receipt) {
                        transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                    }
                    Init_Master(false);
                })
        } else {
            var multiContract = GetMultiSendContract();
            await inputToken.contract.methods.approveMax(multiContract._address)
                .send({
                    from: account
                })
                .on("receipt", function (receipt) {
                    transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                    Init_Master(false);
                })
                .on("error", function (error) {
                    ShowError(error.message);
                    if (error.receipt) {
                        transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                    }
                    Init_Master(false);
                });
        }
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}

async function GetOutputDecimals() {
    try {
        var decimals = await outputToken.contractChain.methods.decimals().call();
        return Number(decimals);
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}

async function GetInputDecimals() {
    try {
        var decimals = await inputToken.contractChain.methods.decimals().call();
        return Number(decimals);
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}

async function AddToken() {
    try {
        var _decimals = await GetOutputDecimals();
        const isAdded = await web3.currentProvider.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: outputToken.ca,
                    symbol: outputToken.symbol,
                    decimals: _decimals,
                    image: ""
                },
            },
        });
    } catch (error) {
        ShowError(error.message);
    }
}

async function SwapNativeToSRG20(contract, min, deadline, amount, srg20Address) {
    try {
        var gwei = null;
        if (chainid == 56 && options.gwei > 5) {
            gwei = options.gwei * Math.pow(10, 9);
        }

        contract.methods.swapExactETHforSRG20(deadline.toString(), min.toString(), srg20Address)
            .send({
                from: account, value: amount, gasPrice: gwei
            })
            .on("receipt", function (receipt) {
                $("#loadingModal").modal("hide");
                $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                $("#confirmModal").modal("show");
                transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                Init_Master(false);
            })
            .on("error", function (error) {
                $("#loadingModal").modal("hide");
                if (error.receipt) {
                    transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                }
                ShowError(error.message);
                Init_Master(false);
            });

    }
    catch (error) {
        setTimeout(function () {
            $("#loadingModal").modal("hide");
        }, 500);
        ShowError(error.message);
        console.log(error);
    }
}

async function SwapSRG20ToNative(contract, min, deadline, amount, srg20Address) {
    try {
        var gwei = null;
        if (chainid == 56 && options.gwei > 5) {
            gwei = options.gwei * Math.pow(10, 9);
        }

        contract.methods.swapExactSRG20forETH(amount, deadline.toString(), min.toString(), srg20Address)
            .send({
                from: account, gasPrice: gwei
            })
            .on("receipt", function (receipt) {
                $("#loadingModal").modal("hide");
                $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                $("#confirmModal").modal("show");
                transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                Init_Master(false);
            })
            .on("error", function (error) {
                $("#loadingModal").modal("hide");
                if (error.receipt) {
                    transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                }
                ShowError(error.message);
                Init_Master(false);
            });

    }
    catch (error) {
        setTimeout(function () {
            $("#loadingModal").modal("hide");
        }, 500);
        ShowError(error.message);
        console.log(error);
    }
}

async function SwapSRG20ToSRG20(contract, min, deadline, amount, srg20AddressSpent, srg20AddressRec) {
    try {
        var gwei = null;
        if (chainid == 56 && options.gwei > 5) {
            gwei = options.gwei * Math.pow(10, 9);
        }

        contract.methods.swapExactSRG20forSRG20(amount, deadline.toString(), min.toString(), srg20AddressSpent, srg20AddressRec)
            .send({
                from: account, gasPrice: gwei
            })
            .on("receipt", function (receipt) {
                $("#loadingModal").modal("hide");
                $("#btn-AddWallet").text(`Add ${outputToken.symbol} to Wallet`);
                $("#confirmModal").modal("show");
                transactionLog.push({ hash: receipt.transactionHash, type: 0 });
                $("#txnlink").attr("href", GetTxnExplorerLink() + receipt.transactionHash);
                Init_Master(false);
            })
            .on("error", function (error) {
                $("#loadingModal").modal("hide");
                if (error.receipt) {
                    transactionLog.push({ hash: error.receipt.transactionHash, type: -1 });
                }
                ShowError(error.message);
                Init_Master(false);
            });

    }
    catch (error) {
        setTimeout(function () {
            $("#loadingModal").modal("hide");
        }, 500);
        ShowError(error.message);
        console.log(error);
    }
}