import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@material-ui/core";

interface Todo {
  id: number;
  body: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState([] as Todo[]);
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
      {todos.map((todo) => (
        <Typography key={todo.id}>{todo.body}</Typography>
      ))}
    </Box>
  );
};

export default TodoList;
