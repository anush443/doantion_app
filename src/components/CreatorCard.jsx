import React, { useState } from "react"
import image1 from "../assests/image1.jpg"
import bookmark from "../assests/bookmark.svg"
import FundCreatorModal from "./FundCreatorModal"
import { Card, Illustration } from "web3uikit"

const CreatorCard = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)
    return (
        <>
            <div
                style={{
                    width: "250px",
                }}
            >
                <Card
                    description="Click to create a dApp"
                    onClick={function noRefCheck() {
                        toggle()
                    }}
                    setIsSelected={function noRefCheck() {}}
                    title="dApp"
                    tooltipText={
                        <span style={{ width: 200 }}>
                            'Lorem Ipsum Dole met sai souni lokomit anici trenicid'
                        </span>
                    }
                >
                    <div>
                        <Illustration height="180px" logo="lazyNft" width="100%" />
                    </div>
                </Card>
                <FundCreatorModal
                    modal={modal}
                    toggle={toggle}
                    args={{ backdrop: true, size: "lg" }}
                />
            </div>
        </>
    )
}

export default CreatorCard
