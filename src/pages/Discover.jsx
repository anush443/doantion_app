import React, { useState } from "react"
import CreatorCard from "../components/CreatorCard"
import DiscoverControls from "../components/DiscoverControls"
import FundCreatorModal from "../components/FundCreatorModal"
import Navbar from "../components/Navbar"

const Discover = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center  min-h-screen bg-slate-200 ">
                <div className="flex flex-col  space-y-3">
                    <DiscoverControls />
                    <div className="grid mt-5 gap-4 md:grid-cols-3">
                        <CreatorCard />
                        <CreatorCard />
                        <CreatorCard />
                        <CreatorCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover
