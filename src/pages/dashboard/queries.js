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

import { styled } from "@mui/material/styles";
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

export default function AllJobs() {
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike(like ? false : true);
  };
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
    console.log(data);
    return (
      <Card
        key={data.createdAt}
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: 5,
          borderRadius: 5,
          p: 2,
          m: 1,
        }}
        style={{
          backgroundImage: `url(${Texture})`,
          backgroundOpacity: "0.3",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h1" my={1}>
            {data.jobTitle}
          </Typography>
          <IconButton
            sx={{ color: like ? "red" : "black" }}
            onClick={likeHandler}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
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
            <Typography variant="h5">Office Name: {data.officeName}</Typography>
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
          <Card
            sx={{
              color: "white",
              bgcolor: "black",
              borderRadius: 3,
              p: 2,

              display: "flex",
              flexDirection: "row",
              justifyContent: "stretch",
              alignItems: "center",
              width: "100%",
            }}
            variant="outline"
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <Fab
                variant="extended"
                sx={{
                  p: 2,
                  fontSize: 20,
                  borderRadius: 2,
                  width: "auto",
                  bgcolor: "white",
                  height: "auto",
                }}
              >
                Show Interest
                <SendAndArchiveOutlinedIcon
                  sx={{
                    justifyContent: "stretch",
                    display: "flex",
                    ml: 5,
                  }}
                />
              </Fab>
            </Box>
            <Box sx={{ width: "auto" }}>
              <Typography>Contact Name: {data.contactName}</Typography>
              <Typography>Contact Number: {data.contactNumber}</Typography>
              <Typography>Contact Email: {data.contactEmail}</Typography>
            </Box>
          </Card>
        </Box>
      </Card>
    );
  });
}
