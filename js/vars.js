const rpcs = {
    Ethereum: {
        chainid: 1,
        url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        symbol: "ETH",
        img: "eth.png",
        name: "Ethereum",
        rpcToAdd: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            blockExplorerUrls: ['https://etherscan.io'],
            rpcUrls: ['https://mainnet.infura.io/v3/'],
        }
    },
    BSC: {
        chainid: 56,
        url: "https://bsc-dataseed1.binance.org/",
        symbol: "BNB",
        img: "bsc.png",
        name: "Smart Chain",
        rpcToAdd: {
            chainId: '0x38',
            chainName: 'BSC Mainnet',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18
            },
            blockExplorerUrls: ['https://bscscan.com'],
            rpcUrls: ['https://bsc-dataseed1.binance.org/'],
        }
    },
    BSCTest: {
        chainid: 97,
        url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        symbol: "tBNB",
        img: "testnet.png",
        name: "BSC Test",
        rpcToAdd: {
            chainId: '0x61',
            chainName: 'BSC Test',
            nativeCurrency: {
                name: 'test Binance Coin',
                symbol: 'tBNB',
                decimals: 18
            },
            blockExplorerUrls: ['https://testnet.bscscan.com'],
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        }
    },
    Arbitrum: {
        chainid: 42161,
        url: "https://arb1.arbitrum.io/rpc",
        symbol: "aETH",
        img: "arbi.png",
        name: "Arbitrum",
        rpcToAdd: {
            chainId: '0xa4b1',
            chainName: 'Arbitrum',
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            blockExplorerUrls: ['https://arbiscan.io/'],
            rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        }
    },
    Polygon: {
        chainid: 137,
        url: "https://polygon-rpc.com/",
        symbol: "MATIC",
        img: "poly.png",
        name: "Polygon",
        rpcToAdd: {
            chainId: '0x89',
            chainName: 'Polygon',
            nativeCurrency: {
                name: 'Polygon',
                symbol: 'MATIC',
                decimals: 18
            },
            blockExplorerUrls: ['https://polygonscan.com/'],
            rpcUrls: ['https://polygon-rpc.com/'],
        }
    }
}

