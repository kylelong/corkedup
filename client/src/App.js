import './App.css';
import { Route, BrowserRouter as Router, Switch, Link, BrowserRouter } from "react-router-dom";
import LandingPage from './components/landing_page/LandingPage';
import SignUp from './components/SignUp';
// import Payment from './components/Payment';
import Savings from './components/Savings';
import Recipes from './components/Recipes';
import Account from './components/Account';
import WineBars from './components/events/WineBars';
import Restaurants from './components/events/Restaurants';
import Events from './components/events/Events';
function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/bars" component={WineBars} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/payment" component={Payment} /> */}
          <Route path="/events" component={Events} />
          <Route path="/savings" component={Savings} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/account" component={Account} />
        </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
