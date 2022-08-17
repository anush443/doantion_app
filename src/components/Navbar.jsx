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

const Navbar2 = ({ args }) => {
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
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Navbar2
