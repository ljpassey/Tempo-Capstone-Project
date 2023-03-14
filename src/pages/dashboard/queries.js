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
    // const jobClickHandler = () => {
    //   navigate(`jobs/:${data.id}`);
    // };
    return (
      <Card
        key={data.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: 5,
          borderRadius: 5,
          p: 2,
          m: 4,
          width: "100%",
        }}
        style={{
          backgroundImage: `url(${Texture})`,
          backgroundOpacity: "0.3",
        }}
      >
        <CardActionArea>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h1" my={1}>
              {data.jobTitle}
            </Typography>
            <CardActions>
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
                borderRadius: 3,
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
                justifyContent: "center",
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

          <Box>
            <Card
              sx={{
                color: "white",
                bgcolor: "black",
                borderRadius: 3,
                p: 1,

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "auto",
              }}
              variant="outline"
            >
              <Box
                sx={{
                  m: 1,
                }}
              >
                <CardActions>
                  <Fab
                    color="primary"
                    sx={{
                      p: 2,
                      mr: 1,
                      fontSize: 20,
                      borderRadius: 3,
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    Apply
                    <SendAndArchiveOutlinedIcon
                      sx={{
                        // justifyContent: "stretch",
                        display: "flex",
                        ml: 2,
                      }}
                    />
                  </Fab>
                </CardActions>
              </Box>
              <Card sx={{ width: "100%", p: 1, ml: 1 }}>
                {/* <Typography>Job Contact</Typography> */}
                <Typography>Name: {data.contactName}</Typography>
                <Typography>Number: {data.contactNumber}</Typography>
                <Typography>Email: {data.contactEmail}</Typography>
              </Card>
            </Card>
          </Box>
        </CardActionArea>
      </Card>
    );
  });
}
