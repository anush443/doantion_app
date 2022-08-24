import React from "react"
import ethlogo from "../../assests/ethlogo.png"
import iconFacebook from "../../assests/iconFacebook.svg"
import iconInstagram from "../../assests/iconInstagram.svg"
import iconTwitter from "../../assests/iconTwitter.svg"

const Footer = () => {
    return (
        <>
            <footer className="bg-[#212529]">
                <div className="max-w-6xl mx-auto text-center px-6 py-6 mt-32 text-white">
                    <div className="flex flex-col items-center justify-between space-y-8   md:flex-row md:space-y-0 ">
                        <img src={ethlogo} alt="logo" className="w-16" />
                        <div className="flex flex-col items-center justify-between flex-1  mb-10 space-y-6 md:flex-row md:space-y-0 md:mb-0 ">
                            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">
                                            FAQs
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">
                                            FAQs
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">
                                            FAQs
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="hover:text-strongCyan">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between w-32 py-1">
                                <a href="/">
                                    <img src={iconFacebook} alt="" className="duration-200 ficon" />
                                </a>
                                <a href="/">
                                    <img
                                        src={iconInstagram}
                                        alt=""
                                        className="duration-200 ficon"
                                    />
                                </a>
                                <a href="/">
                                    <img src={iconTwitter} alt="" className="duration-200 ficon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
