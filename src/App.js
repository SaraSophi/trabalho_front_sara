import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
