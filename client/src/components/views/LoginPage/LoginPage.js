import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser} from '../../../_actions/user_action'
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import Icon from '@ant-design/icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const { Title } = Typography;

function LoginPage(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {

    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => {
      if(response.payload.loginSuccess) {
        navigate('/')
      } else {
        alert('Error')
      }
    })

  }



  return (
    <div className="app">

      <Title level={2} >로그인</Title>

      <form style={{display: 'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} required/>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} required/>

        <br />
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage