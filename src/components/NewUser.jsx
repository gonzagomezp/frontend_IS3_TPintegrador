import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "sonner"
import Loader from './ui/Loader';

const NewUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createUser = async () => {
        if (username === "") {
            setError("Insert a username!")
            toast.error("Insert a username!")
            return
        } else if (password === "") {
            setError("Insert a password!")
            toast.error("Insert a password!")
            return
        }
        setError(null)
        setIsLoading(true)
        try {
            const response = await axios.post('https://backend-lxkjskx52a-uc.a.run.app/user', {
                username,
                password
            });
            console.log(response.data); // Handle the response data as needed
            if (response.data.UserId) { // 
                toast.info("User created successfully")
                setUsername('')
                setPassword('')
            }
        } catch (error) {
            console.error(error); // Handle any errors that occur during the request
            if (error?.response?.data?.detail?.includes("Duplicate entry")) {
                toast.info(`The username '${username}' is already taken!`);
            } else {
                //toast.info("An error occurred. Please try again.");
                toast.info(error.response.data.detail);
            }
        }
        await new Promise(resolve => setTimeout(resolve, 700));
        setIsLoading(false)
    };

    return (
        <div className="grid justify-center mt-10">
            <p className="text-3xl mb-5 text-center font-medium">{"Create a user here =)"}</p>
            <div className="mb-5 ">
                <label className="block text-gray-400">Username</label>
                <input className="w-full bg-gray-950 h-10 rounded-md px-4 mb-4" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label className="block text-gray-400">Password</label>
                <input className="w-full bg-gray-950 h-10 rounded-md px-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-center">
                {isLoading ? <Loader /> :
                    <button className="bg-gray-950 px-3 py-2 rounded-xl hover:scale-[106%] transform transition-transform" onClick={createUser}>Create user</button>
                }
            </div>
            {error && (<p className="text-orange-800 text-center mt-2"><i className="bi bi-exclamation-triangle-fill"></i>{"  "}{error}</p>)}
        </div>
    );
};

export default NewUser;
