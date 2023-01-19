import React from "react";
import { useTheme } from "@mui/material/styles";

// material-ui
import {
  Box,
  IconButton,
  Link,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { GithubOutlined } from "@ant-design/icons";

// project import
import Search from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 2 }} />}

      <IconButton
        component={Link}
        href="https://github.com/ljpassey/Tempo-Capstone-Project"
        target="_blank"
        disableRipple
        color="inherit"
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
