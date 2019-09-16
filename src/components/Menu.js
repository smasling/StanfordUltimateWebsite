import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import App from './App';

const NavBar = styled.div`
  height: 100px;
  display: flex;
  width: 100%;
  color: #fafafa;
  background: black;
`;

const style = { color: '#fafafa', height: '10px' };

class Menu extends React.Component {
  render() {
    return (
      <NavBar>
        <Link style={style} to="/roster">
          Roster
        </Link>
        <Link to="/" style={style}>
          Schedule
        </Link>
        <Link to="/" style={style}>
          Highlights
        </Link>
        <Link style={style} to="/workout">
          Workout Log
        </Link>
      </NavBar>
    );
  }
}

export default Menu;
