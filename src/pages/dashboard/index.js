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

import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

// project import
import AllJobs from "./queries";
import CreatedJobs from "./createdJobsQuery";
import Profile from "pages/profile/index";
import Jobs from "pages/jobs/index";
import CreateJob from "pages/create-job/index";
import YourJobs from "./yourJobs";

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

const Item = styled(Card)(({}) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  color: "white",
  borderRadius: "20px",
  padding: 10,
  marginRight: 10,
}));

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(AuthContext);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    let uID = sessionStorage.getItem("uID Token");

    if (authToken) {
      navigate("/dashboard");
    } else if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Typography variant="h4">Dashboard</Typography>
      {/* <Box
        container
        xs={12}
        sm={12}
        md={8}
        lg={6}
        xl={4}
        sx={{
          m: 2,
          py: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Item>
          <Jobs />
        </Item>
        <Item>
          <CreateJob />
        </Item>
        <Item>
          <YourJobs />
        </Item> */}
      {/* </Box> */}
    </>
  );
};

export default DashboardDefault;
