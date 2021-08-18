/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles({
  root: {
    // marginBottom: 20,
  },
  media: {
    height: 300,
  },
});

const Tiles = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea disableRipple>
          <CardMedia className={classes.media} image={props.url} />
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography gutterBottom variant='h5' component='h2'>
                {props.name}
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Price: ${props.price}
              </Typography>
            </div>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              style={{ fontWeight: "bold" }}
            >
              ADD TO CART
            </Button>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default Tiles;
