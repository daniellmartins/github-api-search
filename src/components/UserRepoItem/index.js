import React from "react";

const UserRepoItem = ({ data }) => {
  return (
    <a
      className="user-repos__item flex items-center justify-between"
      target="_blank"
      rel="noreferrer"
      title="Go to Repository in GitHub"
      href={data.html_url}
    >
      <div className="user-repos__item-info">
        <span>{data.full_name}</span>
        <div>{data.name}</div>

        {data.language && (
          <div className="user-repos__item-language">{data.language}</div>
        )}
      </div>
      <span>★ {data.stargazers_count}</span>
    </a>
  );
};

export default UserRepoItem;
