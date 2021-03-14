import React from "react";

const UserInfo = ({ data }) => {
  return (
    <div>
      <img
        style={{ width: "100px" }}
        src={data.avatar_url}
        alt={`[${data.login} avatar]`}
      />

      <h2>
        <a
          target="_blank"
          rel="noreferrer"
          title="Go to Profile in GitHub"
          href={data.html_url}
        >
          {data.login} ({data.name})
        </a>
      </h2>

      <p>{data.bio}</p>

      <ul>
        <li>{data.followers} followers</li>
        <li>{data.following} following</li>
      </ul>
    </div>
  );
};

export default UserInfo;
