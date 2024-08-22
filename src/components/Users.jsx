import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/ui/Loader";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true);
        const url = "https://backend-lxkjskx52a-uc.a.run.app/users";
        try {
            const response = await axios.get(url);
            console.log(response.data); // Verifica la estructura de los datos en la consola
            setUsers(response.data); // Actualiza el estado con los datos obtenidos
        } catch (error) {
            console.error("Error fetching users:", error);
        }
        setIsLoading(false)
    };

    return (
        <div className="mt-10 grid justify-center">

            <h1 className="text-3xl font-medium mb-4 text-center">Users</h1>

            <div className="bg-gray-950 px-6 pb-6 pt-4 shadow-2xl shadow-gray-700 rounded-xl">
                {isLoading ? <Loader /> :
                    <table>
                        <thead>
                            <tr className="border-b-2 h-10 border-gray-400">
                                <th className="w-[190px]">ID</th>
                                <th className="w-[190px]">Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className={`text-center h-10 hover:bg-gray-900 ${index !== users.length - 1 ? 'border-b border-gray-800' : 'rounded-b-xl'}`}
                                >
                                    <td className="w-[190px]">{user.id}</td>
                                    <td className="w-[190px]">{user.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}
            </div>
            <button className=""><i class="bi bi-arrow-clockwise"></i></button> 
        </div>
    );
}
