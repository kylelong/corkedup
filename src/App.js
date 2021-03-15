import './App.css';
import { Route, BrowserRouter as Router, Switch, Link, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Payment from './components/Payment';

function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/payment" component={Payment} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
