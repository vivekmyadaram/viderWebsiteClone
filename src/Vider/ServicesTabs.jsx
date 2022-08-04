import { Button, Container, Grid, Stack } from "@mui/material";
// import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import TabsCard from "../Vider/TabCard";
import ListTabs from "../Vider/Tabs";
import Tabs1 from "../Vider/Tabs1";
const ServicesTabs = () => {
  const renderData = [
    {
      id: 1,
      img: "a",
      name: "Partnership Firm Registration",
      desc: "Partnership firm registration in India is provided as per the Partnership Act, 1932. Partnership firms are registered with the registrar of firms of your respective state.",
    },
    {
      id: 1,
      img: "a",
      name: "Partnership Firm Registration",
      desc: "Partnership firm registration in India is provided as per the Partnership Act, 1932. Partnership firms are registered with the registrar of firms of your respective state.",
    },
    {
      id: 1,
      img: "a",
      name: "Partnership Firm Registration",
      desc: "Partnership firm registration in India is provided as per the Partnership Act, 1932. Partnership firms are registered with the registrar of firms of your respective state.",
    },
    {
      id: 1,
      img: "a",
      name: "Partnership Firm Registration",
      desc: "Partnership firm registration in India is provided as per the Partnership Act, 1932. Partnership firms are registered with the registrar of firms of your respective state.",
    },
    {
      id: 2,
      img: "b",
      name: "PAN Application",
      desc: "PAN enables the department to identify/ link all transactions of the PAN holder with the department. It also be used to file Income Tax Returns",
    },
    {
      id: 2,
      img: "b",
      name: "PAN Application",
      desc: "PAN enables the department to identify/ link all transactions of the PAN holder with the department. It also be used to file Income Tax Returns",
    },
    {
      id: 2,
      img: "b",
      name: "PAN Application",
      desc: "PAN enables the department to identify/ link all transactions of the PAN holder with the department. It also be used to file Income Tax Returns",
    },
    {
      id: 2,
      img: "b",
      name: "PAN Application",
      desc: "PAN enables the department to identify/ link all transactions of the PAN holder with the department. It also be used to file Income Tax Returns",
    },

    {
      id: 0,
      img: "c",
      name: "Company Registration",
      desc: "Incorporating a Company under Companies Act 2013 will have many financial and legal advantages in an organization in corporate form. Organizing a business in corporate form allows a company to function independently from the owners of the business as it is treated as separate legal entity.",
    },
    {
      id: 0,
      img: "c",
      name: "Company Registration",
      desc: "Incorporating a Company under Companies Act 2013 will have many financial and legal advantages in an organization in corporate form. Organizing a business in corporate form allows a company to function independently from the owners of the business as it is treated as separate legal entity.",
    },
    {
      id: 0,
      img: "c",
      name: "Company Registration",
      desc: "Incorporating a Company under Companies Act 2013 will have many financial and legal advantages in an organization in corporate form. Organizing a business in corporate form allows a company to function independently from the owners of the business as it is treated as separate legal entity.",
    },
    {
      id: 0,
      img: "c",
      name: "Company Registration",
      desc: "Incorporating a Company under Companies Act 2013 will have many financial and legal advantages in an organization in corporate form. Organizing a business in corporate form allows a company to function independently from the owners of the business as it is treated as separate legal entity.",
    },
    {
      id: 3,
      img: "d",
      name: "TDS Registration",
      desc: "TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority.",
    },
    {
      id: 3,
      img: "d",
      name: "TDS Registration",
      desc: "TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority.",
    },
    {
      id: 3,
      img: "d",
      name: "TDS Registration",
      desc: "TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority.",
    },
    {
      id: 3,
      img: "d",
      name: "TDS Registration",
      desc: "TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority.",
    },
  ];
  const [filterData, setfilterData] = useState(renderData);
  // const serviceData = [
  //   {
  //     id: 1,
  //     img: "a",
  //     name: "Partnership Firm Registration",
  //     desc: "Partnership firm registration in India is provided as per the Partnership Act, 1932. Partnership firms are registered with the registrar of firms of your respective state.",
  //   },
  //   {
  //     id: 2,
  //     img: "b",
  //     name: "PAN Application",
  //     desc: "PAN enables the department to identify/ link all transactions of the PAN holder with the department. It also be used to file Income Tax Returns",
  //   },

  //   {
  //     id: 3,
  //     img: "c",
  //     name: "Company Registration",
  //     desc: "Incorporating a Company under Companies Act 2013 will have many financial and legal advantages in an organization in corporate form. Organizing a business in corporate form allows a company to function independently from the owners of the business as it is treated as separate legal entity.",
  //   },
  //   {
  //     id: 4,
  //     img: "d",
  //     name: "TDS Registration",
  //     desc: "TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority.",
  //   },
  // ];

  const HandleTab = (value) => {
    console.log(value);
    const filter = renderData.filter((list) => list.id === value);
    setfilterData(filter);
  };
  // console.log(renderData);
  // console.log(filterData);

  return (
    <Container id="services">
      {/* {filteredData.map((a) => console.log(a.img))} */}
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
        {/* {serviceData.map((array) => (
          <Grid item sm={12} md={3}>
            <Tabs1
              changeTab={HandleTab}
              serviceList={array}
              key={array.id}
            />
          </Grid>
        ))} */}

        <Tabs1 changeTab={HandleTab} />

        {filterData.map((array1) => {
          return (
            <Grid item sm={12} md={3}>
              <TabsCard data={array1} />
            </Grid>
          );
        })}

        <Grid item sm={12} md={12}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              style={{
                color: "#E44652",
                borderColor: "#E44652",
                textTransform: "capitalize",
                background: "#FFFFFF",
                padding: "4px 8px",
              }}
              href="#text-buttons"
            >
              Click Here!
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesTabs;
