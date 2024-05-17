import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {IoIosLogOut} from 'react-icons/io'
import { onAuthStateChanged, signOut } from 'firebase/auth'

import Logo from '../assets/logo.png'
import { firebaseAuth } from '../utils/firebase-config'

const TopNav = ({isScrolled}) => {
    const navigate = useNavigate();
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'TV Shows', link: '/tv' },
        { name: 'Movies', link: '/movies' },
        { name: 'My Lists', link: '/mylist' },
    ]
    onAuthStateChanged(firebaseAuth,(currentUser) => {
        if(!currentUser) navigate('/login')
    })
    return (
        <Container className={isScrolled ?'scrolled': ''}>
            <div className="left">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="nav">
                    {navLinks.map(nav =><Link to={nav.link} key={nav.name}>{nav.name}</Link>)}
                </div>
            </div>
            <div className="right">
                <IoIosLogOut onClick={() => signOut(firebaseAuth)}></IoIosLogOut>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    height: 70px;
    padding: 5px 20px;
    position: fixed;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    &.scrolled{
        background-color: black;
        transition: 0.5s;
    }
    .left{
        height: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        .logo{
            height: 100%;
            img{
                height: 100%;
            }
        }
        .nav{
            display: flex;
            justify-content: flex-start;
            gap: 20px;
            font-size: 18px;
            a{
                &:hover{
                    opacity: 0.5;
                    transition: 1s;
                }
            }
        }
    }
    .right{
        padding-right: 20px;
        font-size: 25px;
        svg{
            &:hover{
                opacity: 0.5;
            }
        }
    }
    
`
export default TopNav