const multiABI = [{ "inputs": [{ "internalType": "address", "name": "_srgAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "SRG", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SRGI", "outputs": [{ "internalType": "contract ISRG", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_swapHelper", "type": "address" }], "name": "setSwapHelper", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minSRG20Out", "type": "uint256" }, { "internalType": "address", "name": "SRG20", "type": "address" }], "name": "swapExactETHforSRG20", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minETHOut", "type": "uint256" }, { "internalType": "address", "name": "SRG20Spent", "type": "address" }], "name": "swapExactSRG20forETH", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minSRG20Out", "type": "uint256" }, { "internalType": "address", "name": "SRG20Spent", "type": "address" }, { "internalType": "address", "name": "SRG20Received", "type": "address" }], "name": "swapExactSRG20forSRG20", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapHelper", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
const defaultABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarBuy", "type": "uint256" }], "name": "Bought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "FeesMulChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newMaxBag", "type": "uint256" }], "name": "MaxBagChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarSell", "type": "uint256" }], "name": "Sold", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newStablePair", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newStableToken", "type": "address" }], "name": "StablePairChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PADDING", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SHAREDIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "buyAmount", "type": "uint256" }, { "internalType": "uint256", "name": "minTokenOut", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "_buy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minBNBOut", "type": "uint256" }], "name": "_sell", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountSRGLiq", "type": "uint256" }], "name": "addLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "approveMax", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calculatePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "candleStickData", "outputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }, { "internalType": "uint256", "name": "open", "type": "uint256" }, { "internalType": "uint256", "name": "close", "type": "uint256" }, { "internalType": "uint256", "name": "high", "type": "uint256" }, { "internalType": "uint256", "name": "low", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newmarketingShare", "type": "uint256" }, { "internalType": "uint256", "name": "newRewardShare", "type": "uint256" }], "name": "changeBuyTaxDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newinPeriod", "type": "uint256" }, { "internalType": "uint256", "name": "newMinDistribution", "type": "uint256" }], "name": "changeDistributionCriteria", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "gas", "type": "uint256" }], "name": "changeDistributorSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newmarketingWallet", "type": "address" }], "name": "changeFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "changeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsDividendExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsFeeExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsTxLimitExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newmarketingShare", "type": "uint256" }, { "internalType": "uint256", "name": "newRewardShare", "type": "uint256" }], "name": "changeSellTaxDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newLimit", "type": "uint256" }, { "internalType": "uint256", "name": "newMaxTx", "type": "uint256" }], "name": "changeTxLimits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "dividendDistributor", "outputs": [{ "internalType": "contract DividendDistributor", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMarketCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSRGPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountSRGIn", "type": "uint256" }], "name": "getTokenAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }], "name": "getValueOfHoldings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "getsrgAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "indVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isDividendExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isFeeExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isTxLimitExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liqConst", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketingShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketingWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBag", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "openTrading", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellMarketingShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellRewardShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "taxBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "totalTx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalVolume", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tradeOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "txTimeStamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawTaxBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const surgeABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarBuy", "type": "uint256" }], "name": "Bought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "FeesMulChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newMaxBag", "type": "uint256" }], "name": "MaxBagChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarSell", "type": "uint256" }], "name": "Sold", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newStablePair", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newStableToken", "type": "address" }], "name": "StablePairChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIGRATION_WALLET", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SHAREDIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TRADE_OPEN_TIME", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "minTokenOut", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "_buy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minBNBOut", "type": "uint256" }], "name": "_sell", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "addLiquidity", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "approveMax", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calculatePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "candleStickData", "outputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }, { "internalType": "uint256", "name": "open", "type": "uint256" }, { "internalType": "uint256", "name": "close", "type": "uint256" }, { "internalType": "uint256", "name": "high", "type": "uint256" }, { "internalType": "uint256", "name": "low", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newTeamWallet", "type": "address" }, { "internalType": "address", "name": "newTreasuryWallet", "type": "address" }], "name": "changeFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "changeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsFeeExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsTxLimitExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newStablePair", "type": "address" }, { "internalType": "address", "name": "newStableAddress", "type": "address" }], "name": "changeStablePair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newteamShare", "type": "uint256" }, { "internalType": "uint256", "name": "newtreasuryShare", "type": "uint256" }], "name": "changeTaxDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newLimit", "type": "uint256" }], "name": "changeWalletLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "getBNBAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBNBPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMarketCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountBNBIn", "type": "uint256" }], "name": "getTokenAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }], "name": "getValueOfHoldings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "indVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isFeeExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isTxLimitExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liqConst", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBag", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sellMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "taxBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "totalTx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalVolume", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasuryShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasuryWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "txTimeStamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawTaxBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const surgeARBIABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarBuy", "type": "uint256" }], "name": "Bought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "FeesMulChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newMaxBag", "type": "uint256" }], "name": "MaxBagChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarSell", "type": "uint256" }], "name": "Sold", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newStablePair", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newStableToken", "type": "address" }], "name": "StablePairChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SHAREDIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "minTokenOut", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "_buy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minBNBOut", "type": "uint256" }], "name": "_sell", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "addLiquidity", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addresses", "type": "address[]" }, { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }], "name": "addToWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "approveMax", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calculatePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "candleStickData", "outputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }, { "internalType": "uint256", "name": "open", "type": "uint256" }, { "internalType": "uint256", "name": "close", "type": "uint256" }, { "internalType": "uint256", "name": "high", "type": "uint256" }, { "internalType": "uint256", "name": "low", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newTeamWallet", "type": "address" }, { "internalType": "address", "name": "newTreasuryWallet", "type": "address" }], "name": "changeFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "changeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsFeeExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsTxLimitExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newStablePair", "type": "address" }, { "internalType": "address", "name": "newStableAddress", "type": "address" }], "name": "changeStablePair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newteamShare", "type": "uint256" }, { "internalType": "uint256", "name": "newtreasuryShare", "type": "uint256" }], "name": "changeTaxDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newLimit", "type": "uint256" }], "name": "changeWalletLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "enableTrade", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "getBNBAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBNBPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMarketCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountBNBIn", "type": "uint256" }], "name": "getTokenAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }], "name": "getValueOfHoldings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "indVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isFeeExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isLaunched", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isTradeOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isTxLimitExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "launch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "liqConst", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBag", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sellMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "taxBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "totalTx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalVolume", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasuryShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasuryWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "txTimeStamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawTaxBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const testABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarBuy", "type": "uint256" }], "name": "Bought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "FeesMulChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newMaxBag", "type": "uint256" }], "name": "MaxBagChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "beans", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dollarSell", "type": "uint256" }], "name": "Sold", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newStablePair", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newStableToken", "type": "address" }], "name": "StablePairChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIGRATION_WALLET", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SHAREDIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TRADE_OPEN_TIME", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "minTokenOut", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "_buy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "minBNBOut", "type": "uint256" }], "name": "_sell", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "addLiquidity", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "approveMax", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calculatePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "candleStickData", "outputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }, { "internalType": "uint256", "name": "open", "type": "uint256" }, { "internalType": "uint256", "name": "close", "type": "uint256" }, { "internalType": "uint256", "name": "high", "type": "uint256" }, { "internalType": "uint256", "name": "low", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newTeamWallet", "type": "address" }, { "internalType": "address", "name": "newTreasuryWallet", "type": "address" }], "name": "changeFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newBuyMul", "type": "uint256" }, { "internalType": "uint256", "name": "newSellMul", "type": "uint256" }], "name": "changeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsFeeExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "changeIsTxLimitExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newStablePair", "type": "address" }, { "internalType": "address", "name": "newStableAddress", "type": "address" }], "name": "changeStablePair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newteamShare", "type": "uint256" }, { "internalType": "uint256", "name": "newtreasuryShare", "type": "uint256" }], "name": "changeTaxDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newLimit", "type": "uint256" }], "name": "changeWalletLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "getBNBAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBNBPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMarketCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountBNBIn", "type": "uint256" }], "name": "getTokenAmountOut", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }], "name": "getValueOfHoldings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "indVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isFeeExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isTxLimitExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liqConst", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBag", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sellMul", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tVol", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "taxBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "totalTx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalVolume", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasuryShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasuryWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "txTimeStamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawTaxBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const bnbABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }];
const bnbTestABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }];
const ethABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }];
const caSRGBSC = "0x9f19c8e321bD14345b797d43E01f0eED030F5Bff";
const caSRGTEST = "0x3816B271c3D89726e80f4c79EE303639d05999D0";
const caSRGETH = "0xcD682EF09d07668d49A8103ddD65Ff54AebFbfDe";
const caSRGARBI = "0x31ad8255cb8e428e8b0f6ab6a6f44804642720af";
const caETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const caETHARBI = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
const caBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const caTEST = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
const caPOLY = "0x0000000000000000000000000000000000001010";
const caMULTIETH = "0xE7c3A30e723Da82B97B7B946f313f47FaFc0796d";
const caMULTIBSC = "0x6582f6D737E9d4340b1d70C7cd0370Cbd769F6B4";
const caMULTIPOLY = "";
const caMULTITEST = "0xB021981653AEF454bBf77046265ab58e8673f3e7";
const caMULTIARBI = "0xFC10dF1809ecCB234d8e269AA24DD3B9c2c90473";


