import { Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";

const Cards = ({ products }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" color="#182F53" gutterBottom>
        {products.productName}
      </Typography>
      <Typography paragraph color="#121212">
        {products.productDesc}
      </Typography>
    </Paper>
  );
};

export default Cards;
