import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);

        // setting timeout to simulate a loading state
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-center font-black font-sans p-2 italic underline">
        User List
      </h1>

      {isLoading ? (
        <div className="m-20">
          <Spin
            className="w-full"
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          />
          <p className="italic font-thin">Loading content</p>
        </div>
      ) : (
        <ul>
          {listOfUsers.map((user) => (
            <li
              key={user.id}
              className="p-3 shadow rounded-sm hover:shadow-xl hover:bg-[#d9ffb6] transform transition ease-in-out hover:cursor-pointer"
            >
              <FaUser className="text-[#00b96b] mr-3" spin />
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