var web3 = new Web3(Web3.givenProvider);
var web3bsc = new Web3(new Web3.providers.HttpProvider(rpcs.BSC.url));
var web3test = new Web3(new Web3.providers.HttpProvider(rpcs.BSCTest.url));
var web3eth = new Web3(new Web3.providers.HttpProvider(rpcs.Ethereum.url));
var web3arbi = new Web3(new Web3.providers.HttpProvider(rpcs.Arbitrum.url));
//var contractBNB = new web3.eth.Contract(bnbABI, caBNB);
//var contractBscBNB = new web3bsc.eth.Contract(bnbABI, caBNB);
//var contractETH = new web3.eth.Contract(bnbABI, caETH);
//var contractEthETH = new web3eth.eth.Contract(ethABI, caETH);
//var contractSurgeBSC = new web3bsc.eth.Contract(surgeABI, caSRGBSC);
//var contractSurgeETH = new web3eth.eth.Contract(surgeABI, caSRGETH);
var contractSurge;
var contractSurgeNW;
var account = "";

var options = {
    slippage: 15,
    gwei: 5,
    deadline: 20
};

var transactionLog = [];

const systemImages = {};

const systemTokensBSC = [
    {
        ca: "0x9f19c8e321bD14345b797d43E01f0eED030F5Bff",
        img: "img/system/Token.png",
        name: "SURGE",
        symbol: "SRG"
    },
    {
        ca: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        img: "img/system/bsc.png",
        name: "Binance Coin",
        symbol: "BNB"
    },
    {
        ca: "0xbC8F89861737C3B8c60a05165E0a5C5B8A137fAc",
        img: "img/system/lit.png",
        name: "Lightning",
        symbol: "LIT"
    },
    {
        ca: "0xcC8A1364Bd05e05402e8b28dAe554b5d6216E6B9",
        img: "img/system/chad.png",
        name: "Chad",
        symbol: "CHAD"
    },
    {
        ca: "0x323B211505f8800ce21c7210e4d3F7Fd1291320A",
        img: "img/system/taco.png",
        name: "SPACE TACO",
        symbol: "TACO"
    },

    {
        ca: "0x253Af03A3b6e1A6d9d9bb6535834f8993221fB9B",
        img: "img/system/police.png",
        name: "SURGE POLICE",
        symbol: "$POLICE"
    },

    {
        ca: "0x9D51227A9b078E01da2935Af9679347dC260E277",
        img: "img/system/safe.png",
        name: "SAFESURGE",
        symbol: "$SAFESURGE"
    },
    {
        ca: "0x264Ff18224511eAB3b0caCc7C4f3B427912A6D06",
        img: "img/system/toob.png",
        name: "SpaceToob",
        symbol: "STOOB"
    },
    {
        ca: "0x4b765f17402063a462aE7E475287f7De7BafaEEc",
        img: "img/system/penny.png",
        name: "PennyMoon",
        symbol: "Penny"
    },
    {
        ca: "0x43C3EBaFdF32909aC60E80ee34aE46637E743d65",
        img: "img/system/ape.jpeg",
        name: "SURGE APE REBORN",
        symbol: "$APE"
    },
    {
        ca: "0x138F1383C76Fc15aeDCF82E531c59442d13A4d53",
        img: "img/system/baby.png",
        name: "baby surge ",
        symbol: "bsrg"
    },
    {
        ca: "0xd1B78268e234ba01A56fDAB62d525422ad334103",
        img: "img/system/infi.png",
        name: "Infinity Surge",
        symbol: "$ISURGE"
    },
    {
        ca: "0x2e6Cd6B93373391cBeBa065fB08d9adFA4afC6aB",
        img: "img/system/ando.png",
        name: "ANDO",
        symbol: "ANDO"
    },
    {
        ca: "0x318688CD55C3e991B3a5CfBb01019568820678c6",
        img: "img/system/sex.jpg",
        name: "Surgex",
        symbol: "SEX"
    },

    {
        ca: "0x0dA336D0e6Dbd5ADF18dbC4343D6C654f8fEA099",
        img: "img/system/PULS.png",
        name: "PulseFi",
        symbol: "PULS"
    },
    {
        ca: "0xCEd2cA28854FE481972E0229E08a264461e7550b",
        img: "img/system/barter.jpg",
        name: "SRG Bartertown",
        symbol: "Bcaps"
    },
    {
        ca: "0x3827F4f9cb007d381806AAeB20e4DcA374092848",
        img: "img/system/moku.png",
        name: "Ichimoku Inu",
        symbol: "MOKU"
    },
    {
        ca: "0x3c4B299253BC95908E3a9729Bf72F78CbE08F9Fc",
        img: "img/system/surgecore.png",
        name: "SurgeCore",
        symbol: "CORE"
    },
]
const systemTokensETH = [
    {
        ca: "0xcD682EF09d07668d49A8103ddD65Ff54AebFbfDe",
        img: "img/system/TokenEth.png",
        name: "SURGE",
        symbol: "SRG"
    },
    {
        ca: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        img: "img/system/eth.png",
        name: "Ethereum",
        symbol: "ETH"
    },
    {
        ca: "0x2225c9764fE39001C7cb1CBdE25a3443D5cAED7B",
        img: "img/system/BOB.png",
        name: "BANK OF BANKS",
        symbol: "BOB"

    },
    {
        ca: "0xF654d4C3CC334324ad474A0d5d3708dCA4c1CB25",
        img: "img/system/kraken.png",
        name: "Baby krakens",
        symbol: "BBKS"

    },
    {
        ca: "0xCD2eaFb04B464aF21D141D76647A28F6F298842f",
        img: "img/system/safe.png",
        name: "SAFESURGE",
        symbol: "SAFESURGE"
    }
]
const systemTokensTEST = [
    {
        ca: "0x3816B271c3D89726e80f4c79EE303639d05999D0",
        img: "img/system/Token.png",
        name: "SURGE",
        symbol: "SRG"
    },
    {
        ca: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
        img: "img/system/testnet.png",
        name: "Test Binance Coin",
        symbol: "tBNB"
    }
];
const systemTokensARBI = [
    {
        ca: "0x31ad8255cb8e428e8b0f6ab6a6f44804642720af",
        img: "img/system/TokenEth.png",
        name: "SURGE",
        symbol: "SRG"
    },
    {
        ca: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
        img: "img/system/eth.png",
        name: "Ethereum",
        symbol: "ETH"
    },
    {
        ca: "0x722D8fA60Fe59a14aBd194D94F1090Aa473A8577",
        img: "img/system/pepe.png",
        name: "PEPE",
        symbol: "PEPE"
    },
    {
        ca: "0xc336137CDB167f8FC36b2e222d53ADf4EC4a0Fd5",
        img: "img/system/surgecore.png",
        name: "SurgeCore",
        symbol: "CORE"
    },
];
const systemTokensPOLY = [];

