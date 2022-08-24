import React from "react"
import iconblacklist from "../../assests/iconblacklist.svg"

const Supercharge = () => {
    return (
        <>
            <section id="supercharge">
                <div className="max-w-6xl mx-auto text-center px-6 my-20">
                    <h3 className="text-4xl mb-10  font-bold text-darkGrayishBlue">
                        Decentralize Your Donations
                    </h3>
                    <p className="max-w-3xl mx-auto text-xl leading-9 mb-24 text-darkGrayishBlue">
                        We've got the tools to boost your productivity
                    </p>
                    <div className="flex flex-col space-y-16 justify-between md:space-x-8 md:flex-row md:space-y-0">
                        <div className="flex flex-col items-center space-y-5 ">
                            <img src={iconblacklist} alt="icon" className="mb-6" />
                            <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">
                                Join as creator
                            </h5>
                            <p className="max-w-md text-darkGrayishBlue">
                                Easily search your snippets by content, category, web address,
                                application, and more.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-5">
                            <img src={iconblacklist} alt="icon" className="mb-6" />
                            <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">
                                Join as user
                            </h5>
                            <p className="max-w-md text-darkGrayishBlue">
                                Easily search your snippets by content, category, web address,
                                application, and more.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-5">
                            <img src={iconblacklist} alt="icon" className="mb-6" />
                            <h5 className="text-2xl mb-2 font-bold text-darkGrayishBlue">
                                Join as both
                            </h5>
                            <p className="max-w-md text-darkGrayishBlue">
                                Easily search your snippets by content, category, web address,
                                application, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Supercharge
