const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        minDonationAmount: "10000000000000000", // 0.01 ETH
    },
    4: {
        name: "rinkeby",
        minDonationAmount: "10000000000000000",
    },
    1: {
        name: "mainnet",
        keepersUpdateInterval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
