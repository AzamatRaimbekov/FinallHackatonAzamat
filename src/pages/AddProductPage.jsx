import { Container } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

import { adminContext } from "../contexts/AdminContext";

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

const AddProductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",

    memory: "",
    color: "",
    feedbacks: [],
    likes: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      memory: "",
      color: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <Title>Добавить нового Артиста</Title>
        <form onSubmit={handleSubmit}>
          <SearchInput
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            placeholder="ФИО"
          />
          <SearchInput
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            placeholder="Ник нейм"
          />
          <SearchInput
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            value={newProduct.price}
            placeholder="Введите стоимость имени"
          />
          <SearchInput
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            placeholder="Фотография артиста"
          />
          <SelectInput
            onChange={(e) =>
              setNewProduct({ ...newProduct, color: e.target.value })
            }
            value={newProduct.color}
            placeholder="Выберите жанр"
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
            value={newProduct.memory}
            onChange={(e) =>
              setNewProduct({ ...newProduct, memory: e.target.value })
            }
            placeholder="Выберите пол "
            labelId="memory-select-label"
          >
            <SelectOptions>Выберите пол</SelectOptions>
            <SelectOptions value="woman">Женский</SelectOptions>
            <SelectOptions value="man">Мужской</SelectOptions>
            <SelectOptions value="manwon">Другое</SelectOptions>
          </SelectInput>

          <ButtonClear type="submit">Добавить</ButtonClear>
        </form>
      </div>
    </Container>
  );
};

export default AddProductPage;
