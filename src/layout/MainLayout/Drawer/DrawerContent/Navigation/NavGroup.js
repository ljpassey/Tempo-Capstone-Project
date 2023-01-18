import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// material-ui
import { Box, List, Typography, Divider } from "@mui/material";

// project import
import NavItem from "./NavItem";

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case "item":
        return (
          <NavItem
            key={menuItem.id}
            item={menuItem}
            level={1}
            sx={{ height: "100%", display: 'flex', justifyContent: "space-between" }}
          />
        );
      default:
        return (
          <Typography
            key={menuItem.id}
            variant="h6"
            color="error"
            align="center"
          >
            Error
          </Typography>
        );
    }
  });

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-evenly",
        zIndex: 1,
      }}
      subheader={
        item.title &&
        drawerOpen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: 3,
              mb: 1,
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <Typography variant="subtitle3" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
    >
      <Divider variant="middle" />
      {navCollapse}
      {/* <Divider variant="middle" /> */}
    </List>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
