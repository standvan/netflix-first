import React, { useState } from 'react'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { URL_IMAGE } from '../utils/constant';

export default React.memo (function Card({ dataMovie, index , isLiked=false}){
    const navigate = useNavigate();
    const [onHovered, setOnHovered] = useState(false);
    const video = 'https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4';
    return (
        <CardContainer
            onMouseLeave={() => setOnHovered(false)}
            onMouseEnter={() => setOnHovered(true)}
        >
            <img src={`${URL_IMAGE}/w500${dataMovie.image}`}
                alt=""
                onClick={() => navigate('/player')}
            />
            <div className={`info ${onHovered ? 'hover' : ''}`}>
                <div className="img-video">
                    <img src={`${URL_IMAGE}/w500${dataMovie.image}`} alt="" />
                    <video src={video} autoPlay={true} loop muted></video>
                </div>
                <div className="info-container">
                    <div className="movie-name">
                        {dataMovie.name}
                    </div>
                    <div className="icons">
                        <IoPlayCircleSharp title='Play'></IoPlayCircleSharp>
                        <RiThumbUpFill title='Like'></RiThumbUpFill>
                        <RiThumbDownFill title='Dislike'></RiThumbDownFill>
                        <AiOutlinePlus title='Add to my list'></AiOutlinePlus>
                        <BsCheck title='Remove from list'></BsCheck>
                    </div>
                    <div className="genres">
                        {
                            dataMovie.genres.map((genre,index) => <div className="genre" key={index}>{genre}</div>)
                        }    
                    </div>
                </div>
            </div>
        </CardContainer>
    )
});
const CardContainer = styled.div`
    position: relative;
    img{
        width: 250px;    
        cursor: pointer;
    }
    .info{
        z-index: 99;
        display: none;
        position: absolute;
        top: -15rem;
        left: 0;
        width: 20rem;
        border-radius: 0.3rem;
        box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
        background-color: #181818;
        transition: 0.3s ease-in-out;
        overflow: hidden;
        padding-bottom: 10px;
        &.hover{
            display: block;
        }
        .img-video{
            position: relative;
            img,video{
                width: 100%;
                position: absolute;
                top: 0;
            }
            img{
                z-index: 4;
            }
            video{
                z-index: 5;
            }
        }
        .info-container{
            margin-top: 185px;
            display: flex;
            gap: 10px;
            flex-direction: column;
            padding: 0 10px;
            .movie-name{
                font-size: 20px;
            }
            .icons{
                display: flex;
                gap: 15px;
                svg{
                    font-size: 20px;
                    &:hover{
                        opacity: .5;
                    }
                }
            }
            .genres{
                display: flex;
                gap: 5px;
                flex-wrap: wrap;
                .genre{
                    border: 1px solid white;
                    border-radius: 2px;
                    padding: 5px 15px;
                    cursor: pointer;
                    &:hover{
                        opacity: 0.5;
                    }
                }
            }
        }
    }
`;