import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";
import { decrement, increment } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <Stack direction="row" spacing={3} className={"App"}>
      <Box>Count: {count}</Box>
      <Button variant="contained" onClick={() => dispatch(increment())}>+1</Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>-1</Button>
      <Link to="/menu">Menu</Link>
    </Stack>
  );
}

export default App;
