import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeItem.css';

const RecipeItem = ({ recipe }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <div className="recipe-item">
            <h3>{recipe.name}</h3>
            <p><strong>Tempo de Preparo:</strong> {recipe.prepTimeMinutes} minutos</p>
            <p><strong>Cozinha:</strong> {recipe.cuisine}</p>
            <button onClick={handleDetailsClick} className="details-button">Detalhes</button>
        </div>
    );
};

export default RecipeItem;
