import React from "react"
import { ConnectButton } from "web3uikit"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row p-3 h-20 text-white items-center  bg-zinc-800 ">
                <div className="flex flex-row ml-3">
                    <h3 className=" text-xl text-white">FunDmE</h3>
                </div>
                <div className="flex flex-row items-center  mx-auto space-x-4">
                    <Link to="/">
                        <h3 className=" text-xl text-white hover:text-violet-700 duration-500">
                            Home
                        </h3>
                    </Link>
                    <Link to="/dashboard">
                        <h3 className=" text-xl text-white hover:text-violet-700 duration-500">
                            Dashboard
                        </h3>
                    </Link>
                    <Link to="/discover">
                        <h3 className=" text-xl text-white hover:text-violet-700 duration-500">
                            Discover
                        </h3>
                    </Link>
                </div>
                <div className=" items-center">
                    <ConnectButton />
                </div>
            </div>
        </>
    )
}

export default Navbar
