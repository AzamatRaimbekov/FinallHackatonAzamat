import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { clientContext } from "../contexts/ClinentContext";
import styled from "styled-components";

const Wrraper = styled.div`
  margin: 40px 0px;
  display: grid;
  color: #d2ad50;
  /* background-color: #d2ad50; */
`;

const Lili = styled.li`
  /* background-color: #d2ad50; */
  color: white;
`;

const Feedback = styled.div`
  border-radius: 8%;
  background-color: #d2ad50;
  color: white;
  font-size: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  margin-bottom: 50px;

  /* background: white !important; */
`;
const Comments = styled.div`
  background-color: white;
  color: #d2ad50;
  border-radius: 8%;
  margin: 25px 0px;
  width: 750px;
  width: 100%;
  margin: 0 auto;
  border: solid 1px #d2ad50;
`;

const InputButton = styled.input`
  width: 250px;
  height: 50px;
  background: #d2ad50;
  color: white;

  border: solid 4px #d2ad50;
  background-color: white;
  color: #d2ad50;
  font-size: 16px;
`;

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

const ProductDetailsPage = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails, addFeedback } = data;
  const [feedbackValue, setFeedbackValue] = useState("");
  const [feedbackUser, setFeedbackUser] = useState("");
  const params = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      title: feedbackValue.trim(),
      user: feedbackUser.trim(),
    };

    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните");
        return;
      }
    }
    addFeedback(newFeedback, productDetails);
    setFeedbackValue("");
    setFeedbackUser("");
  };
  console.log(productDetails);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);
  if (!productDetails) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <Container>
        <Wrraper>
          <img src={productDetails.image} alt="" />
          <div>
            <h2>{productDetails.name}</h2>
            <ul>
              <Lili>
                <strong>Стоимость Одного концерта: </strong>
                {productDetails.price} $
              </Lili>
              <Lili>
                <strong>ЖАНР:</strong>
                {productDetails.color}
              </Lili>
              <Lili>
                <strong>ПОЛ: </strong>
                {productDetails.memory}
              </Lili>
              <Lili>
                <strong>Кто это: </strong>
                {productDetails.description}
              </Lili>
            </ul>
          </div>
        </Wrraper>

        <ButtonDiv>
          <Link to={`/order`}>
            <ProductButton>Заплатить</ProductButton>
          </Link>
        </ButtonDiv>

        <Feedback className="product-detail-feedback">
          <h3>Отзывы</h3>
          <form onSubmit={handleSubmit}>
            <InputButton
              onChange={(e) => setFeedbackUser(e.target.value)}
              value={feedbackUser}
              type="text"
              placeholder="Введите ваше имя о господин"
            />

            <InputButton
              value={feedbackValue}
              onChange={(e) => setFeedbackValue(e.target.value)}
              type="text"
              placeholder="введите ваш отзыв"
            />
            <Button color="inherit" type="submit">
              Оставить отзыв
            </Button>
          </form>

          <Comments>
            {productDetails.feedBacks?.map((item, index) => (
              <div key={index} className="feedback">
                <h5>{item.user} пишет:</h5>
                <p>{item.title}</p>
              </div>
            ))}
          </Comments>
        </Feedback>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
