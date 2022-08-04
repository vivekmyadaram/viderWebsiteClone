import { Typography, Box, Grid, Container } from "@mui/material";
import bannerImg from "../images/hands.png";

function BannerA() {
  return (
    <Container>
      <Grid
        container
        mt="80px"
        mb="80px"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sm={12}
          md={6}
          style={{ backgroundColor: "#182F53", width: "100%" }}
        >
          <Typography
            variant="h4"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Assurance, Accurate & Affordable
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="paragraph"
              style={{ color: "#FFFFFF91", fontWeight: "bold", margin: "5px" }}
            >
              Our dream is to standardize the working style of professionals in
              a automated manner to match it with the applicable laws in the
              country.
            </Typography>
            <br></br>
            <Typography
              variant="paragraph"
              style={{ color: "#FFFFFF91", fontWeight: "bold", margin: "5px" }}
            >
              Thus, Vider was formed which integrates all the professional
              services under one roof and enables real time processing
            </Typography>
            <br></br>
            <Typography
              variant="paragraph"
              style={{ color: "#FFFFFF91", fontWeight: "bold", margin: "5px" }}
            >
              {" "}
              We actually bring together the best and the brightest in
              professional services.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              marginLeft: "30px",
              gap: "5px",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "orange" }}
              >
                {" "}
                5X{" "}
              </Typography>
              <Typography variant="p" sx={{ color: "#FFFFFF91" }}>
                {" "}
                Increase in managing tasks and overall efficiency by using our
                feature - INFO-PRO
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#46D2E4" }}
              >
                {" "}
                3X{" "}
              </Typography>
              <Typography variant="p" sx={{ color: "#FFFFFF91" }}>
                {" "}
                Increase in Productivity and Faster Turnaround time for
                completion of a Task through our features - Reminders & E-Sign
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#46E483" }}
              >
                {" "}
                10X{" "}
              </Typography>
              <Typography variant="p" sx={{ color: "#FFFFFF91" }}>
                By Partnering with Microsoft as CSPP, Our cloud storage solution
                will increase efficiency and our product PRISM increases the
                scope of Professionals & Hence Increases revenue.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid items xs={6}>
          <img
            src={bannerImg}
            alt="banner"
            style={{ height: "600px", width: "600px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BannerA;
