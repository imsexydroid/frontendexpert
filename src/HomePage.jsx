import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Frontend Expert</h1>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/html">HTML</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/js">JS</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/web">Web Dev</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
