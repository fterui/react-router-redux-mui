import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Menu() {
    const count = useSelector((state) => state.counter.value);
    return (
        <Box>Count: {count} <Button variant="contained" component={Link} to="/">Home</Button></Box>
    );
}