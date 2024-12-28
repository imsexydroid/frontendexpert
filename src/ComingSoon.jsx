import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Coming Soon...</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ComingSoon;
