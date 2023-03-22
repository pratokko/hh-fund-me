require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "http://eth-sepolia"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COIN_MARKET_CAP = process.env.COIN_MARKET_CAP || "key"

module.exports = {
    defaultNetwork: "hardhat",

    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },

        localhost: {
            url: "http://127.0.0.1:8545/",
            // hardhat has already placed accounts for us
            chainId: 31337,
        },
    },

    // solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.8.7" }, { version: "0.6.6" }],
    },

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        // coinmarketcap: COIN_MARKET_CAP,
        token: "MATIC",
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}
