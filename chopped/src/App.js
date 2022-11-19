import './App.css';
import React, {useState} from 'react';

import ChickenTikkaMasala1 from './ChickenTikkaMasala1.jpeg'
import Foodie from './FoodieLogo.svg'

import RecipeStep from './components/RecipeStep'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom"

let expanded = false;
const ingredients1 = ["1 cup basmati rice", "1 1/2 tablespoons canola oil", "1 1/2 pounds boneless skinless chicken thighs, cut into 1-inch chunks", "Kosher salt and freshly ground black pepper (to taste)", "1/2 meduim-sized sweet onion (diced)"];
const ingredients2 = ["3 tablespoons tomato paste", "3 cloves garlic, minced", "1 tablespoon freshly grated ginger", "1 1/2 teaspoons garam masala", "1 1/2 teaspoons chili powder"];
const ingredients3 = ["1 1/2 teaspoons ground turmeric", "1 15-ounce can tomato sauce", "1 cup chicken stock", "1/2 cup heavy cream", "2 tablespoons chopped fresh cilantro leaves"];

const recipeSteps = ["In a large saucepan of 2 cups water, cook rice according to package instructions; set aside.", "Heat canola oil in a large stockpot or Dutch oven over medium heat. Season chicken with salt and pepper, to taste. Add chicken and onion to the stockpot and cook until golden, about 4-5 minutes.", "Stir in tomato paste, garlic, ginger, garam masala, chili powder and turmeric until fragrant, about 1 minute.", "Stir in tomato sauce and chicken stock; season with salt and pepper, to taste. Bring to a boil; reduce heat and simmer, stirring occasionally, until reduced and slightly thickened, about 10 minutes.", "Stir in heavy cream until heated through, about 1 minute.", "Serve immediately with rice, garnished with cilantro, if desired."];

function App() {

  const [expanded, setExpanded] = useState(false);
  const [buttonText, setButtonText] = useState("Show steps.");

  function handleClick(){
    setExpanded(!expanded);

    if(buttonText === "Show steps."){
      setButtonText("Hide steps.")
    } else {
      setButtonText("Show steps.");
    }
  }

  return (
    <>

      <div className='heading' style={{display: "flex", flexDirection: "row", alignItems: "center"}}>

        <img src={Foodie} id="logo"></img>  

        <h1 style={{textAlign: "center", fontSize: "10vh", margin: "0 auto"}}>Chicken Tikka Masala</h1>

      </div>

      <p style={{textAlign: "center"}}>This delectable dish is perfect for dinner at the dining table! Welcome to the beautiful infusion of plentiful herbs and spices into the worlds of veggies and chicken.</p>


      <div style={{display: "flex", flexDirection: "row"}}>


        <div className='image'>
          <img src={ChickenTikkaMasala1} alt="Chicken Tikka Masala Pic" id='ctm1'></img>
        </div>

        <div>
          <h2>Ingredients</h2>
          
          <div className='ingredients' style={{display: "flex", flexDirection: "row"}}>
            

            <div className="ingredientsSub" id="ingredients1">
              {ingredients1.map(
                (ingredient) => {return <li>{(ingredient)}</li>}
              )
              }
            </div>

            <div className="ingredientsSub" id="ingredients2">
                {ingredients2.map(
                  (ingredient) => {return <li>{(ingredient)}</li>}
                )
              }
            </div>

            <div className="ingredientsSub" id="ingredients3">
                {ingredients3.map(
                  (ingredient) => {return <li>{(ingredient)}</li>}
                )
              }
            </div>
            
          </div>


        </div>

      </div>

      <div style={{margin: "0 auto", position: "absolute"}}>
        <button style={{backgroundColor: "lightgrey", margin: "0 auto"}} onClick={() => handleClick()} id="stepsButton"
        >
        {buttonText}
        </button>

        {expanded && 
        
          <div className='steps'>
            
            {recipeSteps.map(

              (recipeStep) => { return <RecipeStep text={(recipeStep)}></RecipeStep>
            })}


          </div>
        }
      </div>
      


      

    </>
  );
}

export default App;
