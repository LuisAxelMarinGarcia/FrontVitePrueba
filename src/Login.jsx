    import React, { useState } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import './login.css';


    function Login() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
        const response = await axios.post('http://3.224.141.144/api/auth/token', { email, password });
        console.log(response.data);
        setMessage('Inicio de sesión exitoso!');
        navigate('/');
        } catch (error) {
        console.error(error);
        setMessage('Error en el inicio de sesión');
        }
    };

    return (
        <div className="auth-page">
        <div className="auth-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Iniciar sesión</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </div>
    );
    }

    export default Login;
