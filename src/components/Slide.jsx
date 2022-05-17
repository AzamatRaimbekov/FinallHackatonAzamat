import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { styled } from "styled-components";

function Slide() {
  return (
    <>
      <Carousel>
        <div className="slide">
          <img src="https://i.ytimg.com/vi/5lJH_GF8i8o/maxresdefault.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/rbj73PxCPgk/maxresdefault.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/m1HYtbzgsyc/maxresdefault.jpg" />
        </div>
      </Carousel>
    </>
  );
}

export default Slide;
