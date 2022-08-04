import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FCard() {
  return (
    <Box sx={{ minWidth: 180 }}>
      <Card
        variant="outlined"
        style={{ backgroundColor: "transparent", lineHeight: "40px" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="#FFFFFF" gutterBottom>
            Direct Taxation
          </Typography>
          <Typography variant="body" color="#FFFFFF" gutterBottom>
            Department Of Revenue
          </Typography>
          <Typography variant="body" color="#FFFFFF" gutterBottom>
            cbdt
          </Typography>
          <Typography variant="body" color="#FFFFFF" gutterBottom>
            E-Filling
          </Typography>
          <Typography variant="body" color="#FFFFFF" gutterBottom>
            Reporting Portal
          </Typography>
          <Typography variant="body" color="#FFFFFF" gutterBottom>
            ITAT
          </Typography>
          <Typography variant="body" color="#FFFFFF" gutterBottom>
            Tax Information Network
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
