import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const RecipeList = ({ recipeList }) => {
    console.log(recipeList)
    return (
        <>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className='text-2xl font-bold text-center mb-10'>Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        recipeList && recipeList.length > 0 ?
                            recipeList.map((recipe, index) => (
                                <Link href={`/recipe/${recipe.id}`} key={index}>
                                    <Card>
                                        <CardContent className="p-0 m-0 w-full">
                                            <Image src={recipe.image} width={400} height={400} alt={recipe.name} className='w-full' />
                                        </CardContent>
                                        <CardHeader>
                                            <CardTitle className="font-bold text-lg">{recipe.name}</CardTitle>
                                            <div className='flex justify-between'>
                                                <p>{recipe.rating}</p>
                                                <p>{recipe.cuisine}</p>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            ))
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default RecipeList