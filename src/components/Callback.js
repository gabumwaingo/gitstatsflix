import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');
        const clientId = 'YOUR_CLIENT_ID';
        const clientSecret = 'YOUR_CLIENT_SECRET';
        const redirectUri = 'http://localhost:3000/callback'; // Same as in GitHub settings

        // Exchange code for an access token
        axios.post('https://github.com/login/oauth/access_token', null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                redirect_uri: redirectUri,
            },
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => {
            const accessToken = response.data.access_token;

            // Store the access token (localStorage, Redux, etc.)
            localStorage.setItem('githubAccessToken', accessToken);

            // Redirect to desired page
            history.push('/');
        })
        .catch(error => {
            console.error('Error exchanging code for access token', error);
        });
    }, [location.search, history]);

    return (
        <div>
            <p>Completing the GitHub OAuth flow...</p>
        </div>
    );
};

export default Callback;