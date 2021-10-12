import './App.css';
import LandingPage from './landingPage/landingPage'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import About from './about/About';
import Work from './work/work';
import Contact from './contact/contact';

function App() {
  return (
    <div>
      <Router>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
      </Router>
    </div>
      )
}

export default App;
