import React from "react";

const UserInfo = ({ data }) => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img
          style={{ width: "100px" }}
          src={data.avatar_url}
          alt={`[${data.login} avatar]`}
        />
      </div>

      <div className="flex flex-column flex-1">
        <a
          className="user-info__title"
          target="_blank"
          rel="noreferrer"
          title="Go to Profile in GitHub"
          href={data.html_url}
        >
          <h2>
            {data.login} ({data.name})
          </h2>
        </a>

        <p className="user-info__bio flex flex-1">{data.bio}</p>

        <ul>
          <li>{data.followers} followers</li>
          <li>{data.following} following</li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
