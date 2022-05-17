import { Container } from "@mui/material";
import React, { useEffect } from "react";
import AdminTable from "../components/AdminTable";
import { adminContext } from "../contexts/AdminContext";

import styled from "styled-components";

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <Title>All products</Title>
        <AdminTable products={products} />
      </div>
    </Container>
  );
};

export default AdminPage;
