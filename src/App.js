import {
  TextField,
  Button,
  Typography,
  Checkbox,
  List,
  ListItem,
} from "@mui/material";
import Dialog from "./Dialog";
import { useEffect, useState } from "react";
import "./App.css";
import styled from "@emotion/styled";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  // useEffect(() => {
  //   setResult([...todo]);
  // }, [todo]);

  const onChange = (e) => {
    setInputVal(e.target.value);
    // console.log(e.target);
  };

  const handleClick = () => {
    if (isEdited) {
      setTodo([...todo, { val: inputVal, isDone: false, id: editedId }]);
    }
    setInputVal("");
    setIsEdited(false);
  };

  const onDelete = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  const handleDone = (id) => {
    const updated = todo.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodo(updated);
  };

  const handleEdit = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    const editVal = todo.find((todo) => todo.id === id);
    setEditedId(editVal.id);
    setInputVal(editVal.val);
    setTodo(newTodo);
    setIsEdited(true);
  };

  const save = (value) => {
    // setTodo([...todo, { val: value, isDone: false, id: Math.random()*100 }]);
    setTodo([...todo, { val: value, isDone: false, id: new Date().getTime() }]);
  };

  const onSearch = (e) => {
    setSearchKey(e.target.value);
    console.log(searchKey);
  };

  const getData = () => {
    if (searchKey) {
      const searchedData = todo.filter((t) =>
        t.val.toLowerCase().includes(searchKey.toLowerCase())
      );
      return searchedData;
      // setResult(searchedData);
    }
    // setResult([...todo]);
    return todo;
  };

  const StyledListItem = styled(ListItem)({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid lightgray",
    alignItems: "center",
  });

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        background: "#FFFFFF",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search Task Here!"
        variant="outlined"
        onChange={onSearch}
        value={searchKey}
        sx={{ position: "absolute", top: "10px", left: "10px" }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <TextField
          variant="outlined"
          onChange={onChange}
          label="edit here!"
          value={inputVal}
          style={{
            width: "40%",
            visibility: isEdited ? "visible" : "hidden",
          }}
        />

        <Button
          size="small"
          variant={isEdited ? "outlined" : "contained"}
          color="primary"
          onClick={handleClick}
          style={{
            padding: "15px 10px",
            width: "10%",
            // margin: "8px",
            visibility: isEdited ? "visible" : "hidden",
          }}
          disabled={inputVal ? false : true}
        >
          {isEdited && "Done"}
        </Button>
      </div>

      <List>
        {getData().map((todo) => {
          return (
            <>
              <StyledListItem divider="bool">
                <Checkbox
                  onClick={() => handleDone(todo.id)}
                  checked={todo.isDone}
                  style={{ width: "10px" }}
                />
                <Typography
                  style={{
                    color: todo.isDone ? "green" : "black",
                    // maxWidth: "100px",
                    width: "80%",
                    textDecorationLine: todo.isDone && "line-through",
                  }}
                  key={todo.id}
                >
                  {todo.val}
                </Typography>
                <Button onClick={() => handleEdit(todo.id)} variant="contained">
                  Edit
                </Button>

                <Button
                  onClick={() => onDelete(todo.id)}
                  color="secondary"
                  variant="contained"
                >
                  delete
                </Button>
              </StyledListItem>
            </>
          );
        })}
      </List>
      <Dialog saveDataParent={save} />
    </div>
  );
}

export default App;
