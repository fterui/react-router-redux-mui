import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NoRoute() {
    return (
        <Stack direction="row" spacing={3}>
            <Box>Not Found</Box>
            <Link to="/">Back to Home</Link>
        </Stack>
    );
}