//nav
import Nav from './components/Nav';
// Global style
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
//images
// import logo2 from './images/SGLogo2.png';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <img src={logo2} alt="" /> */}
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
