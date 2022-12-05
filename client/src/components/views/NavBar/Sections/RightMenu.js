import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

function RightMenu(props) {
  const navigate = useNavigate();
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success) {
        navigate("/login")
      } else {
        alert("로그아웃 하는데 실패했습니다.")
      }
    })
  }

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} >
        <Menu.Item key="mail" >
          <a href="/login" style={{ fontWeight: 'bold' }}>로그인</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register" style={{ fontWeight: 'bold' }}>회원가입</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="chat" style={{ fontWeight: 'bold' }}><a href='/chat'>채팅</a></Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>로그아웃</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu;

