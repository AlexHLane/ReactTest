import withAuth from "@okta/okta-react/dist/withAuth";
import React, { Component } from "react";

import {Button, IconButton, Menu, MenuItem, ListItemText,} from '@material-ui/core';

import {AccountCircle} from '@material-ui/icons';


/*modified from this tutorial: https://developer.okta.com/blog/2018/07/10/build-a-basic-crud-app-with-node-and-react */
class LoginButton extends Component {
  state = {
    authenticated: null,
    user: null,
    menuAnchorEl: null,
  };

  //lifecycle hook checks
  componentDidUpdate() {
    this.checkAuthetication();
  }

  componentDidMount() {
    this.checkAuthetication();
  }

  //checking asynchronously the authentication of user
  async checkAuthetication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      const user = await this.props.auth.getUser();
      this.setState({ authenticated, user });
    }
  }

  //here to make sure you have access to the component otherwise you'd lose access to props or state
  login = () => this.props.auth.login();
  logout = () => {
    this.handleMenuClose();
    this.props.auth.logout();
  }

  handleMenuOpen = event => this.setState({menuAnchorEl: event.currentTarget});

  //if logged in, do drop down menu to logout
  //if not logged in, provide login button
  render() {
    //these {} are used instead of the require, it loads in the js node
    const { authenticated, user, menuAnchorEl} = this.state;

    if(authenticated == null) 
      return null;

    if(!authenticated)
      return <Button variant="outlined" color="secondary" onClick={this.login}>Get In Here!</Button>;

    const menuPosition = {
      vertical: 'top',
      horizontal: 'right',
    };


    return (
    <React.Fragment>
      <IconButton onClick={this.handleMenuOpen} color="inherit">
        <AccountCircle />
      </IconButton>

      <Menu
        anchorEl={menuAnchorEl}
        anchorOrigin={menuPosition}
        transformOrigin={menuPosition}
        open={!!menuAnchorEl}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.logout}>
          <ListItemText
            primary="Logout"
            secondary={user && user.name}
            />
        </MenuItem>
      </Menu>
    </React.Fragment>
    );
  }
}

//export default LoginButton;
export default withAuth(LoginButton);
