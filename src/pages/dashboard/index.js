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
import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import DottedBackground from "assets/background/DottedBackground";

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

// sales report status
const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

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
