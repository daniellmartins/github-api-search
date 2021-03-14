import React from "react";
import { useParams } from "react-router-dom";

import { useGitHubQuery } from "../../hooks";
import { Error, Loading, UserRepoItem } from "../";

const UserRepos = ({ path }) => {
  let { username } = useParams();

  const { loading, error, data } = useGitHubQuery(`/users/${username}/${path}`);

  if (loading) return <Loading />;

  if (error || !data) return <Error />;

  return (
    <div className="user-repos">
      {data.map((item) => (
        <UserRepoItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default UserRepos;
