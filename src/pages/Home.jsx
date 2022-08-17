import React from "react"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar args={{ color: "dark", dark: true, expand: true }} />
            <Hero />
        </>
    )
}

export default Home