var defaultTokens = [];

async function Init_Master(loadDefault = true, disconnect = false) {
    try {
        switching = true;
        await CheckChain();
        if (await IsConnected() && account == "" && !disconnect) {
            await Connect(true);
        }

        if (loadDefault) {
            LoadChainDefault();
        } else {
            inputToken.balance = await GetBalance(inputToken.ca);
            outputToken.balance = await GetBalance(outputToken.ca);
            $("#balanceInput").text(inputToken.balance.toFixed(4));
            $("#balanceOutput").text(outputToken.balance.toFixed(4));
        }

        switch (chainid) {
            case 1:
                defaultTokens = JSON.parse(JSON.stringify(systemTokensETH));
                break;
            case 56:
                defaultTokens = JSON.parse(JSON.stringify(systemTokensBSC));
                break;
            case 137:
                defaultTokens = JSON.parse(JSON.stringify(systemTokensPOLY));
                break;
            case 97:
                defaultTokens = JSON.parse(JSON.stringify(systemTokensTEST));
                break;
            case 42161:
                defaultTokens = JSON.parse(JSON.stringify(systemTokensARBI));
                break;
            default:
                defaultTokens = JSON.parse(JSON.stringify(systemTokensBSC));
                break;
        }

        var chainSuffix = GetChainSuffix();
        var imports = localStorage.getItem(`imported-${chainSuffix}`);
        if (imports !== null) {
            imports = JSON.parse(imports);
            for (let imp in imports) {
                var _imp = imports[imp];
                defaultTokens.push(_imp);
            }
        }

        var value = $("#inputSearch").val();
        if (value == "") {
            var html = ``;
            for (let token in defaultTokens) {
                var item = defaultTokens[token];
                var _balance = await GetBalance(item.ca);
                html += `
                    <div class="d-flex flex-row justify-content-between tokenrow cp p-2 px-3" onclick="SwitchCurrency('${item.ca}', '${item.name}', '${item.symbol}', ${0}, '${item.img}')">
                        <div class="d-flex flex-row">
                            <img class="search-icon" src="${item.img}" />
                            <div class="flex-column">
                                <h6 class="mb-0 text-white">${item.symbol}</h6>
                                <p class="mb-0 text-white-50">${item.name}</p>
                            </div>
                        </div>
                        <p class="search-balance">${formatter.format(_balance)}</p>
                    </div>`;
            }

            $("#tokenSearches").html(html);
        }

        if (account !== "") {
            $("#btn-connect2").hide();
            $("#btn-swap").show();
            CheckApproval();
            LoadHistory();
        }

        LoadOptions();
        LoadAmountsOutTooltip();
        UpdatePrices();
        switching = false;
    }
    catch (error) {
        ShowError(error.message);
    }
}

