import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (username === '' || password === '') {
            setError('Todos os campos devem ser preenchidos.');
            return;
        }
        if (password.length < 8) {
            setError('A senha deve conter ao menos 8 caracteres.');
            return;
        }
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password
            });
            if (response.status === 200) {
                navigate('/list');
            }
        } catch (error) {
            setError('Falha no login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username" //emilys 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
