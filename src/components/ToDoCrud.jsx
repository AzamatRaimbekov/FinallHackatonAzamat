import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
const Input = styled.input`
  width: 300px;
  height: 50px;
`;
const ButtonOn = styled.button`
  width: 300px;
  height: 50px;
`;
const Title = styled.h1`
  text-align: center;
`;

const ToDoCrud = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const handleTodChange = (e) => {
    setTodo(e.target.value);
  };

  // read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  // write
  const writeDateBase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo: todo,
      uuid: uuid,
    });
    setTodo("");
  };

  // update
  const handleUpdate = (todo) => {
    setEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
  };
  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
    });
    setTodo("");
    setTempUuid(false);
  };
  // delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  return (
    <Container>
      <Title>Оставь коментарий</Title>
      <Input type="text" value={todo} onChange={handleTodChange} />
      {isEdit ? (
        <>
          <ButtonOn onClick={handleSubmitChange}>Изменить</ButtonOn>
          <ButtonOn
            onClick={() => {
              setEdit(false);
              setTodo("");
            }}
          >
            X{" "}
          </ButtonOn>
        </>
      ) : (
        <ButtonOn onClick={writeDateBase}>Добавить</ButtonOn>
      )}
      {todos.map((todo) => (
        <>
          <h1>{todo.todo}</h1>
          <ButtonOn onClick={() => handleUpdate(todo)}>Изменит</ButtonOn>
          <ButtonOn onClick={() => handleDelete(todo)}>Удалить</ButtonOn>
        </>
      ))}
    </Container>
  );
};

export default ToDoCrud;
