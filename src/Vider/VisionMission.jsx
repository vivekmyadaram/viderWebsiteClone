import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";
import Cards from "../Vider/Cards";

const VisionMission = () => {
  return (
    <section id="visionMission">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="80px"
          mb="80px"
          spacing={2}
        >
          <Grid item sx={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                width: "100%",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="#182F53" gutterBottom>
                Our Vision
              </Typography>
              <Typography paragraph color="#121212">
                Our Vision is to make every User Experience Smarter, Faster &
                Better
              </Typography>
            </Paper>
          </Grid>
          <Grid item sx={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                width: "100%",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="#182F53" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph color="#121212">
                Our Mission is to make Vider a one-stop solution for any
                Professional Need.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default VisionMission;
