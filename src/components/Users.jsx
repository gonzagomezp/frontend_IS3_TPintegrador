import React from "react";
import Loader from "@/components/ui/Loader";
import axios from "axios";
import { toast } from "sonner";

export default function Users({ users, setUsers, isLoading, setIsLoading, reload }) {

  const deleteUser = (id) => async () => {
    setIsLoading(true)
    const url = "https://backend-lxkjskx52a-uc.a.run.app/user/" + id
    const usersCopy = [...users]
    try {
      const response = await axios.delete(url)
      console.log(response.data)
      if (response.data) {
        toast.info("User deleted successfully")
        setUsers(usersCopy.filter((user) => user.id !== id))
      }

    } catch (error) {
      console.error(error)
      toast.error("An error occurred. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <div className="mt-10 grid justify-center">
      <h1 className="text-3xl font-medium mb-4 text-center">Users</h1>

      <div className="bg-gray-950 px-6 pb-6 pt-4 shadow-2xl shadow-gray-700 rounded-xl">
        {isLoading ? <Loader /> :
          <>
            {users.length > 0 ? (
              <table data-testid="users-table">
                <thead>
                  <tr className="border-b-2 h-10 text-center border-gray-400">
                    <th className="px-4">ID</th>
                    <th className="px-6">Username</th>
                    <th className="text-start">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`text-center h-10 hover:bg-gray-900 ${index !== users.length - 1 ? 'border-b border-gray-800' : 'rounded-b-xl'}`}
                      data-testid={`user-row-${user.id}`} // Añadir identificador único por usuario
                    >
                      <td className="px-4">{user.id}</td>
                      <td className="px-6">{user.username}</td>
                      <td className="">
                        <button
                          onClick={deleteUser(user.id)}
                          className="px-3 bg-transparent hover:scale-[120%] transform transition-transform"
                          data-testid={`delete-button-${user.id}`} // Añadir identificador al botón de eliminar
                        >
                          <i className="bi bi-trash-fill text-lg"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p className="text-start">No users found</p>}
          </>
        }
      </div>

      <div className="flex justify-center">
        <button
          className="mt-4 bg-gray-950 px-3 py-2 rounded-xl"
          onClick={reload}
          data-testid="refresh-button" // Añadir identificador al botón de refrescar
        >
          <i className="bi bi-arrow-clockwise text-3xl"></i>
        </button>
      </div>
    </div>

  );
}