async function ShowError(message) {
    if (message.includes("Transaction has been reverted by the EVM")) {
        message = "Transaction has been reverted by the EVM";
    }
    $("#errorMessage").text(message);
    $("#errorModal").modal("show");
}

function GetContractABI(ca) {
    switch (ca) {
        case caTEST:
            return bnbTestABI;
        case caBNB:
        case caETH:
        case caETHARBI:
            return bnbABI;
        case caSRGBSC:
        case caSRGETH:
        case caSRGTEST:
            return surgeABI;
        case caSRGARBI:
            return surgeARBIABI;            
        default:
            return defaultABI;
    }
}

function GetCAType(ca) {
    switch (ca) {
        case caBNB:
            return "BNB";
        case caSRGBSC:
        case caSRGARBI:
        case caSRGETH:
        case caSRGTEST:
            return "SRG";
        case caETH:
        case caETHARBI:
            return "ETH";
        case caTEST:
            return "tBNB";
        default:
            return "SRG20";
    }
}

function IsMultiRoute(input, output) {
    switch (input) {
        case "BNB":
        case "tBNB":
        case "ETH":
            if (output == "SRG20") {
                return true;
            } else {
                return false;
            }
        case "SRG20":
            if (output == "ETH" || output == "BNB" || output == "tBNB" || output == "SRG20") {
                return true;
            } else {
                return false;
            }
        case "SRG":
            return false;
    }
}

