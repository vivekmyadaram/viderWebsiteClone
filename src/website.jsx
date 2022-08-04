import { Box, useTheme } from "@mui/material";
import React from "react";

function Website() {
  const theme = useTheme();
  return (
    <>
      <div>Website</div>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <img />
        <div>
          <ul style={{ display: "flex", gap: 10, listStyle: "none" }}>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Box
          sx={({ theme }) => ({
            background: theme.palette.primary.color,
          })}
        ></Box>
      </Box>
    </>
  );
}

export default Website;
