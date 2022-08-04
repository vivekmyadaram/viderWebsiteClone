import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import bannerImg from "./images/bannerImg.png";
import { styled } from "@mui/system";

const Banner = () => {
  const CustomTypography = styled(Typography)({
    color: "#182F53",
    lineHeight: "40px",
    fontFamily: "Roboto",
    fontWeight: "bold",
  });

  const CustomButton = styled(Button)({
    paddingLeft: 80,
    paddingRight: 80,
    height: 40,
    backgroundColor: "#E44652",
    color: "#FFFFFF",
    outline: "none",
    border: "none",
    fontFamily: "Roboto",
    fontWeight: "bold",
  });
  return (
    <Container style={{ marginBottom: 30, marginTop: 200 }}>
      <Box
        sx={{
          width: "100%",
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 1 }}
          columnSpacing={{ xs: 1, sm: 1, md: 20 }}
        >
          <Grid item xs={12} md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomTypography gutterBottom variant="h4">
                Smarter, Faster & Better Professional Services Launching soon.
              </CustomTypography>
              <CustomTypography
                gutterBottom
                variant="body"
                sx={{ color: "#121212", fontWeight: "normal" }}
              >
                VIDER is a technology-driven smart discovery and aggregator
                platform, that offers services addressing the growing needs of
                Professionals & Clients in enhancing businesses in India.
              </CustomTypography>
              <div>
                <Stack
                  spacing={2}
                  direction="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: 15,
                  }}
                >
                  <CustomButton textSizeMedium variant="outlined">
                    Started
                  </CustomButton>
                  <CustomButton
                    textSizeLarge
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "red",
                    }}
                    variant="contained"
                  >
                    ContactUs
                  </CustomButton>
                </Stack>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <img
              src={bannerImg}
              width="600px"
              height="450px"
              alt="BannerImage"
            />
          </Grid>
        </Grid>
      </Box>
      <div style={{ display: "flex", gap: 40, margin: 35 }}>
        <Card spacing={2} sx={{ width: 550 }}>
          <CardContent>
            <Typography
              style={{ color: "#182F53" }}
              variant="h5"
              color="blue"
              gutterBottom
            >
              Our Vision
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              style={{ color: "#121212" }}
              component="div"
            >
              Our Vision is to make every User Experience Smarter, Faster &
              Better
            </Typography>
          </CardContent>
        </Card>
        <Card spacing={2} sx={{ width: 550 }}>
          <CardContent>
            <Typography
              style={{ color: "#182F53" }}
              variant="h5"
              color="blue"
              gutterBottom
            >
              Our Mission
            </Typography>
            <Typography
              style={{ color: "#121212" }}
              sx={{ fontSize: 14 }}
              component="div"
            >
              Our Mission is to make Vider a one-stop solution for any
              Professional Need.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Banner;
