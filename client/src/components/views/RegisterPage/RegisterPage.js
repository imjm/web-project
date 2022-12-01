import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser} from '../../../_actions/user_action'  
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


function RegisterPage(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {

    setEmail(event.currentTarget.value)
  }

  const onNameHandler = (event) => {

    setName(event.currentTarget.value)
  }
  
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }


  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(Password !== ConfirmPassword){
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
    }


    let body = {
      email: Email,
      password: Password,
      name: Name
    }

    dispatch(registerUser(body))
    .then(response => {
      if (response.payload.success) {
        navigate("/login")
      } else {
        alert("Failed to sign up")
      }
    })

  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>

      <form style={{display: 'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler}/>

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>


        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

        <br />
        <button>
          회원가입
        </button>
      </form>
    </div>
  )
}

export default RegisterPage