import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
          </ul>
          <h1>Square Gain</h1>
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
