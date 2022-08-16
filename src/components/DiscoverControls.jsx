import React from "react"

const DiscoverControls = () => {
    return (
        <>
            <div className="flex flex-col  space-y-5 items-center justify-center md:justify-between  md:flex-row md:space-y-0">
                <div className="flex  justify-between p-2  ">
                    <input
                        type="text"
                        className="ml-6   p-3  md:w-80  bg-slate-200 placeholder:font-thin focus:outline-none"
                        placeholder="Search"
                    />
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 text-gray-300 duration-200 hover:scale-110"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>
                <button className="px-14 py-3  text-white rounded-md shadow-2xl border border-black bg-black duration hover:bg-white hover:text-black">
                    Upload
                </button>
            </div>
        </>
    )
}

export default DiscoverControls
