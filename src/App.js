import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/recipes');
                const recipesWithImages = response.data.recipes.map(recipe => ({
                    ...recipe,
                    image: `https://dummyjson.com/image/i/products/${recipe.id}/1.jpg`
                }));
                setRecipes(recipesWithImages);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                setLoading(false);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/list" element={<ListPage recipes={recipes} loading={loading} />} />
                    <Route path="/recipe/:id" element={<RecipeDetailsPage recipes={recipes} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
