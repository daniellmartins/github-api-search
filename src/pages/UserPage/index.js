import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  let { username } = useParams();

  return (
    <div>
      <h1>UserPage: {username}</h1>
    </div>
  );
};

export default UserPage;
