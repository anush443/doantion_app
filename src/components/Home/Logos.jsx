import React from "react"
import metamaskLogo from "../../assests/metamaskLogo.png"
import safepalLogo from "../../assests/safepalLogo.png"
import tokenpocketLogo from "../../assests/tokenpocketLogo.png"
import trustwalletLogo from "../../assests/trustwalletLogo.png"
import walletconnectLogo from "../../assests/walletconnectLogo.png"

const Logos = () => {
    return (
        <section id="logos">
            <div className="max-w-6xl mx-auto  flex flex-col px-6  items-center justify-center my-44 space-y-8 md:flex-row md:space-y-0 md:space-x-32">
                <img src={metamaskLogo} alt="lgo" className="w-[100px]" />
                <img src={tokenpocketLogo} alt="lgo" className="w-[100px]" />

                <img src={trustwalletLogo} alt="lgo" className="w-[100px]" />
                <img src={walletconnectLogo} alt="lgo" className="w-[100px]" />
                <img src={safepalLogo} alt="lgo" className="w-[100px]" />
            </div>
        </section>
    )
}

export default Logos
