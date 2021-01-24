import { Switch, Route, useLocation } from 'react-router-dom';
//animation
import { AnimatePresence } from 'framer-motion';
//nav
import Nav from './components/Nav';
// Global style
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import OurClients from './pages/OurClients';
import Footer from './components/Footer'
//images
// import logo3 from './images/logo3.png';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      {/* <img src={logo3} alt="" /> */}
      <Nav />
      <Switch location={location} key={location.pathname}>
        <AnimatePresence exitBeforeEnter>
          {/* the tag above should be wrapping the Switch, not inside them BUT it doesn't change pages if they are outside of them.*/}
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/services' exact>
          <Services />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>
        <Route path='/clients' exact>
          <OurClients />
        </Route>
        </AnimatePresence>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
