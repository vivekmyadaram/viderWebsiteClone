import { Container, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import viderLogo from "../images/viderLogo.png";

const NBar = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
        spacing={2}
        mb="80px"
        className="navbar"
      >
        <Grid item sx={12} md={4}>
          <a href="banner" className="nav-logo">
            <img
              src={viderLogo}
              alt="viderLogo"
              //   className="nav-icon"
              width="150px"
              height="60px"
            />
          </a>
        </Grid>
        <Grid item sx={12} md={8}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              listStyleType: "none",
              fontFamily: "Roboto",
              fontSize: "20px",
              color: "#1B1D21",
              "&:hover": { color: "red" },
              gap: "8px",
            }}
          >
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#banner"
              >
                Home
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#visionMission"
              >
                Products
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#smartPlugs"
              >
                SmartPlugs
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#benefits"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#ourKeyDiff"
              >
                Features
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "#121212" }}
                href="#footer"
              >
                Contact us
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};
export default NBar;
