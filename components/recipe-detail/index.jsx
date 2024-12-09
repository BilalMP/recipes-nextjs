import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeDetailPage = ({ recipeDetail }) => {
    return (
        <div className='p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full mb-10'>
            <Link href={"/recipe"} className='underline text-lg font-medium'>Go to Recipe Page</Link>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-10">
                <div className='w-full lg:sticky top-0'>
                    <Image src={recipeDetail.image} width={400} height={400} alt={recipeDetail.name} className='w-4/5 rounded-lg object-cover' />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{recipeDetail.name}</h2>
                    <div className="flex gap-4">
                        <p>{recipeDetail.rating}</p>
                        <p>{recipeDetail.cuisine}</p>
                        <p>{recipeDetail.mealType[0]}</p>
                    </div>
                    <div className="mt-3">
                        <h1 className='underline font-bold text-lg'>Ingredients</h1>
                        <ul className='space-y-3 list-disc mt-4 text-sm pl-4'>
                            {recipeDetail.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-3">
                        <h1 className='underline font-bold text-lg'>Intructions</h1>
                        <ul className='space-y-3 list-disc mt-4 text-sm pl-4'>
                            {recipeDetail.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailPage