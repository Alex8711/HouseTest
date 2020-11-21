import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <>
        <h1>404 - Not Found!</h1>
        <h2>The page you are looking for is not existed</h2>
        <Link to="/">
            Go Home
      </Link>
    </>
);

export default NotFound;