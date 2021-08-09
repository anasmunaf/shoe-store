/** @format */

import React from "react";
import Container from "@material-ui/core/Container";
import {
  CardContent,
  makeStyles,
  Typography,
  CardMedia,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  media: {
    height: "18vh",
  },
});

const Cards = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      {props.label ? (
        <CardContent>
          <Typography variant={"h8"}>{props.label}</Typography>
        </CardContent>
      ) : null}
      <CardMedia className={classes.media} image={props.image} />
    </Card>
  );
};

export default Cards;
