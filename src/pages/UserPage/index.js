import React from "react";

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { useGitHubQuery } from "../../hooks";
import { Error, Loading, UserInfo, UserRepos } from "../../components";

const UserPage = () => {
  let { username } = useParams();
  let match = useRouteMatch();

  const { loading, error, data } = useGitHubQuery(`/users/${username}`);

  if (loading) return <Loading />;

  if (error || !data)
    return (
      <Error text="Username não encontrado. Por favor verifique e tente novamente." />
    );

  return (
    <div className="container">
      <div className="page user-page">
        <UserInfo data={data} />

        <div className="user-page__tabnav">
          <nav className="user-page__tabnav-nav">
            <Link
              className={
                window.location.pathname.includes("/repos") ? "active" : ""
              }
              to={`${match.url}/repos`}
            >
              Repositories ({data.public_repos})
            </Link>

            <Link
              className={
                window.location.pathname.includes("/starred") ? "active" : ""
              }
              to={`${match.url}/starred`}
            >
              Starred
            </Link>
          </nav>
        </div>

        <Switch>
          <Route path={`${match.path}/repos`}>
            <UserRepos path="repos" />
          </Route>
          <Route path={`${match.path}/starred`}>
            <UserRepos path="starred" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPage;
