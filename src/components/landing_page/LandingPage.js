import wineParty from '../../assets/wine_party.png';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import '../../styles/LandingPage.css';

import LoginForm from './LoginForm';

import Features from "./Features";
import Pricing from "./Pricing";
import Questions from "./Questions";

function LandingPage() {

  return (
    <div className="main">
          <ul className="homeNavbarMenu">
            <Link to="#features">
              <li>
                  Features
              </li>
            </Link>
            <Link to="#pricing">
              <li>
                  Pricing
              </li>
            </Link>
            <Link to="#faq">
              <li>
                  FAQ
              </li>
            </Link>
          </ul>

      <div className="row1">
        <div className="container">
              <Logo />
              <p id="slogan">The best wine experience wherever you are.</p>
              <LoginForm />
            </div>
              <img id="wineParty" src={wineParty}/>
        </div>

        <Features />

        <Pricing />

        <Questions />

      

    </div>
  );
}

export default LandingPage;