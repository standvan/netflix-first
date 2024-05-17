import React, { useState } from 'react'
import styled from 'styled-components'
import {FaArrowRight} from 'react-icons/fa'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import HeaderLogin from '../components/HeaderLogin'
import BackgroundImage from '../components/BackgroundImage'
import { firebaseAuth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword,setShowpassword] = useState(false);
  const [formValues,setFormValues] = useState({
    email: '',
    password: ''
  });
  const handleSignIn = async () => {
    try{
      const {email,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
    } 
    catch(err){
      console.log(err);
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) navigate('/')
  });
  return (
    <>
      <Container>
        <BackgroundImage></BackgroundImage>
        <div className="content">
          <HeaderLogin></HeaderLogin>
          <div className="main">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <p>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
            <div className="form">
            {
              showPassword ? (<input type="password" 
              placeholder='Enter password...'
              name='password'
              value={formValues.password}
              onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value})}
              />) : (<input type='email' 
              placeholder='Enter email...'
              name='email'
              value={formValues.email}
              onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value})}
              ></input>)
            }
            {
              showPassword ? (<button onClick={handleSignIn}>Sign Up</button>) : (<button onClick={() => setShowpassword(true)}>Get startted<FaArrowRight></FaArrowRight></button>)
            }
              
            </div>
          </div>
        </div>
      </Container>
    </>
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
      color:white;
      padding-top: 100px;
      gap: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1{
        font-size: 50px;
        font-weight: 700;
      }
      h4{
        font-size: 30px;
      }
      p{
        font-size: 20px;
      }
      .form{
        display: flex;
        width: 100%;
        gap: 20px;
        justify-content: center;
        input{
          width: 450px;
          height: 50px;
          outline: none;
          font-size: 18px;
          padding: 0 20px;
          border-radius: 5px;
        }
        button{
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: var(--text-color);
          font-size: 18px;
          color: white;
          display: flex;
          align-items: center;
          gap: 5px;
          &:hover{
            opacity: 0.5;
          }
        }
      }
    }
  }
    
`;
export default SignUp