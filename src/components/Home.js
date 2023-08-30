import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const history = useHistory();

    const handleLogin = () => {
        const clientId = 'YOUR_CLIENT_ID';
        const redirectUri = 'http://localhost:3000/callback'; // Same as in GitHub settings
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;

        window.location.href = authUrl;
    };

    return (
        <div>
            <button onClick={handleLogin}>Login with GitHub</button>
        </div>
    );
};

export default Home;