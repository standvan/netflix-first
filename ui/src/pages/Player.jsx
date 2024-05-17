import React from 'react'
import styled from 'styled-components'
import {IoMdArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Player = () => {
    const navigate = useNavigate();
    return (
        <PlayerContainer>
            <div className="backArrow" onClick={() => navigate('/')}>
                <IoMdArrowBack></IoMdArrowBack>
            </div>
            <video src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4
" controls autoPlay muted loop></video>
        </PlayerContainer>
    )
}
const PlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    .backArrow{
        position: fixed;
        top: 10px;
        left: 10px;
        font-size: 20px;
        border: 2px solid white;
        padding: 5px 20px;
        &:hover{
            opacity: 0.5;
        }
    }
    video{
       width: 80%;
    }
`;
export default Player