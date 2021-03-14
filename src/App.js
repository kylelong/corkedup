import './App.css';
import { Route, BrowserRouter as Router, Switch, Link, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/SignUp';

function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
