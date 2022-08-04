import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import viderPhone from "../images/viderPhone.png";
const StandOutUnique = () => {
  return (
    <Container id="stand">
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
        <Grid item sm={12} md={6}>
          <Typography variant="h4" color="#182F53" gutterBottom>
            Stand out unique in the market with Vider Client Application
          </Typography>
          <ul
            style={{ color: "#121212A1", lineHeight: "50px", fontSize: "18px" }}
          >
            <li>
              Accessible from any where and any time and get updates on
              Real-time basis.
            </li>
            <li>On-Demand Professional Service with Live Tracking Facility.</li>
            <li>
              Improve Customer & Professional Relationship through transparency.
            </li>
            <li>
              Providing Instant Solutions and increases efficiency in the work
              management.
            </li>
            <li>Hassle Free Monetary Transactions.</li>
            <li>Reduced Friction and Increases Productivity.</li>
          </ul>
        </Grid>
        <Grid item sm={12} md={6}>
          <img
            src={viderPhone}
            alt="viderPhone"
            style={{ maxWidth:"100%"}}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StandOutUnique;
