import React from 'react';
import Navigation from './Navigation';
import chef from '../assets/chef.png';
import '../styles/Recipes.css';
const Recipes = () => {
    return (
        <div>
                <Navigation />
                <img id="chef" src={chef}  className="pageImg"/>
                <h3 className="pageHeader">RECIPES</h3>
        </div>
    );
};

export default Recipes;