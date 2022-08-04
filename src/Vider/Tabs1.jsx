import * as React from "react";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

export default function CenteredTabs({ changeTab }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeTab(value);
  };

  const CustomTab = styled(Tab)`
    color: #182f53;
    font-family: Poppins;
    font-size: 18px;
    text-transform: capitalize;
  `;

  return (
    <Grid
      container
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        textTransform: "capitalize",
      }}
    >
      <Grid item sm={12} md={12}>
        <Tabs value={value} onChange={handleChange} centered>
          <CustomTab label="Business Setup" />

          <CustomTab label="Tax & Compliance" />

          <CustomTab label="Trademark & Ip" />

          {/* <CustomTab label="Property Services" /> */}
        </Tabs>
      </Grid>
    </Grid>
  );
}
