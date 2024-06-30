import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';
import './ListPage.css';

const ListPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
                setRecipes(response.data.meals || []);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                setLoading(false);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <div className="list-container">
            <h2>Lista de Receitas</h2>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="recipe-list">
                    {recipes.map((recipe) => (
                        <RecipeItem key={recipe.idMeal} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListPage;
