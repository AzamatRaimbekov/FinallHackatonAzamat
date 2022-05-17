import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { adminContext } from "../contexts/AdminContext";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
const Contain = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;

  /* margin-top: 30px;
  margin-left: 0;
  margin-bottom: 30px; */
`;

const Title = styled.h1`
  color: #d2ad50;
  font-weight: 700;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 450px;
  height: 70px;
  background: #d2ad50;
  color: white;

  border: solid 4px #d2ad50;
  background-color: white;
  color: #d2ad50;
  font-weight: 600;
  font-size: 24px;
`;
const SelectInput = styled.select`
  width: 450px;
  height: 70px;

  border: solid 4px #d2ad50;
  background-color: white;
  color: #d2ad50;
  font-weight: 600;
  font-size: 24px;
`;
const SelectOptions = styled.option`
  color: #d2ad50;
  font-weight: 600;
  font-size: 24px;
`;

const ButtonClear = styled.button`
  width: 450px;
  height: 70px;
  border: solid 4px #d2ad50;
  background-color: #d2ad50;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #d2ad50;
    transition: 1s;
  }
`;
const EditProductPage = () => {
  const data = React.useContext(adminContext);
  const { getProductsToEdit, productToEdit, saveEditedPruduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }
    saveEditedPruduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Contain>
        <Title>Редактировать товар</Title>
        <form onSubmit={handleSubmit}>
          <SearchInput
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })({
                ...editedProduct,
                name: e.target.value,
              })
            }
            value={editedProduct.name}
            placeholder="Введите название"
          />
          <SearchInput
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })({
                ...editedProduct,
                description: e.target.value,
              })
            }
            value={editedProduct.description}
            placeholder="Введите описание"
          />
          <SearchInput
            type="number"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })({
                ...editedProduct,
                price: parseInt(e.target.value),
              })
            }
            value={editedProduct.price}
            placeholder="Введите цену"
          />
          <SearchInput
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            placeholder="Введите фото"
          />
          <SelectInput
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, color: e.target.value })({
                ...editedProduct,
                color: e.target.value,
              })
            }
            value={editedProduct.color}
            placeholder="выберите жанр"
          >
            <SelectOptions>Выберите жанр</SelectOptions>
            <SelectOptions value="rock">Rock</SelectOptions>
            <SelectOptions value="hipHip">HIP-HOP</SelectOptions>
            <SelectOptions value="classic">CLASSIC</SelectOptions>
            <SelectOptions value="pop">POP</SelectOptions>
            <SelectOptions value="jazz">JAZZ</SelectOptions>
            <SelectOptions value="arnb">ARNB</SelectOptions>
          </SelectInput>
          <SelectInput
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, memory: e.target.value })({
                ...editedProduct,
                memory: e.target.value,
              })
            }
            value={editedProduct.memory}
            placeholder="Выберите пол"
          >
            <SelectOptions>Выберите пол</SelectOptions>
            <SelectOptions value="woman">Женский</SelectOptions>
            <SelectOptions value="man">Мужской</SelectOptions>
            <SelectOptions value="manwon">Другое</SelectOptions>
          </SelectInput>

          <ButtonClear type="submit">Добавить</ButtonClear>
        </form>
      </Contain>
    </Container>
  );
};

export default EditProductPage;
