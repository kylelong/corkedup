import wineParty from './wine_party.png';
import './App.css';
import './components/LoginForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="main">
          <div className="container">
            <h3 id="name">Corked Up</h3>
            <p id="slogan">Helping you have the best wine experience wherever you are.</p>
            <img id="wineParty" src={wineParty} alt="wine party image"/>
          </div>
          <LoginForm />
    </div>
  );
}

export default App;
