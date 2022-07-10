import { Box, Button, Link, Stack } from "@mui/material";
import React from "react";
import "./App.css";

function App() {
  return (
    <Stack direction="row" spacing={3} className={"App"}>
      <Box>Hello World!</Box>
      <Button variant="contained">Click</Button>
      <Link href="/menu">Menu</Link>
    </Stack>
  );
}

export default App;
