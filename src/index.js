import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { ChainContextProvider } from "../src/store/chain-Context"
import { UserTypeContextProvider } from "../src/store/user-type-context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <ChainContextProvider>
                    <UserTypeContextProvider>
                        <App />
                    </UserTypeContextProvider>
                </ChainContextProvider>
            </NotificationProvider>
        </MoralisProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
