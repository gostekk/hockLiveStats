import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Game Not Found</h1>
        <p>We're unable to find that game.</p>
        <Link to="/" className="button button--link">
          HEAD HOME
        </Link>
      </div>
    </div>
  );
};
