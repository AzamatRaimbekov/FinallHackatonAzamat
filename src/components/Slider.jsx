import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 75px;
  ${mobile({})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: ${(props) => props.fontcolor};
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: ${(props) => props.fontcolor};
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.fontcolor};
  border: white;
  box-shadow: 4px 11px 37px 0px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 4px 11px 37px 0px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 4px 11px 37px 0px rgba(0, 0, 0, 0.59);
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transition: all 2s ease-in-out;
  }
`;

const ToggleWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 10px;
  z-index: 9;
`;

const Toggle = styled.div`
  display: flex;
`;

const Indecator = styled.div`
  width: 10px;
  height: 10px;
  background: white;
  border: solid 1px black;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
`;
const ActiveIndecator = styled(Indecator)`
  background: #d2ad50;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <ToggleWrapper>
        <Toggle>
          {sliderItems.map((item, index) =>
            index === slideIndex ? (
              <ActiveIndecator />
            ) : (
              <Indecator onClick={() => setSlideIndex(index)} />
            )
          )}
        </Toggle>
      </ToggleWrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title fontcolor={item.fontcolor}>{item.title}</Title>
              <Desc fontcolor={item.fontcolor}>{item.desc}</Desc>
              <Button fontcolor={item.fontcolor}>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
