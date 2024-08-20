import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const url = "https://backend-lxkjskx52a-uc.a.run.app/users";
        try {
            const response = await axios.get(url);
            console.log(response.data); // Verifica la estructura de los datos en la consola
            setUsers(response.data); // Actualiza el estado con los datos obtenidos
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-medium">Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
