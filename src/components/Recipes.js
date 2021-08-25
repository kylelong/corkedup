import React from 'react';
import Navigation from './Navigation';
import dinner from '../assets/dinner.png';
import '../styles/Recipes.css';
const Recipes = () => {
    let header = "RECIPES"
    return (
        <div>
                <Navigation />
                <img id="chef" src={dinner}  className="pageImg"/>
            

        </div>
    );
};

export default Recipes;