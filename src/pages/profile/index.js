import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Card,
  Divider,
  IconButton,
  Button,
  CircularProgress,
  LinearProgress,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ProfileCard from "./ProfileCard";
import ProfilePreferences from "./ProfilePreferences";

import Theme from "themes/theme/index";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

//db
import { collection, query, where, doc, getDoc } from "firebase/firestore";
import db from "../../Firebase";

import BackgroundTexture from "assets/background/protruding-squares.svg";
import Texture2 from "assets/background/large-triangles.svg";

const Profile = () => {
  const uID = sessionStorage.getItem("uID Token");
  const [name, setName] = useState();
  const navigate = useNavigate();

  const progress = 70;

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    let uID = sessionStorage.getItem("uID Token");

    if (authToken) {
      navigate("/dashboard/profile");
      getUser();
    } else if (!authToken) {
      navigate("/login");
    }
  }, []);

  async function getUser() {
    const userRef = doc(db, "users", `${uID}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setName(userSnap.data().firstName);
      return;
    } else {
      console.log("No user found");
    }
    return name;
  }

  return (
    <Grid spacing={2}>
      <Grid spacing={2}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box>
            <Typography variant="h4">Profile</Typography>
          </Box>

          <IconButton sx={{ color: "black" }}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack mt={2} width="100%">
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
            style={{
              backgroundImage: `url(${BackgroundTexture})`,
              height: "auto",
            }}
            variant="outlined"
          >
            <Paper
              sx={{ p: 2, borderRadius: 2, bgcolor: "black", color: "white" }}
            >
              <Typography variant="h4" position="relative" sx={{ left: 0 }}>
                {`${progress}% Complete`}
              </Typography>
            </Paper>

            <Box sx={{ px: 2 }}>
              {/* <Typography variant="h5">Edit Your Profile</Typography> */}
              <Typography variant="h4">
                Finish setting up your profile to get the most out of Tempo!
              </Typography>
            </Box>

            <Box>
              <Button variant="contained">Edit Your Profile</Button>
            </Box>
          </Card>
          <Box sx={{ color: "black" }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              color="inherit"
              sx={{ bgcolor: "lightgrey" }}
            />
          </Box>
        </Stack>
        <Stack
          spacing={2}
          my={2}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Card sx={{ width: "auto", p: 2 }}>
            <Card
              sx={{
                width: "auto",
                borderRadius: 2,
                bgcolor: "black",
                color: "white",
                textAlign: "center",
              }}
              variant="outlined"
            >
              <Typography variant="h5" m={1}>{`Welcome ${name}!`}</Typography>
            </Card>
            <ProfilePreferences />
          </Card>
          <Card sx={{ width: "100%", height: "80vh" }}>
            <Typography sx={{ height: "50%" }}>Text</Typography>
            <Divider variant="middle" />
            <Typography sx={{ height: "30%" }}>Test2</Typography>
            <Divider variant="middle" />
            <Typography sx={{ height: "20%" }}>Test3</Typography>
            <Divider variant="middle" />
            <Typography sx={{ height: "40%" }}>Test4</Typography>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Profile;
