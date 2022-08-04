import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import aws from "../images/aws.png";
import eMudra from "../images/E-MUDHRA.png";
import f2s from "../images/F2S.png";
import itImg from "../images/IT.png";
import gstImg from "../images/GST.jpg";
import msImg from "../images/microsoft.png";
import freshDeskImg from "../images/microsoft.png";
import watiImg from "../images/WATI.png";
import razImg from "../images/Razor_Pay.png";
import mcaImg from "../images/MCA.png";
import FD from "../images/FD.png";

import React from "react";

const images = [
  eMudra,
  FD,
  f2s,
  itImg,
  gstImg,
  aws,
  freshDeskImg,
  mcaImg,
  watiImg,
  razImg,
];

const SmartPlugsImage = ({ image }) => {
  return (
    <div
      id="smartPlugs"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <img
        src={image}
        alt="mudra"
        style={{
          background: "none",
          width: "120px",
          height: "80px",
          objectFit: "contained",
        }}
      />
    </div>
  );
};

const SmartPlugs = () => {
  return (
    <Container id="smart">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt="80px"
        mb="80px"
      >
        <Grid item xs={12} md={12}>
          <Typography
            gutterBottom
            variant="h4"
            textAlign="center"
            color="#182F53"
          >
            Smart Plugs
          </Typography>
        </Grid>
        {images.map((img) => (
          <Grid item xs={12} md={3}>
            <SmartPlugsImage image={img} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SmartPlugs;
