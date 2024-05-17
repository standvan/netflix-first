import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Card from './Card';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default React.memo(function MovieSlider({ data, title }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControl, setShowControl] = useState(false);
  const listRef = useRef();
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === 'left' && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === 'right' && sliderPosition < 7) {
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  }
  console.log(sliderPosition);
  return (
    <Container
      onMouseEnter={() => setShowControl(true)}
      onMouseLeave={() => setShowControl(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div className={`direction left ${showControl ? '' : 'none'}`}>
          <AiOutlineLeft onClick={() => handleDirection('left')}></AiOutlineLeft>
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => <Card dataMovie={movie} index={index} key={movie.id}></Card>)}
        </div>
        <div className={`direction right ${showControl ? '' : 'none'}`}>
          <AiOutlineRight onClick={() => handleDirection('right')}></AiOutlineRight>
        </div>
      </div>

    </Container>
  )
});
const Container = styled.div`
  padding: 20px;
  h1{
    font-size: 35px;
    margin-bottom: 20px;
  }
  .wrapper{
    position: relative;
    .slider{
      display: flex;
      gap: 20px;
      transition: 1s ease-in-out;
    }
    .direction{
      position: absolute;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.575);
      top: 0;
      display: flex;
      align-items: center;
      z-index: 100;
      svg{
        font-size: 40px;
        color: white;
      }
      &.left{
        left: 0;
      }
      &.right{
        right: 0;
      }
      &:hover{
        opacity: 0.5;
      }
      &.none{
        display: none;
      }
    }
  }
  
`;