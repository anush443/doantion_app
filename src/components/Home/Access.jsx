import React from "react"
import imageDevices from "../../assests/imageDevices.png"

const Access = () => {
    return (
        <>
            <section id="access">
                <div className="max-w-6xl mx-auto text-center px-6 my-20">
                    <h3 className="text-4xl mb-10  font-bold text-darkGrayishBlue">
                        Donate From Anywhere
                    </h3>
                    <p className="max-w-3xl mx-auto  text-xl leading-9 mb-24 text-darkGrayishBlue ">
                        Whether you’re on the go, or at your computer, you can access all your
                        Clipboard snippets in a few simple clicks.
                    </p>
                    <img src={imageDevices} alt="all devices" className="mx-auto" />
                </div>
            </section>
        </>
    )
}

export default Access
