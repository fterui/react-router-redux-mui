import React from "react";
import { Link, Stack, Box } from "@mui/material";

export default function NoRoute() {
    return (
        <Stack direction="row" spacing={3}>
            <Box>Not Found</Box>
            <Link href="/">Back to Home</Link>
        </Stack>
    );
}