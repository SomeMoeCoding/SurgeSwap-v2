var timerChain = null;
var chainid = -1;

async function CheckChain(reset = false) {
    try {
        chainid = web3.currentProvider.chainId;
        var network = web3.currentProvider.networkVersion;

        try {
            chainid = Number(chainid);
        }
        catch {
            try {
                chainid = Number(network);
            }
            catch {
                // No Chain found
            }
        }

        var rpc;
        for (let l in rpcs) {
            if (chainid == rpcs[l].chainid) {
                rpc = rpcs[l];
            }
        }

        if (inputToken.contract == null || reset) {
            switch (chainid) {
                case 56:
                    $("#gasOptions").show();
                    contractSurge = new web3.eth.Contract(surgeABI, caSRGBSC);
                    contractSurgeNW = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
                    inputToken.contract = new web3.eth.Contract(bnbABI, caBNB);
                    inputToken.contractChain = new web3bsc.eth.Contract(bnbABI, caBNB);
                    outputToken.contract = new web3.eth.Contract(surgeABI, caSRGBSC);
                    outputToken.contractChain = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
                    break;
                case 1:
                    $("#gasOptions").hide();
                    contractSurge = new web3.eth.Contract(surgeABI, caSRGETH);
                    contractSurgeNW = new web3eth.eth.Contract(surgeABI, caSRGETH);
                    inputToken.contract = new web3.eth.Contract(ethABI, caETH);
                    outputToken.contract = new web3.eth.Contract(surgeABI, caSRGETH);
                    inputToken.contractChain = new web3eth.eth.Contract(ethABI, caETH);
                    outputToken.contractChain = new web3eth.eth.Contract(surgeABI, caSRGETH);
                    break;
                case 137:
                    //poly
                    break
                case 97:
                    //testnet
                    $("#gasOptions").show();
                    contractSurge = new web3.eth.Contract(testABI, caSRGTEST);
                    contractSurgeNW = new web3test.eth.Contract(testABI, caSRGTEST);
                    inputToken.contract = new web3.eth.Contract(bnbTestABI, caTEST);
                    inputToken.contractChain = new web3test.eth.Contract(bnbTestABI, caTEST);
                    outputToken.contract = new web3.eth.Contract(testABI, caSRGTEST);
                    outputToken.contractChain = new web3test.eth.Contract(testABI, caSRGTEST);
                    break
                case 42161:
                    //arbi
                    contractSurge = new web3.eth.Contract(surgeARBIABI, caSRGARBI);
                    contractSurgeNW = new web3arbi.eth.Contract(surgeARBIABI, caSRGARBI);
                    inputToken.contract = new web3.eth.Contract(ethABI, caETHARBI);
                    inputToken.contractChain = new web3arbi.eth.Contract(ethABI, caETHARBI);
                    outputToken.contract = new web3.eth.Contract(surgeARBIABI, caSRGARBI);
                    outputToken.contractChain = new web3arbi.eth.Contract(surgeARBIABI, caSRGARBI);
                    break
                default:
                    $("#gasOptions").show();
                    contractSurge = new web3.eth.Contract(surgeABI, caSRGBSC);
                    contractSurgeNW = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
                    inputToken.contract = new web3.eth.Contract(bnbABI, caBNB);
                    outputToken.contract = new web3.eth.Contract(surgeABI, caSRGBSC);
                    inputToken.contractChain = new web3bsc.eth.Contract(bnbABI, caBNB);
                    outputToken.contractChain = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
                    break;
            }
        }

        if (rpc !== undefined) {
            //Supported chain
            $("#chainlogo").attr("src", "img/" + rpc.img);
            $("#chainname").text(rpc.name);
            $("#bsc").show();
            $("#eth").show();
            $("#poly").show();
            $("#arbi").show();
            $("#testnet").show();

            switch (rpc.symbol) {
                case "BNB":
                    $("#bsc").hide();
                    break;
                case "ETH":
                    $("#eth").hide();
                    break;
                case "MATIC":
                    $("#poly").hide();
                    break;
                case "tBNB":
                    $("#testnet").hide();
                    break;
                case "aETH":
                    $("#arbi").hide();
                    break;
            }

        } else {
            //Unsupported Chain
            $("#bsc").show();
            $("#eth").show();
            $("#poly").show();
            $("#arbi").show();
            $("#testnet").show();
            $("#chainlogo").attr("src", "img/unknown.png");
            $("#chainname").text("Unsupported");
        }
    }
    catch(error) {
        $("#gasOptions").show();
        contractSurge = new web3.eth.Contract(surgeABI, caSRGBSC);
        contractSurgeNW = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
        inputToken.contract = new web3.eth.Contract(bnbABI, caBNB);
        outputToken.contract = new web3.eth.Contract(surgeABI, caSRGBSC);
        inputToken.contractChain = new web3bsc.eth.Contract(bnbABI, caBNB);
        outputToken.contractChain = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
    }
}

