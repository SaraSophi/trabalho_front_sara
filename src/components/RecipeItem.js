import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeItem.css';

const RecipeItem = ({ recipe }) => {
    return (
        <div className="recipe-item">
            <div className="recipe-image-container">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
            </div>
            <div className="recipe-info">
                <h3>{recipe.strMeal}</h3>
                <p><strong>Categoria:</strong> {recipe.strCategory}</p>
                <p><strong>Área:</strong> {recipe.strArea}</p>
                <Link to={`/recipe/${recipe.idMeal}`} className="details-button">Detalhes</Link>
            </div>
        </div>
    );
};

export default RecipeItem;
