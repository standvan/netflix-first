import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa'
import { PiWarningCircle } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux';

import TopNav from '../components/TopNav'
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import SliderContainer from '../components/SliderContainer';


const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = useSelector(state => state.netflix.genres);
  const generesLoaded = useSelector(state => state.netflix.generesLoaded);
  const movies = useSelector(state => state.netflix.movies);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  }
  useEffect(() => {
    dispatch(getGenres());
  },[])
  useEffect(() => {
    if(generesLoaded){
      dispatch(fetchMovies({type: 'movie'}))
    }
  },[generesLoaded])
  return (
    <Container>
      <TopNav isScrolled={isScrolled}></TopNav>
      <img className='image-main' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg" alt="" />
      <div className="container">
        <h1>Marvel's Daredevil</h1>
        <p>Lawyer-by-day Matt Murdock uses his heightened senses from being blinded as a young boy to fight crime at night on the streets of Hell’s Kitchen as Daredevil.</p>
        <div className="actions">
          <button onClick={() => navigate('/player')}><FaPlay></FaPlay>Play</button>
          <button><PiWarningCircle></PiWarningCircle>More info</button>
        </div>
      </div>
      <SliderContainer movies={movies}></SliderContainer>
    </Container>
  )
}
const Container = styled.div`
  background-color: black;
  overflow: hidden;
  .image-main{
    width: 100%;
    position: relative;
    filter: brightness(70%);
  }
  .container{
    color: white;
    position: absolute;
    top: 120px;
    left: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 600px;
    h1{
      font-size: 70px;
      text-transform: uppercase;
      background: -webkit-linear-gradient(#eee, rgb(230, 27, 27));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p{
      font-size: 20px;
    }
    .actions{
      display: flex;
      gap: 20px;
      button{
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        svg{
          font-size: 25px;
        }
        &:hover{
          opacity: 0.5;
        }
        &:nth-child(2){
          background-color: #ffffff50;
        }
      }
    }
  }
`
export default Netflix