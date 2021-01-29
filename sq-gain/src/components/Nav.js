//routing
import { Link } from 'react-router-dom';
//contact
import SendEmail from '../components/SendEmail';
//style
import styled from 'styled-components';
//images
import logo5 from '../images/logo5.png';
// import Wave from './Wave'

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
  padding: 1rem 6rem;
  background: #242333;
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
    padding-left: 5rem;
    color: #ed55d3;
    font-size: 2rem;
  }
  #logo {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    #logo {
      display: none;
    }
  @media (max-width: 880px) {
      min-height: 15vh;
      img {
        display: none;
      }
      ul {
      position: absolute;
      left: 0;
      display: block;
      }
      li {
        color: #ee3ac7;
        font-size: 1.2rem;
      }
  }
  `;


export default Nav;
