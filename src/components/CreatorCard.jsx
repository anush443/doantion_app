import React, { useState } from "react"
import image1 from "../assests/image1.jpg"
import bookmark from "../assests/bookmark.svg"
import FundCreatorModal from "./FundCreatorModal"

const CreatorCard = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)
    return (
        <>
            <div className="relative group" onClick={toggle}>
                <img src={image1} alt="" className="w-64  shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white opacity-5 duration-500 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div class="font-normal">
                            <p class="text-sm">Abstract Painting</p>
                            <p class="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <img src={bookmark} alt="bookmark" />
                        </div>
                    </div>
                </div>
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