function GetChainContract(ca) {
    var contract;
    var abi = GetContractABI(ca);

    switch (chainid) {
        case 56:
            contract = new web3bsc.eth.Contract(abi, ca);
            break;
        case 1:
            contract = new web3eth.eth.Contract(abi, ca);
            break;
        case 137:
            contract = new web3bsc.eth.Contract(abi, ca);
            break;
        case 97:
            contract = new web3test.eth.Contract(abi, ca);
            break;
        case 42161:
            contract = new web3arbi.eth.Contract(abi, ca);
            break;
        default:
            contract = new web3bsc.eth.Contract(abi, ca);
            break;
    }

    return contract;
}

function GetTxnExplorerLink() {
    switch (chainid) {
        case 1:
            return "https://etherscan.io/tx/";
        case 56:
            return "https://bscscan.com/tx/";
        case 137:
            return "https://polygonscan.com/tx/";
        case 97:
            return "https://testnet.bscscan.com/tx/";
        case 42161:
            return "https://arbiscan.io/tx/";
        default:
            return "https://bscscan.com/tx/";
    }
}

function GetTokenExplorerLink() {
    switch (chainid) {
        case 1:
            return "https://etherscan.io/token/";
        case 56:
            return "https://bscscan.com/token/";
        case 137:
            return "https://polygonscan.com/token/";
        case 97:
            return "https://testnet.bscscan.com/token/";
        case 42161:
            return "https://arbiscan.io/token/";
        default:
            return "https://bscscan.com/token/";
    }
}

function GetChainSuffix() {
    switch (chainid) {
        case 1:
            return "eth";
        case 56:
            return "bsc";
        case 137:
            return "poly";
        case 97:
            return "testnet";
        case 42161:
            return "arbi";
        default:
            return "bsc";
    }
}

function GetMultiSendContract() {
    switch (chainid) {
        case 1:
            return new web3.eth.Contract(multiABI, caMULTIETH);
        case 56:
            return new web3.eth.Contract(multiABI, caMULTIBSC);
        case 137:
            return new web3.eth.Contract(multiABI, caMULTIPOLY);
        case 97:
            return new web3.eth.Contract(multiABI, caMULTITEST);
        case 42161:
            return new web3.eth.Contract(multiABI, caMULTIARBI);
        default:
            return new web3.eth.Contract(multiABI, caMULTIBSC);
    }
}

