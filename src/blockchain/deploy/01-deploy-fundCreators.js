const { getNamedAccounts, deployments, network, run } = require("hardhat")
const {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const arguments = [networkConfig[chainId]["minDonationAmount"]]

    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    const fundCreators = await deploy("FundCreators", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(fundCreators.address, arguments)
    }

    const networkName = network.name == "hardhat" ? "localhost" : network.name
    log(`yarn hardhat run scripts/enterRaffle.js --network ${networkName}`)
    log("----------------------------------------------------")
}
module.exports.tags = ["all", "raffle"]
