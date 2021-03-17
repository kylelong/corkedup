import './App.css';
import { Route, BrowserRouter as Router, Switch, Link, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Payment from './components/Payment';
import Events from './components/Events';
import Savings from './components/Savings';
import Recipes from './components/Recipes';
import Account from './components/Account';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/payment" component={Payment} />
        <Route path="/events" component={Events} />
        <Route path="/savings" component={Savings} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
