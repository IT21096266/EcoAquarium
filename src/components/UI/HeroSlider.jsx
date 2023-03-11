import React from "react";

import Slider from 'react-slick';
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import '../../Styles/hero-slider.css';

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className={`hero__slider rounded-md`}>
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className={`text-white slider__content`}>
            <h3 className="flex-1 font-bold ss:text-[72px] ss:leading-[75px]">
              The Next  <br className="sm:block hidden"/> {" "}
              <span className="text-gradient">
              Generation
              </span> {" "}<br/>
              Services 011
            </h3>

            <button className="btn reserve__btn mt-10 ml-3">
              <Link to="/createItem">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
      <Container>
          <div className={`text-white slider__content`}>
            <h3 className="flex-1 font-bold ss:text-[72px] ss:leading-[75px]">
              The Next  <br className="sm:block hidden"/> {" "}
              <span className="text-gradient">
              Generation
              </span> {" "}<br/>
              Services
            </h3>

            <button className="btn reserve__btn mt-4 ml-10">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
      <Container>
          <div className={`text-white slider__content`}>
            <h3 className="flex-1 font-bold ss:text-[72px] ss:leading-[75px]">
              The Next  <br className="sm:block hidden"/> {" "}
              <span className="text-gradient">
              Generation
              </span> {" "}<br/>
              Services
            </h3>

            <button className="btn reserve__btn mt-4 ml-10">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-04 mt0">
      <Container>
          <div className={`text-white slider__content`}>
            <h3 className="flex-1 font-bold ss:text-[72px] ss:leading-[75px]">
              The Next  <br className="sm:block hidden"/> {" "}
              <span className="text-gradient">
              Generation
              </span> {" "}<br/>
              Services
            </h3>

            <button className="btn reserve__btn mt-4 ml-10">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
