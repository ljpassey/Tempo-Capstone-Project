import { useEffect, useContext } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { AuthContext } from "pages/authentication/auth-forms/Auth";

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Paper,
  Card,
  Typography,
  Fab,
} from "@mui/material";

// project import

// assets
import { PlusCircleOutlined } from "@ant-design/icons";

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
  const currentUserEmail = currentUser ? currentUser.email : "";

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
    <Grid container rowSpacing={4} columnSpacing={2}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "stretch" }}
      >
        <Card sx={{ width: "100%" }}>
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ display: "flex" }}
          >
            <PlusCircleOutlined style={{ fontSize: "25px", m: 3 }} />
            <Typography style={{ fontSize: "25px" }} m={3}>
              Add Job Preferences
            </Typography>
          </Fab>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "stretch" }}
      >
        <Card sx={{ width: "100%" }}>
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ display: "flex" }}
          >
            <PlusCircleOutlined style={{ fontSize: "25px", m: 3 }} />
            <Typography style={{ fontSize: "25px" }} m={3}>
              Add Job Preferences
            </Typography>
          </Fab>
        </Card>
      </Grid>
      <Box sx={{ height: "90vh" }} />
    </Grid>
  );
};

export default DashboardDefault;
