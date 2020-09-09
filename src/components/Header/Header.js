import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "gatsby";
import "./Header.css";
import logo from "../../assets/images/KIMLOGO-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './styles';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import MailIcon from '../../assets/icons/mail.svg';

export default function Headers() {
  return (
    <div>
      <Navbar expand="lg" className="navBar" fixed="top">
        <div className="navBarBrand">
          <Link to={'/'} className='brand_link'>
            <img
              alt=""
              src={logo}
              width="70"
              height="50"
              className="d-inline-block header-logo"
            />
            <span style={{ marginLeft: '20px', marginRight: '20px' }}>Bless Our Nest</span>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link className="navBarLinkContainer"> */}
            <Link to={"/"} className=" navBarLink">
              Home
              </Link>
            {/* </Nav.Link> */}
            {/* <Nav.Link className="navBarLinkContainer"> */}
            <Link to={"/gallery"} className="navBarLink">
              Gallery
              </Link>
            {/* </Nav.Link> */}
            {/* <Nav.Link className="navBarLinkContainer"> */}
            <Link to={"/contact"} className="navBarLink">
              Contact
              </Link>
            {/* </Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <S.SocialWrapper>
            <a href="https://www.facebook.com/blessournestcanada">
              <S.SocialIcon src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/blessourneststaging/">
              <S.SocialIcon src={InstagramIcon} />
            </a>
            <a href="https://twitter.com/OurStaging">
              <S.SocialIcon src={TwitterIcon} />
            </a>
            <a href="mailto:bonstaging@outlook.com">
              <S.SocialIcon src={MailIcon} />
            </a>
          </S.SocialWrapper>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
