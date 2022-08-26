import React, { useContext, useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import ChainContext from "./chain-Context"

const UserTypeContext = React.createContext({
    address: "",
    hasAccount: false,
    userIsCreator: false,
    updateContext: () => {},
})

export const UserTypeContextProvider = (props) => {
    const [hasAccount, setHasAccount] = useState(false)

    const [userIsCreator, setUserIsCreator] = useState(false)
    const [updateContextFlag, setUpdateContextFlag] = useState(false)

    const { account, isWeb3Enabled } = useMoralis()
    // isWeb3Enabled && setAddress(account)
    const chainContextCtx = useContext(ChainContext)

    const { runContractFunction: getUser } = useWeb3Contract({
        abi: chainContextCtx.abi,
        contractAddress: chainContextCtx.contractAddress,
        functionName: "getUser",
        params: {
            _user: account,
        },
    })

    const getUserContext = async () => {
        const userFromcall = await getUser()

        if (userFromcall[0].toString() !== "0x0000000000000000000000000000000000000000") {
            setHasAccount(true)
        }
        if (userFromcall[0].toString() === "0x0000000000000000000000000000000000000000") {
            setHasAccount(false)
        }
        if (
            userFromcall[3] &&
            userFromcall[0].toString() !== "0x0000000000000000000000000000000000000000"
        ) {
            setUserIsCreator(true)
        }
        if (!userFromcall[3]) {
            setUserIsCreator(false)
        }
    }

    const updateContextHandler = async () => {
        await getUserContext()
        setUpdateContextFlag(true)
    }

    useEffect(() => {
        if (isWeb3Enabled || (isWeb3Enabled && updateContextFlag)) {
            getUserContext()
        }
    }, [isWeb3Enabled, account, updateContextFlag])

    const contextValue = {
        address: account,
        hasAccount: hasAccount,
        userIsCreator: userIsCreator,
        updateContext: updateContextHandler,
    }

    return (
        <>
            <UserTypeContext.Provider value={contextValue}>
                {props.children}
            </UserTypeContext.Provider>
        </>
    )
}

export default UserTypeContext
