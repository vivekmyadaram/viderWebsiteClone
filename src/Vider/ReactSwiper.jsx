// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";
import scene26 from "../images/scene26.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, Typography, Grid, Container } from "@mui/material";

const TaskContainer = () => {
  return (
    <Container style={{ marginBottom: "80px", marginTop: "80px" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="400px"
      >
        <Grid item sm={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              // textAlign: "center",
              height: "100%",
            }}
          >
            <Typography variant="h4" color="#182F53" gutterBottom>
              Structured TaskManagement
            </Typography>
            <Typography paragraph color="#121212" gutterBottom>
              Vider is technology driven smart discovery and aggregator
              platform,offering services that cover the current needs of
              indivisuals,startups, and established in india.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#E44652",
                backgroundColor: "#FFFFFF",
                padding: "10px 30px",
                "&:hover": { color: "#FFFFFF", backgroundColor: "#E44652" },
              }}
            >
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <img src={scene26} alt="slideImg" width="100%" height="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export const ReactSwiper = () => {
  return (
    <div id="benefit">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // autoplay={start:true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <TaskContainer />
        </SwiperSlide>
        <SwiperSlide>
          <TaskContainer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
