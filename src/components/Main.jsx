import React from "react"
import Recipe from "./Recipe"
import List from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients,setIngredients]=React.useState(["rice","egg","ham","soy sauce"])
    const [recipe, setRecipe] = React.useState("")

    function add(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev=>[...prev,newIngredient])
    }
    async function getRecipe() {
        const response = await getRecipeFromMistral(ingredients)
        setRecipe(response)
    }
    return (
        <main>
            <form action={add} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length>0 ? <List ingredients={ingredients} getRecipe={getRecipe} />:null}

            {recipe?<Recipe recipe={recipe}/>:null}

        </main>
    )
}