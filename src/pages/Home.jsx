import React from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Home/Hero"
import TracksSection from "../components/Home/TracksSection"
import Features from "../components/Home/Features"
import Access from "../components/Home/Access"
import Supercharge from "../components/Home/Supercharge"
import Logos from "../components/Home/Logos"

const Home = () => {
    return (
        <>
            <Navbar args={{ color: "dark", dark: true, expand: true }} />
            <div className="bg-gradient-to-r min-h-screen  from-indigo-500">
                <Hero />
                <TracksSection />
                <Features />
                <Access />
                <Supercharge />
                <Logos />
            </div>
        </>
    )
}

export default Home
