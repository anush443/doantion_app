import React, { useState } from "react"
import ethlogo from "../assests/ethlogo.png"
import CreateAccountForm from "./CreateAccountForm"

const Hero = () => {
    const [modal, setModal] = useState(false)
    const [modalSize, setModalSize] = useState(false)

    const toggle = () => setModal(!modal)
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen md:flex-row bg-gradient-to-r from-indigo-500">
                <div className="flex  flex-col  p-2 space-y-5 text-center md:text-left  ">
                    <h3 className="text-4xl font-serif font-bold   tracking-widest">
                        Fund Your Favorite Creators
                    </h3>
                    <h3 className="text-4xl  font-serif font-bold md:text-left  tracking-widest">
                        Decentarziled funding
                    </h3>
                    <div className="flex flex-col md:flex-row mt-10  space-y-3 md:space-x-6 md:space-y-0 ">
                        <button className="px-6 py-2 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-green-500  hover:to-blue-500 duration-500">
                            Discover Creators
                        </button>
                        <button
                            onClick={toggle}
                            className="px-6 py-2 rounded-lg  text-lg font-medium text-white bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-green-500  hover:to-blue-500 duration-500"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
                <div className="flex mt-5 h-1/3 md:h-2/3 justify-center  md:mt-0">
                    <img src={ethlogo} alt="heroimg" className="object-fit" />
                </div>
            </div>
            <CreateAccountForm
                modal={modal}
                toggle={toggle}
                creatorBool={setModalSize}
                args={{ size: modalSize ? "lg" : "sm" }}
            />
        </>
    )
}

export default Hero
