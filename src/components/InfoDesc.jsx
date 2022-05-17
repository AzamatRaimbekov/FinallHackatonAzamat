import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  overflow-x: auto;
  display: flex;
  color: white;
  margin-top: 75px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const Title = styled.div`
  min-width: 100vw;
  height: 100vh;
  text-align: center;
  /* margin-left: 75px; */
  ${mobile({ fontSize: "14px" })}
`;
const MainTitlle = styled.h1`
  font-weight: 600;
`;
const Desc = styled.p`
  font-size: 24px;
  ${mobile({ marginBottom: "14px" })}
`;

const logoCircle = keyframes`
0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(500deg);
  }
  100% {
    transform: rotate(1000deg);
  }
`;

const ImageLogo = styled.img`
  margin: 15px 0;
  animation: ${logoCircle} 19s linear infinite 0s;
  transition: 0.9s !important;
  /* &:hover {
    width: 45px !important;
    height: 45px !important;
    transform: rotate(180deg);
    animation: ${logoCircle} 2s linear infinite 0s;
  } */
`;
const Images = styled.img`
  margin: 15px 0;
  max-width: 380px;
  max-height: 380px;
`;
const InfoDesc = () => {
  return (
    <div>
      <Container>
        <Title>
          <MainTitlle>
            Что представляет лейбел <strong>White Star Mafia</strong>
          </MainTitlle>

          <ImageLogo
            src="https://www.freeiconspng.com/uploads/white-star-icon-10.png"
            width="350"
            alt="Transparent White Star Icon"
          />

          <Desc>Свайпай и узнавай о нас</Desc>
        </Title>
        <Title>
          <MainTitlle>
            Основатель лейбла <strong>White Star Mafia</strong>
          </MainTitlle>

          <Images
            src="https://static7.tgstat.ru/channels/_0/14/14153ec4803b1c73fe425fb6aa1d9769.jpg"
            alt=""
          />

          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            minus, qu
          </Desc>
        </Title>
        <Title>
          <MainTitlle>
            Какуб музыку приносим <strong>White Star Mafia</strong>
          </MainTitlle>
          <Images src=" https://i1.sndcdn.com/avatars-000285359513-c33k3p-t500x500.jpg" />
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            minus, quo doloribus perspiciatis placeat ullam quos ex doloremque
            reiciendis ad itaque qui mollitia neque nesciunt facilis quis
            dolorum iusto ipsum.
          </Desc>
        </Title>
      </Container>
    </div>
  );
};

export default InfoDesc;
