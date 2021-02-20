import wineParty from './assets/wine_party.png';
import money from './assets/money.png';
import meal from './assets/meal.png';
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
      text:"Local and virtual events"
    },
    {
      title: "Savings",
      img: money,
      text:"Flash wine sales"
    },
    {
      title: "Recipes",
      img: meal,
      text:"Tailored wine pairings"
    }
  ]
  return (
    <div className="main">
          <div className="container">
            <h3 id="name">Corked Up</h3>
            <p id="slogan">Helping you have the best wine experience wherever you are.</p>
            <img id="wineParty" src={wineParty} alt="wine party image"/>
          </div>

          <div className="container2">
            <ImageList list={list} />
            <LoginForm />
          </div>
    </div>
  );
}

export default App;
