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
  Chip,
  Divider,
  Fab,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

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
  const [like, setLike] = useState("");

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
    console.log(data.id);

    return (
      <Card
        key={data.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: 5,
          borderRadius: 5,
          p: 2,
          m: 2,
          width: "40%",
        }}
        style={{
          backgroundImage: `url(${Texture})`,
          backgroundOpacity: "0.7",
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h1" my={1}>
              {data.jobTitle}
            </Typography>

            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton
                onClick={() => setLike(data.id)}
                sx={{
                  bgcolor: "white",
                  color: like == data.id ? "red" : "lightgrey",
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Box>
          <Divider variant="middle" />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              // flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              py: 2,
            }}
          >
            <Chip label={`Date: ${data.jobDate}`}></Chip>
            <Chip label={`Time: ${data.jobTime}`}></Chip>
            <Chip label={`Pay Rate: $${data.payRate}/hr`}></Chip>
          </Box>
          <Divider variant="middle" />
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
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
                my: 2,
                ml: 1,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4">
                Office Name: {data.officeName}
              </Typography>
              <Typography>Office Address: {data.officeAddress}</Typography>
              <Typography variant="h5">
                Posted By: {data.contactName}
              </Typography>
              <Typography> {data.contactNumber}</Typography>
              <Typography>{data.contactEmail}</Typography>
            </Card>
          </Box>
        </CardActionArea>
      </Card>
    );
  });
}
