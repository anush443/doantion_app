import React from "react"
import imageComputer from "../../assests/imageComputer.png"

const Features = () => {
    return (
        <>
            <section id="features">
                <div className="max-w-6xl mx-auto text-center px-6  my-20">
                    <div className="relative flex flex-col md:flex-row md:space-x-32">
                        <div className="md:w-1/2">
                            <img
                                src={imageComputer}
                                alt="imageC"
                                className="md:absolute right-[55%]"
                            />
                        </div>
                        <div className="flex flex-col mt-12 space-y-12 md:mb-60 md:w-1/2 md:text-left">
                            <div>
                                <h5 className="font-bold text-2xl mb-2 text-darkGrayishBlue">
                                    No hidden Charges
                                </h5>
                                <p className="max-w-md text-darkGrayishBlue">
                                    Easily search your snippets by content, category, web address,
                                    application, and more.
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-2xl mb-2 text-darkGrayishBlue">
                                    Quick
                                </h5>
                                <p className="max-w-md text-darkGrayishBlue">
                                    Easily search your snippets by content, category, web address,
                                    application, and more.
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-2xl mb-2 text-darkGrayishBlue">
                                    Instant
                                </h5>
                                <p className="max-w-md text-darkGrayishBlue">
                                    Easily search your snippets by content, category, web address,
                                    application, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
