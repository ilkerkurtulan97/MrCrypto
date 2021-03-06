import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../styling/Navigation.css";
import ErrorPage from "./ErrorPage";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Navigation({ username, surname }) {

  return (
    <div className="App">
      <Navbar color="dark" dark expand="md" fixed="" full light>
        <NavbarBrand href="/">MyCrypto</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/coin-news/">Coin News</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                  <DropdownItem>Coin Alarms</DropdownItem>
                  <DropdownItem>My Wallet</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Coin Calendar</DropdownItem>
              </DropdownMenu>
             
            </UncontrolledDropdown>
          </Nav>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="navbar-ns">
              {`${username} ${surname}`}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/profile">
                Profile
              </DropdownItem>
              <DropdownItem href="/messages">Messages</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
