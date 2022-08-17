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
