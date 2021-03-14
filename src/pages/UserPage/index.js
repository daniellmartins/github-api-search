import React from "react";

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { useGitHubQuery } from "../../hooks";
import {
  Error,
  Loading,
  UserInfo,
  UserRepos,
  UserStarred,
} from "../../components";

const UserPage = () => {
  let { username } = useParams();
  let match = useRouteMatch();

  const { loading, error, data } = useGitHubQuery(`/users/${username}`);

  if (loading) return <Loading />;

  if (error || !data) return <Error />;

  return (
    <div>
      <UserInfo data={data} />

      <ul>
        <li>
          <Link to={`${match.url}/repos`}>
            Repositories ({data.public_repos})
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/starred`}>Starred</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/repos`}>
          <UserRepos />
        </Route>
        <Route path={`${match.path}/starred`}>
          <UserStarred />
        </Route>
      </Switch>
    </div>
  );
};

export default UserPage;
