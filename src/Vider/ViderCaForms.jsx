import { Grid, Typography, Card, CardContent } from "@mui/material";
import React from "react";
// import image from "../images/v.png";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
const ViderCaFirms = () => {
  const image = require("../images/businessImg.jpg");
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        mt="80px"
        mb="80px"
        rowGap="0px"
        spacing="0px"
      >
        <Grid item sx={12} md={6} height="400px">
          <img
            src={image}
            alt="viderCAFirms"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </Grid>
        <Grid item sx={12} md={6} height="400px">
          <Card
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              // textAlign: "center",
              alignItems: "center",
              height: "400px",
              color: "#FFFFFF",
              backgroundColor: "#182F53",
            }}
          >
            <CardContent>
              <StarRateIcon />
              <Typography variant="h4" gutterBottom>
                Vider for CA Firms
              </Typography>
              <Typography paragraph gutterBottom>
                Vider is a technology-driven smart discovery and aggregator
                platform, offering services that cover the current needs of
                individuals, startups and established businesses in India.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ViderCaFirms;
