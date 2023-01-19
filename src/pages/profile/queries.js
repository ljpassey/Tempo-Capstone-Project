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
  Button,
  Rating,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import SendAndArchiveOutlinedIcon from "@mui/icons-material/SendAndArchiveOutlined";
import MultipleSelectChip from "pages/jobs/MultipleSelectChip";

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

export default function UserData() {
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike(like ? false : true);
  };
  const navigate = useNavigate();
  const query = useFirestoreQuery("users", collection(db, "users"), {
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
    if (`${data.id}` === `${uID}`) {
      return (
        <Card
          key={data.id}
          sx={{
            borderRadius: 3,
            p: 2,
            ml: 2,
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
              flexDirection: "columns",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" my={1} textAlign="center">
              Personal Details
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "columns",
              justifyContent: "center",
              alignItems: "center",
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
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",
                }}
              >
                <Typography variant="h1" p={1} width="100%">
                  Job Preferences
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  width: "auto",
                  //   display: "flex",
                  //   justifyContent: "space-around",
                  // alignItems: "center",
                  //   flexDirection: "column",
                  p: 2,
                  //   my: 2,
                  //   mr: 1,
                  borderRadius: 3,
                }}
              >
                <form>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Single Column"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Double Column"
                    />
                  </FormGroup>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    Pay Rate:
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      width="50%"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Rating/Review:
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Box>
                  <Button
                    sx={{ my: 2, display: "flex", justifyContent: "center" }}
                    variant="contained"
                    p={2}
                  >
                    Update Your Job Preferences
                  </Button>
                </form>
              </Box>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "columns",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Card
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                p: 2,
                my: 2,
                // ml: 1,
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "space-center",
                }}
              >
                <Typography variant="h1" p={1} width="100%">
                  Contact Info
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "space-between",
                //   alignItems: "center",
                  width: "100%",
                //   height: "100%",
                //   p: 2
                my: 1
                  
                }}
              >
                <form>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      m: 1
                    }}
                  >
                    <label>
                      First Name:
                      <input
                        type="text"
                        name="firstName"
                        value={data.firstName}
                      />
                    </label>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      m: 1
                    }}
                  >
                    <label>
                      Last Name:
                      <input
                        type="text"
                        name="lastNname"
                        value={data.lastName}
                      />
                    </label>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      m: 1
                    }}
                  >
                    <label>
                      Email:
                      <input type="text" name="email" value={data.email} />
                    </label>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      m: 1
                    }}
                  >
                    <label>
                      Phone Number:
                      <input type="text" name="phoneNumber" />
                    </label>
                  </Box>
                  <Button
                    sx={{ my: 2, alignItems: "center" }}
                    variant="contained"
                    p={2}
                  >
                    Update Your Contact Info
                  </Button>
                </form>
              </Box>
            </Card>
          </Box>
        </Card>
      );
    }
  });
}
