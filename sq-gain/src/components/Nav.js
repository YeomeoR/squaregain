//routing
import { Link } from 'react-router-dom';
//contact
import SendEmail from '../components/SendEmail';
//style
import styled from 'styled-components';
//images
import logo5 from '../images/logo5.png';

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <img src={logo5} alt="logo4" />
      </Link>
      <ul>
        <Link to="/">
          <li>About Us</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/clients">
          <li>Our Clients</li>
        </Link>
      </ul>
      <h1 id="logo" onClick={SendEmail}>
        <em>Square Gain</em>
      </h1>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #5b5b5b;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Rambla', sans-serif;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
    color: #fff;
  }
  h1 {
    color: #ed55d3;
    font-size: 2rem;
  }
  #logo {
    cursor: pointer;
  }
`;

export default Nav;
