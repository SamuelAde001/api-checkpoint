import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center font-black font-sans p-2 italic underline">
        User List
      </h1>
      <ul>
        {listOfUsers.map((user) => (
          <li
            key={user.id}
            className="p-3 shadow hover:shadow-xl hover:bg-[#d9ffb6] transform transition ease-in-out hover:cursor-pointer"
          >
            <FaUser className="text-[#00b96b] mr-3" />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
