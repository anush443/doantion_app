import React, { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Discover from "./pages/Discover"
import UserTypeContext from "../src/store/user-type-context"

const App = () => {
    const userTypeContextCtx = useContext(UserTypeContext)

    console.log(
        userTypeContextCtx.address,
        userTypeContextCtx.hasAccount,
        userTypeContextCtx.userIsCreator
    )
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/discover" element={<Discover />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
