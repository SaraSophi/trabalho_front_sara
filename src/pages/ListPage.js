import React from 'react';
import RecipeItem from '../components/RecipeItem';
import './ListPage.css';

const ListPage = ({ recipes, loading }) => {
    return (
        <div className="list-container">
            <h2>Lista de Receitas</h2>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="recipe-list">
                    {recipes.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListPage;
