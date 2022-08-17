import React, { useState } from "react"
import { Modal } from "reactstrap"
import image1 from "../assests/image1.jpg"
import { SocialMediaIconsReact } from "social-media-icons-react"

const FundCreatorModal = ({ modal, toggle, args }) => {
    const [ethAmountCounter, setEthAmountCounter] = useState(0.01)

    const minus = () => {
        if (ethAmountCounter > 0.01) {
            setEthAmountCounter(() => ethAmountCounter - 0.01)
        }
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <div className="flex flex-col p-6 m-3   justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-16 md:m-0 md:p-16">
                    <div>
                        <img
                            src={image1}
                            alt="image1"
                            className="mt-4shadow-xl rounded-md hover:scale-105 duration-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-6  justify-center ">
                        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <div>
                                <div className="inline-block text-sm px-3 py-1 rounded-full  text-white bg-black">
                                    Trending
                                </div>
                            </div>

                            <div className="max-w-sm text-2xl font-medium">Anush GS </div>

                            <input
                                className="max-w-sm text-5xl text-center font-medium  border-none focus:outline-none"
                                min={ethAmountCounter}
                                value={ethAmountCounter.toFixed(2)}
                            />
                            <div className="text-sm font-light text-grey-400">
                                Minimum Donation 0.01
                            </div>
                            <div className="flex items-center justify-center mt-3 space-x-3 group">
                                <div className="w-2 h-2 rounded-full bg-green-400 group-hover:animate-ping"></div>
                                <div class="text-sm">50+ donations</div>
                            </div>
                            <div className="flex mt-3 justify-center space-y-0  space-x-4 md:flex-row md:space-x-16 md:space-y-0">
                                <button
                                    onClick={() =>
                                        setEthAmountCounter(() => ethAmountCounter + 0.01)
                                    }
                                    className="px-4 py-2 rounded-lg font-bold text-blue-700 text-sm bg-blue-200 hover:bg-blue-300 duration-500"
                                >
                                    +
                                </button>
                                <button
                                    onClick={minus}
                                    className="px-4 py-2 rounded-lg font-bold text-blue-700 text-sm bg-blue-200 hover:bg-blue-300 duration-500"
                                >
                                    -
                                </button>
                            </div>

                            <div>
                                <button className="w-full px-5 py-3 text-white font-medium bg-blue-500 rounded-xl hover:bg-blue-800 duration-500">
                                    Donate
                                </button>
                            </div>
                            <div className="flex flex-row mt-2 pt-3 h-16 px-10 space-x-10">
                                <SocialMediaIconsReact
                                    icon="instagram"
                                    borderStyle="none"
                                    roundness="50"
                                    iconColor
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default FundCreatorModal
