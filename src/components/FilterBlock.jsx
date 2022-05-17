import { Backspace, Cancel } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { yellow } from "@mui/material/colors";

const color = yellow[400];

const Contain = styled.div`
  display: flex;

  align-items: center;

  margin-top: 30px;
  margin-left: 0;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  width: 450px;
  height: 70px;

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
  width: 150px;
  height: 70px;

  border: solid 4px #d2ad50;
  background-color: #d2ad50;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #d2ad50;
    transition: 1s;
  }
`;

const FilterBlock = ({ getProducts }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);

  //! Состояния
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");
  const [memoryValue, setMemoryValue] = useState(filter.get("memory") || "");
  const [ramValue, setRamValue] = useState(filter.get("ram") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setMemoryValue(filter.get("memory") || "");
    setRamValue(filter.get("ram") || "");
    getProducts();
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setMemoryValue("");
    setRamValue("");
    navigate("/burger");
    getProducts();
  };

  return (
    <div>
      <Contain>
        <SearchInput
          value={searchValue}
          onChange={(e) => handleFilters("q", e.target.value)}
          type="search"
          placeholder="     Живой поиск"
        />

        <SelectInput
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Выберите цвет"
          labelId="color-label"
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
          value={memoryValue}
          onChange={(e) => handleFilters("memory", e.target.value)}
        >
          <SelectOptions>Выберите пол</SelectOptions>
          <SelectOptions value="woman">Женский</SelectOptions>
          <SelectOptions value="man">Мужской</SelectOptions>
          <SelectOptions value="manwon">Другое</SelectOptions>
        </SelectInput>
        <ButtonClear onClick={resetFilter}>
          <Cancel />
        </ButtonClear>
      </Contain>
    </div>
  );
};

export default FilterBlock;
