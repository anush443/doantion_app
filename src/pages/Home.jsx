import React from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Home/Hero"
import TracksSection from "../components/Home/TracksSection"
import Features from "../components/Home/Features"

const Home = () => {
    return (
        <>
            <Navbar args={{ color: "dark", dark: true, expand: true }} />
            <div className="bg-gradient-to-r min-h-screen  from-indigo-500">
                <Hero />
                <TracksSection />
                <Features />
            </div>
        </>
    )
}

export default Home
