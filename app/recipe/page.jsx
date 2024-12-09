import RecipeList from '@/components/recipe-list'
import React from 'react'

const getRecipes = async () => {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        return data?.recipes;
    } catch (error) {
        throw new Error(error);
    }
}

const Recipe = async () => {
    const recipes = await getRecipes();
    return (
        <RecipeList recipeList={recipes} />
    )
}

export default Recipe