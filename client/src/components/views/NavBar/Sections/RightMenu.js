/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const Upload = require('../../../../assets/images/upload.png');

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (

      <Menu style={{background:"#ffffff00"}} mode={props.mode}>
  
        <Menu.Item key="mail">
          <NavLink  style={{color:'red'}} to="/login">Signin</NavLink>
        </Menu.Item>
        <Menu.Item key="app">
          <NavLink  style={{color:'red'}} to="/register">Signup</NavLink>
        </Menu.Item>
 
      </Menu>
    )
  } else {
    return (
      <Menu style={{background:'#ffffff00'}} mode={props.mode}>
        <Menu.Item key="create">
          <NavLink to="/video/upload"><img src={Upload} alt="Upload" /></NavLink>
        </Menu.Item>
        <Menu.Item key="logout">
          <a style={{color:'red'}}  onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

