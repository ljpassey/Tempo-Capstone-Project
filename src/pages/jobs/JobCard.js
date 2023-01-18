import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import ChipsArray from "components/ChipsArray";
import LeftSpeedDial from "pages/components-overview/SpeedDial";

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

  const dummyInfo = <lorem-ipsum className="line"></lorem-ipsum>;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: 5,
        borderRadius: 5,
        width: '100%'
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
        <Stack direction="row">
          <Paper
            component="span"
            sx={{ m: 2, p: 3, borderRadius: 2 }}
            elevation={5}
          >
            <Divider>
              <Chip label="Job Details" />
            </Divider>
            <Typography variant="body1" color="text.primary">
              Job Title: Officia minim exercitation commodo ut qui tempor
              cupidatat dolore in dolore labore id.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Job Date: Do quis ex ullamco velit voluptate et anim id sint
              exercitation nisi proident.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Job Time: Veniam adipisicing duis sunt tempor sunt sint cupidatat
              amet et sint.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Job Type: Laborum amet laboris magna ipsum enim occaecat.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Pay Rate:
            </Typography>
          </Paper>
          <Paper
            component="span"
            sx={{ m: 2, p: 3, borderRadius: 2 }}
            elevation={3}
          >
            <Divider>
              <Chip label="Office Details" />
            </Divider>
            <Typography variant="body1" color="text.primary">
              Office Name: Est ullamco non ipsum ea est ex quis qui elit
              proident nostrud sit.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Office Address: Sit proident sit qui excepteur sit eu nisi non do
              est ipsum anim.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Office Number: Est nostrud sit eiusmod excepteur est elit magna.
            </Typography>
          </Paper>
        </Stack>
        <CardContent></CardContent>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Divider sx={{ p: 3 }}>
              <Chip label="Job Details" />
            </Divider>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Divider sx={{ p: 3 }}>
              <Chip label="Job Type" />
            </Divider>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Divider sx={{ p: 3 }}>
              <Chip label="Pay" />
            </Divider>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}
