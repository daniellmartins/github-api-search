import React from "react";

const Error = ({ text }) => {
  return (
    <div className="container error">
      <p className="text-center">
        {text ||
          "Parece que você perdeu a conexão. Por favor verifique e tente novamente."}
      </p>
    </div>
  );
};

export default Error;
