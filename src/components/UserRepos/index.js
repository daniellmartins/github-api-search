import React from "react";
import { useParams } from "react-router-dom";

import { useGitHubQuery } from "../../hooks";
import { Error, Loading } from "../";

const UserRepos = () => {
  let { username } = useParams();

  const { loading, error, data } = useGitHubQuery(`/users/${username}/repos`);

  if (loading) return <Loading />;

  if (error || !data) return <Error />;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <a
            target="_blank"
            rel="noreferrer"
            title="Go to Repository in GitHub"
            href={item.html_url}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserRepos;
