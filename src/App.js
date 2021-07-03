import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import IndexrouterComponent from './components/indexrouterComponent';
import NavbarComponent from './components/NavbarComponent';
import IndexComponent from './components/indexComponent';
import InstallationComponent from './components/installationComponent';
import SupportComponent from './components/supportComponent';
import FaqComponent from './components/faqComponent';
import ResellerComponent from './components/resellerComponent';
import MagfixedComponent from './components/magfixedComponent';
import TestlinkComponent from './components/testlinkComponent';


function App() {
  return (
    <div>
      <NavbarComponent/>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={IndexrouterComponent}/> */}
          <Route path="/home" component={IndexComponent}/>
          <Route path="/installation" component={InstallationComponent}/>
          <Route path="/support" component={SupportComponent}/>
          <Route path="/faq" component={FaqComponent}/>
          <Route path="/reseller" component={ResellerComponent}/>
          <Route path="/mag-fixed" component={MagfixedComponent}/>
          <Route path="/get-test-link" component={TestlinkComponent}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
