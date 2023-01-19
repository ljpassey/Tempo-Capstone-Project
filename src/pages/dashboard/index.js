import { useEffect, useContext } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { AuthContext } from "pages/authentication/auth-forms/Auth";

// material-ui
import {
  Box,
  Button,
  Grid,
  Card,
  Typography,
  Fab,
  Stack,
  CardMedia,
  Divider,
  IconButton,
  Link,
} from "@mui/material";

// project import
import AllJobs from "./queries";
import CreatedJobs from "./createdJobsQuery";
import Profile from "pages/profile/index";
import Jobs from "pages/jobs/index";
import CreateJob from "pages/create-job/index";

// assets
import { PlusCircleOutlined } from "@ant-design/icons";
import Favorite from "@mui/icons-material/Favorite";

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(AuthContext);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    let uID = sessionStorage.getItem("uID Token");

    if (authToken) {
      navigate("/dashboard/default");
    } else if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Grid xs={12} md={6}>
      <Typography variant="h4">Dashboard</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: "auto",
        //   m: 1,
        }}
      >
        <Card
          sx={{
            width: "100%",

            bgcolor: "black",
            color: "white",

            borderRadius: 3,
            my: 2,
            p: 2,
          }}
        >
          <Jobs />
        </Card>
        <Card
          sx={{
            width: "100%",

            height: "100%",
            bgcolor: "black",
            color: "white",

            borderRadius: 3,
            m: 2,
            p: 2,
          }}
        >
          <CreateJob />
          <Typography variant="h4" mt={4}>
            Your Past Created Jobs
          </Typography>
          <CreatedJobs height="auto" />
        </Card>
      </Box>
    </Grid>
  );
};

export default DashboardDefault;
