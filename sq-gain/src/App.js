import { Switch, Route } from 'react-router-dom';
//nav
import Nav from './components/Nav';
// Global style
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import OurClients from './pages/OurClients';
//images
// import logo3 from './images/logo3.png';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <img src={logo3} alt="" /> */}
      <Nav />
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