async function LoadChainDefault() {
    try {
        var _systemTokens;
        switch (chainid) {
            case 1:
                _systemTokens = JSON.parse(JSON.stringify(systemTokensETH));
                break;
            case 56:
                _systemTokens = JSON.parse(JSON.stringify(systemTokensBSC));
                break;
            case 137:
                _systemTokens = JSON.parse(JSON.stringify(systemTokensPOLY));
                break;
            case 97:
                _systemTokens = JSON.parse(JSON.stringify(systemTokensTEST));
                break;
            case 42161:
                _systemTokens = JSON.parse(JSON.stringify(systemTokensARBI));
                break;
            default:
                _systemTokens = JSON.parse(JSON.stringify(systemTokensBSC));
                break;
        }

        for (let token in _systemTokens) {
            var _token = _systemTokens[token];
            systemImages[_token.ca] = _token.img;
        }

        if (_systemTokens.length > 0) {
            const urlParams = new URLSearchParams(window.location.search);
            var inputCa = _systemTokens[1].ca;
            var inputName = _systemTokens[1].name;
            var inputSymbol = _systemTokens[1].symbol;
            var inputBalance = _systemTokens[1].balance;
            var inputImg = _systemTokens[1].img;
            var outputCa = _systemTokens[0].ca;
            var outputName = _systemTokens[0].name;
            var outputSymbol = _systemTokens[0].symbol;
            var outputBalance = _systemTokens[0].balance;
            var outputImg = _systemTokens[0].img;

            //var refInput = urlParams.get('token');
            var refOutput = urlParams.get('token');

            //if (refInput !== null && !reverse) {
            //    if (web3.utils.isAddress(refInput)) {
            //        var _native = IsNative(refInput);
            //        var _surge = await IsSurge(refInput)
            //        if (_surge || _native) {
            //            inputCa = refInput;
            //            inputToken.contract = new web3.eth.Contract(GetContractABI(refInput), refInput);
            //            inputToken.contractChain = GetChainContract(refInput);
            //            inputName = await inputToken.contractChain.methods.name().call();
            //            inputSymbol = await inputToken.contractChain.methods.symbol().call();
            //            inputBalance = await GetBalance(refInput);
            //            inputImg = GetImageByCa(refInput);
            //        } else {
            //            ShowError("The address provided in the URL was not found in the SURGE ecosystem.")
            //        }

            //    } else {
            //        ShowError("The input address provided in the URL is incorrect.")
            //    }
            //}

            if (refOutput !== null) {
                if (web3.utils.isAddress(refOutput)) {
                    var _native = IsNative(refOutput);
                    var _surge = await IsSurge(refOutput)
                    if (_surge || _native) {
                        outputCa = refOutput;
                        outputToken.contract = new web3.eth.Contract(GetContractABI(refOutput), refOutput);
                        outputToken.contractChain = GetChainContract(refOutput);
                        outputName = await outputToken.contractChain.methods.name().call();
                        outputSymbol = await outputToken.contractChain.methods.symbol().call();
                        outputBalance = await GetBalance(refOutput);
                        outputImg = GetImageByCa(refOutput);
                    } else {
                        ShowError("The address provided in the URL was not found in the SURGE ecosystem.")
                    }
                } else {
                    ShowError("The output address provided in the URL is incorrect.")
                }
            }

            var htmlInput = `<input id="inputField" type="text" class="form-control" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span onclick="OpenTokenWindow(0);" class="input-group-text fw-700 cp">${inputSymbol}<img src="${inputImg}" /></span>
                        </div>`;
            var htmlOutput = `<input id="outputField" type="text" class="form-control" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span onclick="OpenTokenWindow(1);" class="input-group-text fw-700 cp">${outputSymbol}<img src="${outputImg}" /></span>
                        </div>`;


            $("#inputForm").html(htmlInput);
            inputToken.ca = inputCa;
            inputToken.name = inputName;
            inputToken.symbol = inputSymbol;
            inputToken.balance = inputBalance === undefined ? await GetBalance(inputCa) : inputBalance;
            inputToken.img = inputImg;
            inputToken.contract = new web3.eth.Contract(GetContractABI(inputCa), inputCa);
            inputToken.contractChain = GetChainContract(inputCa);

            $("#outputForm").html(htmlOutput);
            outputToken.ca = outputCa;
            outputToken.name = outputName;
            outputToken.symbol = outputSymbol;
            outputToken.balance = outputBalance === undefined ? await GetBalance(outputCa) : outputBalance;
            outputToken.img = outputImg;
            outputToken.contract = new web3.eth.Contract(GetContractABI(outputCa), outputCa);
            outputToken.contractChain = GetChainContract(outputCa);

            $("#balanceInput").text(inputToken.balance.toFixed(4));
            $("#balanceOutput").text(outputToken.balance.toFixed(4));

            $("#inputField").off();
            $("#inputField").on("input", async function () {
                CheckAmountOut();
            });
            $("#outputField").off();
            $("#outputField").on("input", async function () {
                CheckAmountOutReverse();
            });

            CheckAmountOut();
            $("#btn-swap").attr('disabled', false);
        } else {
            var htmlInput = `<input id="inputField" type="text" class="form-control" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span onclick="OpenTokenWindow(0);" class="input-group-text fw-700 cp"></span>
                        </div>`;
            var htmlOutput = `<input id="outputField" type="text" class="form-control" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span onclick="OpenTokenWindow(1);" class="input-group-text fw-700 cp"></span>
                        </div>`;

            inputToken.ca = "";
            $("#inputForm").html(htmlInput);
            $("#outputForm").html(htmlOutput);
            $("#balanceInput").text("0.0000");
            $("#balanceOutput").text("0.0000");
            $("#amountOut1").text("This chain is not yet implemented.");
            $("#btn-swap").attr('disabled', true);
        }
    }
    catch (error) {
        ShowError(error.message);
        console.log(error);
    }
}

