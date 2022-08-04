import { Grid, Container, Typography } from "@mui/material";
import React from "react";
import hand from "../images/handImage.png";
const AAA = () => {
  return (
    <div id="benefits">
      <Grid container>
        <Grid
          item
          sm={12}
          md={7}
          style={{
            backgroundColor: "#182F53",
            width: "100%",
            height: "400px",
            textAlign: "center",
            padding: "8px 16px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "white", fontWeight: "bold" }}
          >
            Assurance, Accurate & Affordable
          </Typography>
          <Typography gutterBottom variant="body2" style={{ color: "white" }}>
            Our dream is to standardize the working style of professionals in a
            automated manner to match it with the applicable laws in the
            country. Thus, Vider was formed which integrates all the
            professional services under one roof and enables real time
            processing. We bring together the best and the brightest in
            professional services.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              rowGap: "20px",
            }}
          >
            <div>
              <Typography
                sx={{ color: "orange", fontWeight: "bold" }}
                variant="h4"
              >
                5X
              </Typography>
              <Typography variant="body2" color="#FFFFFF">
                Increase in managing tasks and overall efficiency by using our
                feature - INFO-PRO
              </Typography>
            </div>
            <div>
              <Typography
                sx={{ fontWeight: "bold", color: "#46D2E4" }}
                variant="h4"
              >
                3X
              </Typography>
              <Typography variant="body2" color="#FFFFFF">
                Increase in Productivity and Faster Turnaround time for
                completion of a Task through our features - Reminders & E-Sign
              </Typography>
            </div>
            <div>
              <Typography
                sx={{ color: "#46E483", fontWeight: "bold" }}
                variant="h4"
              >
                10X
              </Typography>
              <Typography variant="body2" color="#FFFFFF">
                By Partnering with Microsoft as CSPP, Our cloud storage solution
                will increase efficiency and our product PRISM increases the
                scope of Professionals & Hence Increases revenue.{" "}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item sm={12} md={5}>
          <img
            src={hand}
            alt="hand"
            style={{ width: "100%", height: "400px", objectFit: "fill" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AAA;
