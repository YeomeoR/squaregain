import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 4;
}

html {
    @media (max-width: 1700px){
        font-size: 75%;
    }
 }


body {
    background: #3e3d4c;
    font-family: 'Rambla', sans-serif;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border: 3px solid #e87ad0;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Rambla', sans-serif;
   
    &:hover {
        background-color: #e87ad0;
        color: white;
        
    }
}
h1 {
   
    font-weight: bold;
    color: #e87ad0;
}
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
        font-size: 3rem;

    }
    h4 {
        font-size: 2rem;
        font-weight: bold;
        color: #e87ad0;
    }
    span {
        font-weight: bold;
        color: #e87ad0;
    }
    a {
        font-size: 1.1.rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    #contact {
        cursor: pointer;
    }

`;

export default GlobalStyle;