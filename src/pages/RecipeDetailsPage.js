import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeDetailsPage.css';

const RecipeDetailsPage = ({ recipes }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = recipes.find(r => r.id === parseInt(id));

    if (!recipe) {
        return <p>Receita não encontrada</p>;
    }

    return (
        <div className="recipe-details-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                <span role="img" aria-label="back">🔙</span> Voltar
            </button>
            <div className="recipe-content">
                <div className="recipe-image-container">
                    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                </div>
                <div className="recipe-info">
                    <h2>{recipe.name}</h2>
                    <p><strong>Tempo de Preparo:</strong> {recipe.prepTimeMinutes} minutos</p>
                    <p><strong>Cozinha:</strong> {recipe.cuisine}</p>
                    <h3>Ingredientes:</h3>
                    <ul className="ingredient-list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailsPage;
