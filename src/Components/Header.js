import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'; // import CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Introduction</Link>
          </li>
          <li>
            <Link to="/Research">Research</Link>
          </li>
          <li>
            <Link to="/BorderImpacts">Border Impacts</Link>
          </li>
          <li>
            <Link to="/Publications">Publications</Link>
          </li>
          <li>
            <Link to="/Group">Group</Link>
          </li>
          <li>
            <Link to="/Facilities">Facilities</Link>
          </li>
          <li>
            <Link to="/Teaching">Teaching</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
