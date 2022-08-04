import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Container>
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
        <Grid item sm={12} md={12}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ textAlign: "center", color: "#182F53" }}
          >
            We provide a wide range of services
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography paragraph sx={{ textAlign: "center", color: "#121212" }}>
            A platform that provides a wide range of services to clients by
            connecting them to a network of professionals building trust and
            transparency. .
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
