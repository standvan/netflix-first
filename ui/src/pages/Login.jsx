import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import BackgroundImage from '../components/BackgroundImage';
import HeaderLogin from '../components/HeaderLogin';
import { firebaseAuth } from '../utils/firebase-config';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async() => {
    try{
      await signInWithEmailAndPassword(firebaseAuth,email,password);
    }
    catch(err){
      console.log(err);
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) navigate('/')
  });
  return (
    <Container>
        <BackgroundImage></BackgroundImage>
        <div className="content">
          <HeaderLogin login></HeaderLogin>
          <div className="main">
            <div className="login-form">
                <h1>Login</h1>
                <input type="email" 
                placeholder='Enter Email ...'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" 
                placeholder='Enter password...'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Log In</button>
            </div>
          </div>
        </div>
      </Container>
  )
}
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  .background-image{
    position: relative;
    height: 100vh;
    width: 100vw;
  }
  .content{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 0 100px;
    background-color: rgba(0, 0, 0, 0.644);
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      img{
        height: 100%;
      }
      button{
        padding: 10px 15px;
        font-size: 18px;
        background-color: var(--text-color);
        border: none;
        border-radius: 5px;
        color:white;
        &:hover{
          opacity: 0.5;
        }
      }
    }
    .main{
        display: flex;
        align-items: center;
        justify-content: center;
        .login-form{
            width: 400px;
            height: 500px;
            background-color: #000000a2;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: white;
            gap: 20px;
            padding: 20px;
            input{
                width: 100%;
                padding: 10px 20px;
            }
            button{
                width: 100%;
                padding: 10px 20px;
                background-color: var(--text-color);
                border: none;
                border-radius: 5px;
                color: white;
                &:hover{
                    opacity: 0.5;
                }
            }
        }
    }
  }
    
`;
export default Login