import { Info } from "@mui/icons-material";
import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FilterBlock from "../components/FilterBlock";
import InfoAboutUs from "../components/InfoAboutUs";
import InfoDesc from "../components/InfoDesc";

import ProductCard from "../components/ProductCard";
import Slide from "../components/Slide";
import Slider from "../components/Slider";
import SliderGrid from "../components/SliderGrid";
import { clientContext } from "../contexts/ClinentContext";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ToDoCrud from "../components/ToDoCrud";

const ButtonDiv = styled.div`
  /* width: 100vw;
  height: 100vh; */
  margin-top: 74px;
  margin-bottom: 74px;
  display: grid;
  align-items: center;
  text-align: center;
`;
const Title = styled.h1`
  color: white;
  /* font-weight: 700; */
  /* text-align: center; */
`;
const ProductButton = styled.button`
  margin: 25px auto;
  color: white;
  background-color: #d2ad50;
  border-radius: 5%;
  border: solid 1px white;
  height: 50px;
  width: 200px;
  flex-wrap: 36px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #d2ad50;
    border: solid 1px #d2ad50;
  }
`;

const MainPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* <InfoAboutUs /> */}
      <Slider />
      <InfoDesc />
      <Slide />
      <SliderGrid />
      <Container>
        {/* <div>
          <FilterBlock getProducts={getProducts} />
        </div> */}
        {/* <InfiniteScroll
          dataLength={products.length}
          next={handlePagination}
          hasMore={true}
          loader={<h3>Loading..</h3>}
        >
          <div className="products-list">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </InfiniteScroll> */}
      </Container>
      <ButtonDiv>
        <Title>Приобрети артистов White Star прямо сейчас</Title>
        <Link to={`/products`}>
          <ProductButton>ЗАКАЗАТЬ!</ProductButton>
        </Link>
      </ButtonDiv>
      <ToDoCrud />

      <Footer />
    </div>
  );
};

export default MainPage;
