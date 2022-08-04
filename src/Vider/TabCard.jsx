import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PAN from "../images/PAN.png";

export default function TabCard({ data }) {
  console.log(data);
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={PAN} alt={data.name} />
        <CardContent>
          <Typography gutterBottom variant="h6" color="#182F53">
            {data.name}
          </Typography>
          <Typography variant="body2" color="#121212">
            {data.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
