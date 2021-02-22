import wineParty from './assets/wine_party.png';
import dollar from './assets/dollar.png';
import meal from './assets/diet.png';
import calendar from './assets/calendar.png';

import './App.css';
import './components/LoginForm';
import LoginForm from './components/LoginForm';
import ImageList from './components/ImageList';

function App() {
  let list = [
    {
      title: "Events",
      img: calendar,
      text:"Local and virtual events happening around the world so you are always in the loop."
    },
    {
      title: "Savings",
      img: dollar,
      text:"Flash wine sales and giveaways that save you money."
    },
    {
      title: "Recipes",
      img: meal,
      text:"Weekly tailored wine pairings to expand your palette."
    }
  ]
  return (
    <div className="main">
          <div className="container">
            <h3 id="name">Corked Up</h3>
            <p id="slogan">Helping you have the best wine experience wherever you are.</p>
            <LoginForm />
            <ImageList list={list} />
          </div>
            <img id="wineParty" src={wineParty}/>
    </div>
  );
}

export default App;
