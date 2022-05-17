import { Container, TableFooter } from "@mui/material";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClinentContext";
import styled from "styled-components";

const rows = [];

const Title = styled.h1`
  color: white;
  text-align: center;
`;
const Input = styled.input`
  border-radius: 15%;
  width: 60px;
  text-align: center;
  border: solid 1px white;
`;

const CartPage = () => {
  const data = React.useContext(clientContext);
  const { getProdFromCart, myCart, changeCountProductInCart } = data;

  console.log(myCart);

  useEffect(() => {
    getProdFromCart();
  }, []);

  if (!myCart) {
    return <h2>Loading!</h2>;
  }

  if (myCart.products.length === 0) {
    return <h2>Корзина пуста</h2>;
  }

  return (
    <div>
      <Container>
        <Title>Корзина</Title>
        <TableContainer component={Paper} className="table__row">
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow className="table__row">
                <TableCell align="center">Название</TableCell>
                <TableCell align="center">Фото</TableCell>
                <TableCell align="center">Цена</TableCell>
                <TableCell align="center">Количество</TableCell>
                <TableCell align="center">Сумма</TableCell>
                {/* <TableCell align="center">Сумма</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {myCart.products.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{item.product.name}</TableCell>
                  <TableCell align="center">
                    <img width={100} src={item.product.image} alt="" />
                  </TableCell>
                  <TableCell align="center">{item.product.price} $</TableCell>
                  <TableCell align="center">
                    <Input
                      min={1}
                      onChange={(e) =>
                        changeCountProductInCart(
                          item.product.id,
                          e.target.value
                        )
                      }
                      type="number"
                      value={item.count}
                    />
                  </TableCell>
                  <TableCell align="center">{item.subPrice} $</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell align="center">
                  <Title>{myCart.totalPrice} $</Title>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default CartPage;
