import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarText, NavbarToggler, Nav, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styling/Navigation.css';

function Navigation({username, surname}) {

  const handleProfile = () => {
    alert("ikooo");
  }

  return (
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed=""
    full
    light
  >
    <NavbarBrand href="/">
      MyCrypto
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Coin News
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Coin Alarms
            </DropdownItem>
            <DropdownItem>
              Deposit
            </DropdownItem>
            <DropdownItem>
            Withdrawal
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
            Coin Calendar
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
           className="navbar-ns">
            {`${username} ${surname}`}
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem onClick={handleProfile}>
              Profile
            </DropdownItem>
            <DropdownItem>
              Messages
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    </Collapse>
  </Navbar>
</div>
  );
}

export default Navigation;
