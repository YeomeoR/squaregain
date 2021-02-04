import React from 'react';

import styled from 'styled-components';
import reactivity from '../images/reactivity logo.png';
//send email
import SendEmail2 from '../components/SendEmail2'
//twitter
import tweet from '../images/iconmonstr-twitter-1-16.png'

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://twitter.com/Square_Gain" target="blank"><img id="tweet" src={tweet} alt="tweet"/></a>
      <h6>Web Design by Reactivity</h6>
      <img src={reactivity} alt="reactivity" onClick={SendEmail2} />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 10;
  max-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #242333 0%, #b097c6 100%);
  img {
      display: flex;
      height: 10vh;
      cursor: pointer;
    }
    a {
      position: relative;
      color: #44adea;
      padding: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
      #tweet {
        position: relative;
        float: right;
        height: 3rem;
        left: -0px;
      }
  h6 {
    font-size: 0.8rem;
    right: 80%;
    padding: 1rem 1rem;
    margin: 5px;
    justify-content: space around;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
  
`;

export default Footer;
