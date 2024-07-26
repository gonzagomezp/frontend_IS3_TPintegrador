import React, { useEffect, useState } from "react";
import { getUsers, GetBaseUrl } from "@/Request";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        let users = await getUsers("https://backend-service-lxkjskx52a-uc.a.run.app");
        setUsers(users);
    }

    const test = async () => {
        try {
            const response = await axios.get("https://backend-lxkjskx52a-uc.a.run.app/users")
            console.log("Response: ", response)
        }catch(error) {
            console.error("Error: ", error)
        }
    }
      
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>{users && users.length > 0 && (
                <>
                    {users.map((user, index) => (
                        <li key={index}>{user.username}</li>
                    ))}
                </>
            )}

            </ul>
        </div>
    );
};

export default Users;
