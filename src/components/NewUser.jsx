import React, { useState } from 'react';
import axios from 'axios';

const NewUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async () => {
        try {
            const response = await axios.post('https://backend-lxkjskx52a-uc.a.run.app/user', {
                username,
                password
            });
            console.log(response.data); // Handle the response data as needed
        } catch (error) {
            console.error(error); // Handle any errors that occur during the request
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={createUser}>Create User</button>
        </div>
    );
};

export default NewUser;