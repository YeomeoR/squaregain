//routing
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <Link to='/'><li>About Us</li></Link>
        <Link to='/services'><li>Services</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
        <Link to='/clients'><li>Our Clients</li></Link>
          </ul>
          <Link to='/'><h1 id="logo"><em>Square Gain</em></h1></Link>
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
`;

export default Nav;
