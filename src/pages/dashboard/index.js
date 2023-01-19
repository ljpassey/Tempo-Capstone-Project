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
          height: "100%",
          py: 1,
        }}
      >
        <Card
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            py: 2,
          }}
        >
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ display: "flex", borderRadius: 3 }}
          >
            <PlusCircleOutlined style={{ fontSize: "25px", m: 3 }} />
            <Typography style={{ fontSize: "25px" }} m={3}>
              Add Job Preferences
            </Typography>
          </Fab>
        </Card>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "black",
            color: "white",
            alignItems: "center",
            borderRadius: 3,
            m: 2,
            pt: 2,
          }}
        >
          <Typography variant="h3">Your Past Created Jobs</Typography>
          <CreatedJobs />
        </Card>
      </Box>
    </Grid>
  );
};

export default DashboardDefault;
