const fs = require("fs")
const { network } = require("hardhat")

const frontEndContractsFile = "../constants/contractAddresses.json"
const frontEndAbiFile = "../constants/abi.json"

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        updateContractAddresses()
        updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const raffle = await ethers.getContract("FundCreators")
    fs.writeFileSync(frontEndAbiFile, raffle.interface.format(ethers.utils.FormatTypes.json))
}

async function updateContractAddresses() {
    const fundCreators = await ethers.getContract("FundCreators")
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        if (!contractAddresses[network.config.chainId.toString()].includes(fundCreators.address)) {
            contractAddresses[network.config.chainId.toString()].push(fundCreators.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [fundCreators.address]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]
