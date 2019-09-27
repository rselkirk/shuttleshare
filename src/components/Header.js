import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add Shuttle</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>

    </div>
  );
};

Header.defaultProps = {
  title: 'ShuttleShare',
  subtitle: 'Rossland rideshare for people and bikes'
};

export default Header;