async function SwapChain(rpc) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(rpc.chainid) }],            
        });
        await CheckChain();
    } catch (e) {
        if (e.toString().includes("available")) {
            alert("Please change your chain through your wallet menu.");
        }

        if (e.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [rpc.rpcToAdd],
                });
            } catch (addError) {
                console.error(addError);
            }
        }
        console.error(e)
    }

}

async function IsConnected() {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length) {
            return true;
        } else {
            return false;
        }
    }
    catch {
        return false;
    }
}

async function Connect(auto = false) {
    if (typeof ethereum !== 'undefined') {
        try {
            web3.setProvider(Web3.givenProvider);
            var acc = await ethereum.request({ method: 'eth_requestAccounts' });
            account = acc.toString();
            $("#btn-connect").hide();
            $("#btn-connect-mob").hide();
            $("#btn-disconnect").show();
            $("#btn-disconnect-mob").show();
            $("#walletModal").modal("hide");
            $("#walletModal").modal("hide");
            $("#walletaddress").text(account.substring(0, 7) + "..." + account.substring(account.length - 4, account.length));
            $("#walletaddress2").text(account.substring(0, 7) + "..." + account.substring(account.length - 4, account.length));

            CheckChain();
            if (!auto) {
                Init_Master();
            }
        }
        catch (error) {
            console.log(error);
            if (error.code === 4001) {
                alert("Connection Rejected");
            }
        }
    } else {
        if (provider.connected == true) {
            ConnectWC();
        }
    }
}

const WalletConnectProvider = window.WalletConnectProvider.default;
var provider;

async function ConnectWC() {
    try {
        provider = new WalletConnectProvider({
            rpc: {
                56: "https://bsc-dataseed.binance.org/",
                1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                137: "https://polygon-rpc.com/",
                43114: "https://api.avax.network/ext/bc/C/rpc",
                25: "https://rpc.artemisone.org/cronos",
                42161: "https://arb1.arbitrum.io/rpc"
            }
        });

        if (provider.connected != true) {
            var acc = await provider.enable();
            web3.setProvider(provider);
            account = acc[0];
            $("#btn-connect").hide();
            $("#btn-connect-mob").hide();
            $("#btn-disconnect").show();
            $("#btn-disconnect-mob").show();
            $("#walletModal").modal("hide");
            $("#walletModal").modal("hide");
            $("#walletaddress").text(account.substring(0, 7) + "..." + account.substring(account.length - 4, account.length));
            $("#walletaddress2").text(account.substring(0, 7) + "..." + account.substring(account.length - 4, account.length));

            CheckChain(true);
            Init_Master();
        }
        else {
        }
    } catch (error) {
        provider = null;
        console.log(error);
        if (error.code === 4001) {
            alert("Connection Rejected");
        }
    }
}

async function Disconnect() {
    $("#btn-connect").show();
    $("#btn-disconnect").hide();
    $("#btn-connect-mob").show();
    $("#btn-disconnect-mob").hide();
    $("#walletModal").modal("hide");

    //$("#disconnect-menu").hide(400);
    $("#walletaddress").text("Not Connected");    
    account = "";
    if (provider !== undefined) {
        if (provider.connected == true) {
            localStorage.removeItem("walletconnect");
            await provider.disconnect();
        }
    }
    CheckChain();
    Init_Master(true, true);
}

ethereum.on("accountsChanged", async function () {
    var acc = await ethereum.request({ method: 'eth_requestAccounts' });
    account = acc.toString();
    $("#walletaddress").text(account.substring(0, 7) + "..." + account.substring(account.length - 4, account.length));
    $("#walletaddress2").text(account.substring(0, 7) + "..." + account.substring(account.length - 4, account.length));
    await CheckChain();
    Init_Master();
});

var chainChangedTimer = null;
ethereum.on("chainChanged", async function () {
    if (firstLoad) { return; }
    await CheckChain(true);
    if (chainChangedTimer == null) {
        chainChangedTimer = setTimeout(function () { Init_Master(); }, 500);
    } else {
        clearInterval(chainChangedTimer);
        chainChangedTimer = null;
        chainChangedTimer = setTimeout(function () { Init_Master(); }, 500);
    }
});