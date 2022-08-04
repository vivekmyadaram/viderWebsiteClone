import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./dstyle.css";
import logo from "./images/logo.png";

import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const ReactNavbar = () => {
  const [show, setshow] = useState(false);

  const HandleBar = () => {
    setshow(!show);
  };

  const StyledList = styled("li")({
    textDecoration: "none",
    listStyleType: "none",
  });

  const CustomizedAnchor = styled("a")`
    color: #7a7a7a;
    font-size: 16px;
    font-weight: bold;
    :hover {
      color: blue;
    }
  `;

  const RightSideBar = () => {
    return (
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
          alignItems: "center",
          position: "absolute",
          top: "0px",
          right: "24px",
          width: "180px",
          height: "100vh",
          backgroundColor: "#F6f6f6",
          overflow: "hidden",
          zIndex: "20",
          transition: "right 0.3s ease-in",
        }}
        // class="nav-links"
      >
        <CloseIcon
          onClick={HandleBar}
          sx={{
            ":hover": {
              color: "red",
            },
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
        <StyledList>
          <CustomizedAnchor href="#banner" onClick={HandleBar}>
            About
          </CustomizedAnchor>
        </StyledList>
        <StyledList onClick={HandleBar}>
          <CustomizedAnchor href="#services">Services</CustomizedAnchor>
        </StyledList>
        <StyledList onClick={HandleBar}>
          <CustomizedAnchor href="#benefits">benefits</CustomizedAnchor>
        </StyledList>
        <StyledList onClick={HandleBar}>
          <CustomizedAnchor href="#products">Products</CustomizedAnchor>
        </StyledList>
        <StyledList onClick={HandleBar}>
          <CustomizedAnchor href="#smart">features</CustomizedAnchor>
        </StyledList>
        <StyledList onClick={HandleBar}>
          <CustomizedAnchor href="#footer">contact us</CustomizedAnchor>
        </StyledList>
      </ul>
    );
  };

  return (
    <Container id="nav">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ backgroundColor: "#FFFFFF" }}
        height="60px"
      >
        <Grid item md={3}>
          <CustomizedAnchor href="#banner">
            <img src={logo} alt="logo" width="120px" height="40px" />
          </CustomizedAnchor>
        </Grid>

        <Grid className="navbar" item md={9}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <StyledList>
              <CustomizedAnchor href="#banner">About</CustomizedAnchor>
            </StyledList>
            <StyledList>
              <CustomizedAnchor href="#services">Services</CustomizedAnchor>
            </StyledList>
            <StyledList>
              <CustomizedAnchor href="#benefit">benefits</CustomizedAnchor>
            </StyledList>
            <StyledList>
              <CustomizedAnchor href="#products">Products</CustomizedAnchor>
            </StyledList>
            <StyledList>
              <CustomizedAnchor href="#smart">features</CustomizedAnchor>
            </StyledList>
            <StyledList>
              <CustomizedAnchor href="#footer">contact us</CustomizedAnchor>
            </StyledList>
          </ul>
        </Grid>
        <Grid className="navbarIcon" item sm={2} md={2}>
          <MenuIcon
            sx={{ width: "80px", height: "60px" }}
            onClick={HandleBar}
          />
        </Grid>

        {show && <RightSideBar />}
      </Grid>
    </Container>
  );
};

export default ReactNavbar;
