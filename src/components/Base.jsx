"use client"; // Directiva para que este componente sea un Client Component

import Users from "./Users";
import Info from "./Info";
import NewUser from "./NewUser";
import { useState, useEffect } from "react";
import axios from "axios";

const Base = () => {
  const [currentView, setCurrentView] = useState("Info");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    const url = "https://backend-776943981745.us-central1.run.app//users";
    try {
      const response = await axios.get(url);
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []); //

  const views = [
    "Info",
    "Users",
    "Add User"
  ];

  const renderView = (name) => {
    switch (name) {
      case "Info":
        return <Info />;
      case "Users":
        return <Users users={users} setUsers={setUsers} isLoading={isLoading} setIsLoading={setIsLoading} reload={fetchUsers} />;
      case "Add User":
        return <NewUser />;
      default:
        return <Info />;
    }
  };

  return (
    <main className="bg-gray-900 pt-10">
      <div className="flex justify-center">
        <div className="flex gap-3 justify-center px-4 w-fit py-3 rounded-xl bg-gray-950">
          {views.map((view) => (
            <button
              key={view}
              className={`rounded-lg w-[100px] h-10 hover:bg-blue-900 ${currentView === view ? 'bg-blue-900' : ''}`}
              onClick={() => setCurrentView(view)}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
      {renderView(currentView)}
    </main>
  );
};

export default Base;
