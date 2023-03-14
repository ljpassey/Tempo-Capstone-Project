import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Stack,
  CardActions,
  CardActionArea,
  Collapse,
  IconButton,
  Card,
  Divider,
  Fab,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import SendAndArchiveOutlinedIcon from "@mui/icons-material/SendAndArchiveOutlined";

//db
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
  docSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../Firebase";
import Texture from "assets/background/large-triangles.svg";

const uID = sessionStorage.getItem("uID Token");

export default function CreatedJobs() {
  console.log(`uID is ${uID}`);
  const navigate = useNavigate();
  const query = useFirestoreQuery("jobs", collection(db, "jobs"), {
    subscribe: true,
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error!</div>;
  }

  const snapshot = query.data;

  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();
    const num = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 10);
    console.log(num);
    if (`${data.createdBy}` === `${uID}`) {
      return (
        <Card
          key={data.createdAt}
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: 5,
            borderRadius: 3,
            p: 2,
            // mt: 2,
            width: "100%",
          }}
          style={{
            backgroundImage: `url(${Texture})`,
            backgroundOpacity: "0.3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h1" my={1}>
              {data.jobTitle}
            </Typography>
            {/* <IconButton>
              <FavoriteBorderIcon />
            </IconButton> */}
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              direction: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Card
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "stretch",
                flexDirection: "column",
                p: 2,
                my: 2,
                mr: 1,
                borderRadius: 2,
              }}
            >
              <Typography>Job Date: {data.jobDate}</Typography>
              <Typography>Job Time: {data.jobTime}</Typography>
              <Typography>Job Type: {data.jobType}</Typography>
              <Typography>Pay Rate: {data.payRate}</Typography>
            </Card>
            <Card
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                p: 2,
                my: 2,
                ml: 1,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">
                Office Name: {data.officeName}
              </Typography>
              <Typography>Office Address: {data.officeAddress}</Typography>
            </Card>
          </Box>
          <Divider />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography mt={2} variant="h5">
              {num} Likes
            </Typography>
            <Typography mt={2} variant="h5">
              {num2} People Interested
            </Typography>
          </Box>
        </Card>
      );
    }
  });
}
