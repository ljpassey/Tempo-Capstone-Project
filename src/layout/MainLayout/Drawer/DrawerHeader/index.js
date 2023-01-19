import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Paper, Card, Skeleton, Box } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
// import TempoIcon from "assets/icon/tempoicon.svg";

// project import
import DrawerHeaderStyled from "./DrawerHeaderStyled";

const TempoIcon = createSvgIcon(
  <path d="m4.22924,0l16.06992,0a3.8983,3.8983 0 0 1 2.75777,1.14644l0.06303,0.06894a3.8983,3.8983 0 0 1 1.08341,2.6908l0,16.39297a3.92194,3.92194 0 0 1 -3.90618,3.90618l-16.391,0a3.92194,3.92194 0 0 1 -3.90618,-3.90618l0,-16.06992a4.24696,4.24696 0 0 1 4.22924,-4.22924zm12.14206,9.25823l-2.52533,0l0,8.47029l-3.48464,0l0,-8.47029l-2.52533,0l0,-2.78929l8.5353,0l0,2.78929zm3.92785,-7.26475l-16.06992,0a2.2397,2.2397 0 0 0 -2.23773,2.23576l0,16.06992a1.92453,1.92453 0 0 0 1.91468,1.91468l16.39297,0a1.91665,1.91665 0 0 0 1.91468,-1.91468l0,-16.39297a1.91665,1.91665 0 0 0 -0.5161,-1.30797l-0.04728,-0.04334a1.90877,1.90877 0 0 0 -1.35131,-0.56337l0,0.00197z" />,
  "Tempo"
);

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack>
        {open ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TempoIcon fontSize="large" />
            <Typography variant="h2"> empo</Typography>
          </Box>
        ) : (
          <TempoIcon fontSize="large" sx={{ mt: 1 }} />
        )}
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
