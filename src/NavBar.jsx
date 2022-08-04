import React from "react";
import { Container, Grid } from "@mui/material";
import logo from "./images/logo.png";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
// import "./Vider/style";

const NavBar = () => {
  const CustomList = styled("li")({
    color: "#121212",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 4,
    fontWeight: "bold",
  });
  return (
    <Container>
      <Grid
        // container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{
          marginBottom: 10,
        }}
      >
        <Grid item sm={4} md={4}>
          <img src={logo} alt="logo" width="150px" height="60px" />
        </Grid>
        <Grid container item sm={4} md={8}>
          <CustomList>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                Link: (hover = { color: "red" }),
              }}
            >
              AboutVider
            </Link>
          </CustomList>
          <CustomList>
            <Link
              to="/services"
              style={{
                textDecoration: "none",
              }}
            >
              Services
            </Link>
          </CustomList>
          <CustomList>
            <Link
              to="/smart"
              style={{
                textDecoration: "none",
                Link: (hover = { color: "red" }),
              }}
            >
              Comparisons
            </Link>
          </CustomList>
          <CustomList>
            <Link
              to="/benefits"
              style={{
                textDecoration: "none",
                Link: (hover = { color: "red" }),
              }}
            >
              Features
            </Link>
          </CustomList>
          <CustomList>
            <Link
              to="/key"
              style={{
                textDecoration: "none",
                Link: (hover = { color: "red" }),
              }}
            >
              Blog
            </Link>
          </CustomList>
          <CustomList>
            <Link
              to="/Products"
              style={{
                textDecoration: "none",
                Link: (hover = { color: "red" }),
              }}
            >
              Products
            </Link>
          </CustomList>
          <CustomList>
            <Link
              to="/footer"
              style={{
                textDecoration: "none",
                Link: (hover = { color: "red" }),
              }}
            >
              Contact Us
            </Link>
          </CustomList>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
