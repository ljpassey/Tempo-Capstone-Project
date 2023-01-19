import React, { useContext, useEffect } from "react";
import { AuthContext } from "pages/authentication/auth-forms/Auth";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

import { Stack, Typography, Card, Fab } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CreateJobForm from "./CreateJobForm";

const CreateJob = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    let uID = sessionStorage.getItem("uID Token");

    if (authToken) {
      navigate("/dashboard/create-job");
    } else if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Grid>
      <Stack spacing={2}>
        <Typography variant="h4">Create a New Job</Typography>
        <Card
          sx={{
            width: "100%",
            p: 2,
            borderRadius: 3
          }}
        >
          <CreateJobForm />
        </Card>
      </Stack>
    </Grid>
  );
};

export default CreateJob;
