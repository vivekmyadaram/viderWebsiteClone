import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Cards from "../Vider/Cards";

const OurProducts = () => {
  const productsArray = [
    {
      id: 1,
      productName: "ATOM by Vider",
      productDesc:
        "Intelligently designed and customizable practice management solution which provides the best user experience with dedicated features, integrations & trackers.",
    },
    {
      id: 2,
      productName: "PRISM by Vider",
      productDesc:
        "A Platform that provides a wide range of services to clients by connecting them to a network of professionals building trust and transparency",
    },
    {
      id: 3,
      productName: "SPECTRUM by Vider",
      productDesc:
        "An integrative & interactive knowledge management system that provides a collection of various laws & judgements from the most credible sources, creating an intelligent medium for learning & research.",
    },
    {
      id: 4,
      productName: "ALPHA by Vider",
      productDesc:
        "A complete compliance governing system that analyzes & assists regarding the applicable laws & their compliances to different entities from their formation to their dissolution.",
    },
  ];
  return (
    <Container id="products">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
        spacing={2}
        mt="80px"
        mb="80px"
      >
        <Grid item sx={12} md={12}>
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            color="#182F53"
          >
            Our Products
          </Typography>
        </Grid>
        {productsArray.map((ele) => (
          <Grid item sx={12} md={6}>
            <Cards key={ele.id} products={ele} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurProducts;
