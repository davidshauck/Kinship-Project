import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import BananaKnifeFight from '../images/banana_knife_fight.png'
import CrystalCountdown from '../images/crystal_countdown.png'
import JavascriptJeopardy from '../images/javascript_jeopardy.png'
import NapkinHangman from '../images/napkin_hangman.png'
import Codehort from '../images/codehort.png'
import ClickyGame from '../images/clicky_game.png'
import GifHorse from '../images/gif_horse.png'
import TrainScheduler from '../images/train_scheduler.png'


function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://codehort.herokuapp.com/">
        <img
          className="d-block w-100 image"
          src={Codehort}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://bananaknifefight.herokuapp.com/">
          <img
            className="d-block w-100 image"
            src={BananaKnifeFight}
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://davidshauck.github.io/Crystal-Collector/">
        <img
          className="d-block w-100 image"
          src={CrystalCountdown}
          alt="Second slide"
        />
       </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://davidshauck.github.io/Trivia-Game/">
        <img
          className="d-block w-100 image"
          src={JavascriptJeopardy}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://davidshauck.github.io/Word-Guess-Game/">
        <img
          className="d-block w-100 image"
          src={NapkinHangman}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://davidshauck.github.io/clicky-game-2/">
        <img
          className="d-block w-100 image"
          src={ClickyGame}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://davidshauck.github.io/GifTastic/">
        <img
          className="d-block w-100 image"
          src={GifHorse}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://davidshauck.github.io/Train-Scheduler/">
        <img
          className="d-block w-100 image"
          src={TrainScheduler}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default Portfolio