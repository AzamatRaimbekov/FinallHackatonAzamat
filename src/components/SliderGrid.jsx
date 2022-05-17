import React from "react";
import Carousel from "react-grid-carousel";
import styled from "styled-components";
import { mobile } from "../responsive";
const Wrap = styled.div`
  /* min-width: 1000px; */
  overflow: hidden;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Images = styled.img`
  width: 300px;
  margin: 0;
  ${mobile({ width: "30%" })};
`;

const SliderGrid = () => {
  return (
    <Wrap>
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        loop
        scrollSnap={true}
        autoplay={500}
        mobileBreakpoint={767}
      >
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://yt3.ggpht.com/UyWuutH-ux8bX0ah6_PHHI-ZIVUGEDnDz74EbM42DGx2yltJPaasF2cE8DCZsAEJqRlQg5U5-w=s900-c-k-c0x00ffffff-no-rj"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://s3-eu-north-1.amazonaws.com/life-24/wp-content/2020/08/07163644/1596716913_mia-boyka-i-egor-ship-s-hitom-_pikachu_-e1596807424264.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://beatmaker.tv/Default/General/Image/188199?type=BeatImageOriginal&ver=1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://laikainfo.com/media/k2/items/cache/daf2bbcc481f0cf083f5d1524716cf65_XL.jpg?t=20200804_134812"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://yt3.ggpht.com/UyWuutH-ux8bX0ah6_PHHI-ZIVUGEDnDz74EbM42DGx2yltJPaasF2cE8DCZsAEJqRlQg5U5-w=s900-c-k-c0x00ffffff-no-rj"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://s3-eu-north-1.amazonaws.com/life-24/wp-content/2020/08/07163644/1596716913_mia-boyka-i-egor-ship-s-hitom-_pikachu_-e1596807424264.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://beatmaker.tv/Default/General/Image/188199?type=BeatImageOriginal&ver=1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://www.apelzin.ru/wp-content/uploads/2017/06/skriptonit-prazdnik-na-ulice-36.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://laikainfo.com/media/k2/items/cache/daf2bbcc481f0cf083f5d1524716cf65_XL.jpg?t=20200804_134812"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Images
            className="slider-grow"
            src="https://yt3.ggpht.com/UyWuutH-ux8bX0ah6_PHHI-ZIVUGEDnDz74EbM42DGx2yltJPaasF2cE8DCZsAEJqRlQg5U5-w=s900-c-k-c0x00ffffff-no-rj"
          />
        </Carousel.Item>
      </Carousel>
    </Wrap>
  );
};

export default SliderGrid;
