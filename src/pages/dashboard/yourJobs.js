import React from 'react'
import { Stack, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import CreatedJobs from './createdJobsQuery';

const YourJobs = () => {
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
            Jobs Created By You
          </Typography>
        </Box>
        <CreatedJobs />
      </Stack>
    </Grid>
  );
}

export default YourJobs