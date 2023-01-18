import React from "react";
import { Box, Typography, Stack, Paper, Card } from "@mui/material";

const ProfileCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
      }}
    >
      <Typography
        // sx={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "space-between",
        //   p: 1,
        // }}
      >
        TEST
      </Typography>
    </Card>
  );
};

export default ProfileCard;
