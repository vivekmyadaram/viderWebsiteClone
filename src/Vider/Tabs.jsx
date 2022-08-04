import { Button, Container } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Active" />
      <Tab label="Disabled" />
      <Tab label="Active" />
    </Tabs>
  );
}

const ListTabs = ({ serviceList, changeTab }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <DisabledTabs />
        <Button
          variant="text"
          style={{
            color: "#182F53",
            fontFamily: "Poppins",
            fontSize: "18px",
            textTransform: "capitalize",
          }}
          onClick={() => changeTab(serviceList.img)}
        >
          {serviceList.name}
        </Button>
      </div>
    </Container>
  );
};
export default Tabs;
