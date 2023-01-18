import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Stack, Paper, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ProfileCard from "./ProfileCard";

import Theme from "themes/theme/index";

//db
import { collection, query, where, doc, getDoc } from "firebase/firestore";
import db from "../../Firebase";

const Profile = () => {
  const uID = sessionStorage.getItem("uID Token");
  const [name, setName] = useState();
  const navigate = useNavigate();

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
    <Grid>
      <Stack
        // direction="column"
        // justifyContent="space-between"
        // alignItems="stretch"
        spacing={2}
      >
        <Card variant="outlined" sx={{ width: "min-content", borderRadius: 3, p: 1 }}>
          <Typography variant="h4">Profile</Typography>
        </Card>
        <Typography variant="h5">{`Welcome ${name}`}</Typography>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <Box sx={{ height: "90vh" }} />
      </Stack>
    </Grid>
  );
};

export default Profile;
