import React from "react";
import { useParams } from "react-router-dom";

import { useGitHubQuery } from "../../hooks";
import { Error, Loading } from "../";

const UserStarred = () => {
  let { username } = useParams();

  const { loading, error, data } = useGitHubQuery(`/users/${username}/starred`);

  if (loading) return <Loading />;

  if (error || !data) return <Error />;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default UserStarred;
