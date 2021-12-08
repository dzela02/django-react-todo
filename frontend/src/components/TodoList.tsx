import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import { Todo } from "./types";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  closeIcon: { color: "red" },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  marginTop: {
    marginTop: "5px",
  },
}));

const TodoList = () => {
  const [todos, setTodos] = useState([] as Todo[]);
  const [input, setInput] = useState("");
  const classes = useStyles();

  const removeTodo = async (id: number) => {
    await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/delete`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const createTodo = async (e?: any) => {
    const response = (await axios.post(
      `http://127.0.0.1:8000/api/todos/create/`,
      { body: JSON.stringify(input) }
    )) as { data: Todo };

    setTodos([...todos, response.data]);
    setInput("");
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      const response = (await axios.get(
        "http://127.0.0.1:8000/api/todos/"
      )) as { data: Todo[] };
      setTodos(response.data);
    })();
  }, []);

  return (
    <Box>
      {!todos.length && <Typography>No todos yet create one!</Typography>}
      {todos.map((todo) => (
        <Grid container alignItems="center" key={todo.id}>
          <Button onClick={() => removeTodo(todo.id)}>
            <CloseIcon className={classes.closeIcon} />
          </Button>
          <Typography>{todo.body}</Typography>
        </Grid>
      ))}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={createTodo}
      >
        <Grid container direction="column">
          <TextField
            id="standard-basic"
            label="Create New TODO"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className={classes.marginTop}
            color="primary"
            variant="outlined"
            disabled={input === ""}
            type="submit"
          >
            Create TODO
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default TodoList;
