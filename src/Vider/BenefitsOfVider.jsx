import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import info from "../images/infoPro.png";
import milestone from "../images/milestone.png";
import soutsourcing from "../images/serviceOutSource.png";
import sp from "../images/sp.png";
import st from "../images/st.png";
import x from "../images/x.png";
import audit from "../images/audit.png";
import dd from "../images/dd.png";
import lm from "../images/lm.png";
import df from "../images/df.jpeg";

const BenefitsOfVider = () => {
  const benefitsArr = [
    {
      id: 1,
      benefitsImg: info,
      benefitsTitle: "Info-Pro",
      benefitsDesc:
        "Info-Pro Form request information directly from the client so tasks can be completed before due dates.",
    },
    {
      id: 2,
      benefitsImg: milestone,
      benefitsTitle: "Milestones",
      benefitsDesc:
        "Real-time status check of task on Dashboard, Task Started/ Task Pending – awaiting for Client Data/ Task Pending",
    },
    {
      id: 3,
      benefitsImg: soutsourcing,
      benefitsTitle: "Service Outsourcing",
      benefitsDesc: "outsourcing services to Vider Team.",
    },
    {
      id: 4,
      benefitsImg: sp,
      benefitsTitle: "Smart Plugs (API's)",
      benefitsDesc:
        "access to official govt. websites to provide better service to professionals by gathering client information",
    },
    {
      id: 5,
      benefitsImg: st,
      benefitsTitle: "Status Tracker (overall tasks wise)",
      benefitsDesc:
        "Data from a particular task/service is collected for all clients and to track and manage their tasks efficiently & effectively.",
    },
    {
      id: 6,
      benefitsImg: x,
      benefitsTitle: "Atom X",
      benefitsDesc:
        "streamlining the above will result in saving fines payable to the concerned departments, as well as gain goodwill and reputation",
    },
    {
      id: 7,
      benefitsImg: audit,
      benefitsTitle: "Audit Automation",
      benefitsDesc:
        "Auditors can use the auditing tool to perform their audits with ease and efficiency, consuming less time than expected.",
    },
    {
      id: 8,
      benefitsImg: dd,
      benefitsTitle: "Due-date Calendar",
      benefitsDesc:
        "Users can view due dates of all tasks, statutory deadlines and receive notifications as the due date approaches.",
    },
    {
      id: 9,
      benefitsImg: lm,
      benefitsTitle: "Lead Management",
      benefitsDesc:
        "Remote access allows professionals to grow their businesses and benefit their clients.",
    },
    {
      id: 10,
      benefitsImg: df,
      benefitsTitle: "Discussion Forum & Updates",
      benefitsDesc:
        "User-friendly platform helps with all latest government laws at one place and interact with clients.",
    },
  ];

  const BenefitsCard = ({ list }) => {
    return (
      <div>
        <Card
          spacing={2}
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "100%",
              height: "220px",
              boxShadow: "none",
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src={list.benefitsImg}
              alt="InfoPro"
              width="100px"
              height="100px"
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6" color="#182F53">
              {list.benefitsTitle}
            </Typography>
            <Typography paragraph color="#121212">
              {list.benefitsDesc}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <Container>
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
        <Grid item xs={12} md={12}>
          <Typography
            variant="h4"
            textAlign="center"
            color="#182F53"
            gutterBottom
          >
            Benefits of using Vider Platform
          </Typography>
        </Grid>

        {benefitsArr.map((arr) => (
          <Grid item sx={12} md={4}>
            <BenefitsCard list={arr} key={arr.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BenefitsOfVider;
