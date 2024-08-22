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
        <div className="grid justify-center mt-10">
            <p className="text-3xl mb-5 text-center font-medium">{"Create a user here =)"}</p>
            <div className="mb-5 bg-red-900">
                <label className="block text-gray-400">Username</label>
                <input className="w-full" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label className="block text-gray-400">Password</label>
                <input className="w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-center">

            <button className="bg-gray-950 px-3 py-2 rounded-xl hover:scale-[106%] transform transition-transform" onClick={createUser}>Create user</button>
            </div>
        </div>
    );
};

export default NewUser;