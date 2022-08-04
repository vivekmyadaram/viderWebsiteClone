import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import bannerImg from "../images/bannerImg.png";

const Banner = () => {
  const CustomTypography = styled(Typography)({
    color: "#182F53",
    lineHeight: "36px",
  });

  const CustomButton = styled(Button)({
    padding: "10px 80px",
    outline: "none",
    border: "none",
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    fontSize: "18px",
    fontWeight: "bold",
  });

  return (
    <section id="banner">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="80px"
          mb="150px"
          // columns={{ xs: 2, sm: 3, md: 2 }}
        >
          <Grid item sm={12} md={6}>
            <div>
              <CustomTypography variant="h4" gutterBottom>
                Smarter, Faster & Better Professional Services Launching soon.
              </CustomTypography>
              <CustomTypography
                gutterBottom
                variant="body1"
                style={{
                  color: "#121212",
                  lineHeight: "30px",
                  marginBottom: "30px",
                }}
              >
                Vider is a technology-driven smart discovery and aggregator
                platform, that offers services addressing the growing needs of
                Professionals & Clients in enhancing businesses in India.
              </CustomTypography>
              <Stack
                spacing={2}
                direction="row"
                style={{
                  display: "flex",
                  alignItems: "space-evenly",
                  justifyContent: "flex-start",
                }}
              >
                <CustomButton
                  textSizeMedium
                  style={{
                    backgroundColor: "#E44652",
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                  }}
                  variant="outlined"
                >
                  Started
                </CustomButton>
                <CustomButton
                  textSizeMedium
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#E44652",
                    border: "1px solid #E44652",
                  }}
                  variant="contained"
                  color="error"
                >
                  Contact us
                </CustomButton>
              </Stack>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <div>
              <img src={bannerImg} alt="webLogo" width="100%" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
