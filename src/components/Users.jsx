import React from "react";
import Loader from "@/components/ui/Loader";

export default function Users({ users, isLoading, reload }) {
  return (
    <div className="mt-10 grid justify-center">
      <h1 className="text-3xl font-medium mb-4 text-center">Users</h1>

      <div className="bg-gray-950 px-6 pb-6 pt-4 shadow-2xl shadow-gray-700 rounded-xl">
        {isLoading ? <Loader /> :
          <>
            {users.length > 0 ? (
              <table>
                <thead>
                  <tr className="border-b-2 h-10 border-gray-400">
                    <th className="w-[145px] md:w-[190px]">ID</th>
                    <th className="w-[145px] md:w-[190px]">Username</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`text-center h-10 hover:bg-gray-900 ${index !== users.length - 1 ? 'border-b border-gray-800' : 'rounded-b-xl'}`}
                    >
                      <td className="w-[145px] md:w-[190px]">{user.id}</td>
                      <td className="w-[145px] md:w-[190px]">{user.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p className="text-center">No users found</p>}
          </>
        }
      </div>
      <div className="flex justify-center">
        <button className="mt-4 bg-gray-950 px-3 py-2 rounded-xl" onClick={reload}>
          <i className="bi bi-arrow-clockwise text-3xl"></i>
        </button>
      </div>
    </div>
  );
}
