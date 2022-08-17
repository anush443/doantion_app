import { ConnectButton } from "web3uikit"
import { Link } from "react-router-dom"

import React, { useState } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap"

const CustomNavbar = ({ args }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
            {/* <div className="flex flex-row p-3 h-20 text-white items-center  bg-zinc-800 ">
                <div className="flex flex-row ml-3">
                    <h3 className=" text-xl ">FunDmE</h3>
                </div>
                <div className="flex flex-row items-center  mx-auto space-x-4">
                    <Link to="/">
                        <h3 className=" text-xl  hover:text-violet-700 duration-500">Home</h3>
                    </Link>
                    <Link to="/dashboard">
                        <h3 className=" text-xl  hover:text-violet-700 duration-500">Dashboard</h3>
                    </Link>
                    <Link to="/discover">
                        <h3 className=" text-xl  hover:text-violet-700 duration-500">Discover</h3>
                    </Link>
                </div>
                <div className=" items-center">
                    <ConnectButton />
                </div>
            </div> */}
            <div>
                <Navbar {...args}>
                    <NavbarBrand href="/">GoFund</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/discover">Discover</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dashboard">Dashboard</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>
                            <ConnectButton />
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default CustomNavbar
