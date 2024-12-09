import RecipeDetailPage from '@/components/recipe-detail'

const getRecipesDetails = async (detail) => {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${detail}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
const RecipeDetails = async ({ params }) => {
    const { detail } = await params;

    const recipeDetail = await getRecipesDetails(detail);
    return (
        <RecipeDetailPage recipeDetail={recipeDetail} />
    )
}

export default RecipeDetails