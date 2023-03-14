import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import ChipsArray from "components/ChipsArray";
import LeftSpeedDial from "components/SpeedDial";

import Texture from "assets/background/large-triangles.svg";

//db
import { collection, query, limit, where } from "firebase/firestore";
import { db } from "../../Firebase";

//query
// const ref = query(
//     collection(db, 'users'),
//     limit(10),
//     where()
// )

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function JobCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: 5,
        borderRadius: 5,
        width: "100%",
      }}
      style={{
        backgroundImage: `url(${Texture})`,
        backgroundOpacity: "0.3",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "stretch",
          p: 1,
        }}
      >
        <LeftSpeedDial />

        <ChipsArray />
      </Box>
      <CardActionArea onClick={handleExpandClick}>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
      </CardActionArea>
    </Card>
  );
}
