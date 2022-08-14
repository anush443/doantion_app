import React from "react"
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"

const ChainContext = React.createContext({
    chainID: "",
    contractAddress: "",
    abi: [],
    isWeb3Enabled: false,
})

export const ChainContextProvider = (props) => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const fundCreatorsAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const contextValue = {
        chainID: chainId,
        contractAddress: fundCreatorsAddress,
        abi: abi,
        isWeb3Enabled: isWeb3Enabled,
    }

    return (
        <>
            <ChainContext.Provider value={contextValue}>{props.children}</ChainContext.Provider>
        </>
    )
}

export default ChainContext
