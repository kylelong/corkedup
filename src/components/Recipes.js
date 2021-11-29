import React from 'react';
import Navigation from './Navigation';
import dinner from '../assets/dinner.png';
import chickenPaillard from "../assets/chicken_paillard.jpg"
import '../styles/Recipes.css';
const Recipes = () => {
    let header = "RECIPES"
    let ingredients = ["4 skinless boneless chicken breasts",
    "1 tbsp extra virgin olive oil",
    "2 cups ripe cherry tomatoes",
    "2 tsp aged balsamic vinegar",
    "1 clove of garlic",
    "1 tsp kosher salt",
    "1/4 tsp black pepper",
    "1 bag of washed and dried arugula",
    "1/2 small lemon",
    "a spring of fresh rosemary",
    "large piece of manchego cheese (optional)"]
    let steps = [
        "Cut cherry tomatoes into halves and combine in a large mixing bowl with balsamic vinegar, pressed garlic, salt, pepper and arugula.",
        "Use a sharp knife to butterfly the chicken breasts. Season with salt, pepper, and fresh rosemary and cook on a hot grill pan for 3-4 minutes on each side until done. Plate cooked chicken on a large serving dish or cutting board.",
        "Squeeze the juice of half a lemon onto the arugula and drizzle with a little extra virgin olive oil. Gently toss the salad until evenly coated and serve on top of the grilled chicken.",
        "Garnish with grated manchego cheese, if desired."
    ]
    return (
        <>
                <Navigation />
                <img id="chef" src={dinner}  className="pageImg"/>
                <div id="recipeContainer">
                    <p id="recipeDesc">Weekly tailored recipes to expand your palette with a delicious bottle of wine</p>
                    
                    <div id="recipeMain">
                        <p class="recipeHeader">Chicken Paillard</p>
                            <p className="recipeDescription">Butterlfy chicken breast with basil tomatoes and balsimc vingear arugula</p>
                            <img src={chickenPaillard} className="recipeImage"/>
                        <p>This quick dish is simple, light yet so delicious and filling. The savory tastiness from the garlic and oily basil tomatoes and argula dances well with the juicy chicken breast. 
                            The crisp acidicity with notes of lemon,light honey & butter, and apricot flows beautifully with the meal. </p>
                        <p class="recipeSectionHeader">Varietal: Chardonnay</p>
                        <p class="recipeSectionHeader">Wines:</p>
                        <span>
                        <ul>
                            <a href="https://www.vivino.com/US/en/chateau-montelena-winery-chardonnay/w/1697?year=2017" target="_blank">
                            <li>2017 Chateau Montelena Napa Valley Chardonnay</li>
                            </a>
                            <a href="https://www.wineaccess.com/catalog/2018-grgich-hills-estate-chardonnay-estate-grown-napa-valley_3bb523ab-11e6-4e24-a6fd-fecdc77b6ba7/" target="_blank">
                            <li>2018 Grgich Hills Chardonnay</li>
                            </a>
                        </ul>
                        </span>
                    </div>

                    <div id="recipeInstructions">
                            <p><b>Ingredients:</b></p>
      
                            <ul>
                                {ingredients.map((item, i) => {
                                    return <li>{item}</li>
                                })

                                }
                            </ul>

                            <p><b>Steps:</b></p>
      
                            <ol className="recipeList">
                                {steps.map((item, i) => {
                                    return <li>{item}</li>
                                })

                                }
                            </ol> 
                             <a href="https://www.humnutrition.com/blog/easy-chicken-recipe/" class="source" target="_blank">Source</a>

                    </div>
                </div>


        </>
    );
};

export default Recipes;