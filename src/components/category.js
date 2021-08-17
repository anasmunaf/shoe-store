/** @format */

import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typo: {
    color: "black",
  },
}));
const Category = () => {
  const classes = useStyles();
  return (
    <Card style={{ width: "100%", padding: "0 3%" }}>
      <CardContent className={classes.root}>
        <Typography className={classes.typo}>
          <NavLink
            to='/women'
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            WOMEN'S SHOES
          </NavLink>
        </Typography>
        <Typography className={classes.typo}>
          <NavLink
            to='/men'
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            MEN'S SHOES
          </NavLink>
        </Typography>
        <Typography className={classes.typo}>
          <NavLink
            to='/kids'
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            KID'S SHOES
          </NavLink>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Category;
