import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <h1>OOPS! Page not found!</h1>
      <Link to="/">
        <p>Link to Main Page</p>
      </Link>
      <Link to="/all">
        <p>Link to Page All</p>
      </Link>
    </>
  )
}

export default MainPage;
