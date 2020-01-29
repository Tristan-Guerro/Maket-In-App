import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthenticatedUser } from '../../redux/modules/user';
import { logoutUser } from '../../redux/modules/authentication';
import Darkmode from 'darkmode-js';


new Darkmode().showWidget();

var options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

class Header extends Component {
  state = {
  };

  componentWillMount = () => {
  }

  componentWillUnmount = () => {
  }

  buildNavigation = () => {
    const { user } = this.props;
    const links = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        authenticated: true,
      },
      {
        name: (user && user.firstName) || 'Profile',
        link: 'profile',
        authenticated: true,
      },
      {
        name: 'Sign out',
        onClick: this.props.logoutUser,
        authenticated: true,
      },
      {
        name: 'Sign in',
        link: 'login',
        authenticated: false,
      },
      {
        name: 'Register',
        link: 'register',
        authenticated: false,
      },
    ];

    return (
      <ul>
        {links.filter(link => link.authenticated === this.props.authenticated).map(link => (
          <li key={link.name}>
            {link.link && <Link to={link.link}>{link.name}</Link>}
            {link.onClick && <a href="javascript:void(null);" onClick={link.onClick}>{link.name}</a>}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <header className="clearfix">
        <strong className="logo left">Marketing In App</strong>
        <nav className="main-navigation right">
          {this.buildNavigation()}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
  authenticated: PropTypes.bool,
  logoutUser: PropTypes.func,
};

const mapStateToProps = ({ user, authentication }) => ({
  user: getAuthenticatedUser({ user, authentication }),
  authenticated: authentication.authenticated,
});

export default connect(mapStateToProps, { logoutUser })(Header);
