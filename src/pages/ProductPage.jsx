import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import FilterBlock from "../components/FilterBlock";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClinentContext";

const Title = styled.h1`
  color: #d2ad50;
  font-weight: 700;
  text-align: center;
  margin: 50px 0px;
`;

const ProductPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Title>Выбери своего артиста мечты</Title>
        <div>
          <FilterBlock getProducts={getProducts} />
        </div>
        <InfiniteScroll
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
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default ProductPage;
