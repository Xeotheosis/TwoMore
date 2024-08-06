import React, { useState, useEffect } from "react";

const RandomUserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const currentPage = Math.floor(users.length / 1000);
      const response = await fetch(
        `https://dummyjson.com/users?limit=1000&skip=${currentPage * 1000}`
      );
      const data = await response.json();

      if (data.users) {
        setUsers((prevUsers) => [
          ...prevUsers,
          ...data.users.map((user) => ({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          })),
        ]);
      } else {
        setError(new Error("No users found"));
      }
    } catch (err) {
      setError(err);
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="h-screen">
      <button
        onClick={fetchUsers}
        className="px-12 py-3 bg-white text-black rounded-full"
        disabled={loading}>
        {loading ? "Loading..." : "New Users"}
      </button>
      <h1 className="text-white text-xl underline my-4">Random Users List</h1>
      {error ? (
        <p className="text-red-500">Error loading users: {error.message}</p>
      ) : (
        <ol className="text-white">
          {users.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default RandomUserList;