function LoadHistory() {
    var html = ``;
    var defaultLink = GetTxnExplorerLink();

    for (let transaction in transactionLog) {
        var txn = transactionLog[transaction];
        var _icon = txn.type == 0 ? `<i class='bx bxs-check-circle fs-4 text-success' style="margin-right:0.75rem;vertical-align: middle;"></i>` : `<i class='bx bxs-error-circle fs-4 text-danger' style="margin-right:0.75rem;vertical-align: middle;"></i>`;
        html += `<div class="d-flex flex-row justify-content-between">
                    <p>${_icon}${txn.hash.substring(0, 13)}...</p>
                    <a target="_blank" href="${defaultLink}${txn.hash}"><i class='bx bx-link-external fs-4' style="margin-top:1px;"></i></a>
                </div>`;
    }

    $("#historyContent").html(html);
}

function LoadOptions() {
    var _options = localStorage.getItem("options");
    if (_options !== null) {
        options = JSON.parse(_options);
    }

    //if (options.slippage > 5) {
    //    $("#frontrun").show();
    //} else {
    //    $("#frontrun").hide();
    //}

    $("#slippage").val(options.slippage);
    $("#deadline").val(options.deadline);
    $(`#gwei5, #gwei6, #gwei7`).removeClass("active");
    $(`#gwei${options.gwei}`).addClass("active");
}

function SetOptions() {
    var _slippage = $("#slippage").val();
    var _deadline = $("#deadline").val();
    options.slippage = Number(_slippage);
    options.deadline = Number(_deadline);

    $(`#gwei5, #gwei6, #gwei7`).removeClass("active");
    $(`#gwei${options.gwei}`).addClass("active");
    //if (options.slippage > 5) {
    //    $("#frontrun").show();
    //} else {
    //    $("#frontrun").hide();
    //}

    localStorage.setItem("options", JSON.stringify(options));
}

function OpenImport(ca, symbol, name, balance) {
    $("#researchCheck").prop('checked', false);
    $("#importExplorer").attr("href", GetTokenExplorerLink() + ca);
    $("#importSymbol").text(symbol);
    $("#importName").text(name);
    $("#btn-import").attr("disabled", true);
    $("#btn-import").attr("onclick", `Import('${ca}', '${symbol}', '${name}', 'img/unknown2.png'); SwitchCurrency('${ca}', '${name}', '${symbol}', ${balance}, 'img/unknown2.png');$("#importModal").modal("hide");`);
    $("#importModal").modal("show");
}

function Import(ca, symbol, name, img) {
    var chainSuffix = GetChainSuffix();
    var imports = localStorage.getItem(`imported-${chainSuffix}`);
    if (imports !== null) {
        imports = JSON.parse(imports);
    } else {
        imports = [];
    }

    for (let val in imports) {
        if (imports[val].ca == ca) { return; }
    }

    imports.push(
        {
            ca: ca,
            img: img,
            name: name,
            symbol: symbol
        }
    );

    localStorage.setItem(`imported-${chainSuffix}`, JSON.stringify(imports));
    Init_Master(false);
}

function IsInDefault(ca) {
    for (let addr in defaultTokens) {
        if (ca == defaultTokens[addr].ca) {
            return true;
        }
    }

    return false;
}

function GetImageByCa(ca) {
    if (Object.keys(systemImages).includes(ca)) {
        return systemImages[ca];
    }

    return "img/unknown2.png";
}