import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetailsPage.css';

const RecipeDetailsPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setRecipe(response.data.meals[0]);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar detalhes da receita:', error);
                setLoading(false);
            }
        };
        fetchRecipeDetails();
    }, [id]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!recipe) {
        return <p>Receita não encontrada</p>;
    }

    return (
        <div className="recipe-details-container">
            <button className="back-button" onClick={() => window.history.back()}>
                <span role="img" aria-label="back">🔙</span> Voltar
            </button>
            <div className="recipe-content">
                <div className="recipe-info">
                    <h2>{recipe.strMeal}</h2>
                    <p><strong>Categoria:</strong> {recipe.strCategory}</p>
                    <p><strong>Área:</strong> {recipe.strArea}</p>
                    <h3>Ingredientes:</h3>
                    <ul className="ingredient-list">
                        {getIngredients(recipe).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p><strong>Modo de Preparo:</strong> {recipe.strInstructions}</p>
                </div>
                <div className="recipe-image-container">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
                </div>
            </div>
        </div>
    );
};

const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
            ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }
    return ingredients;
};

export default RecipeDetailsPage;
