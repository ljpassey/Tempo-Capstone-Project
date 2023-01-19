import React, { useContext, useEffect } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

import JobCard from "./JobCard";
import { AuthContext } from "pages/authentication/auth-forms/Auth";

import { Stack, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MultipleSelectChip from "./MultipleSelectChip";

const Jobs = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(AuthContext);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    let uID = sessionStorage.getItem("uID Token");

    if (authToken) {
      navigate("/dashboard/jobs");
    } else if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Grid>
      <Stack
        direction="column"
        justifyContent="stretch"
        alignItems="stretch"
        spacing={2}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="span">
            Available Jobs
          </Typography>
        </Box>

        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Stack>
    </Grid>
  );
};

export default Jobs;
