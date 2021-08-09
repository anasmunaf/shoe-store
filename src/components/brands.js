/** @format */

import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";
import Cards from "./card";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Brands = () => {
  const classes = useStyles();

  return (
    <Grid container direction='row' justifyContent='space-between' spacing={3}>
      <Grid item xs={12} md={3}>
        <Cards
          image={
            "http://cdn.shopify.com/s/files/1/1417/8980/files/Nike_large.jpg?v=1593973039"
          }
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards
          image={
            "https://jefflopilato.files.wordpress.com/2017/03/screen-shot-2017-03-26-at-7-31-10-pm.png?w=1400"
          }
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards
          image={
            "https://i.pinimg.com/originals/91/39/56/9139562d0b33e1145eaec585622c393d.jpg"
          }
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards
          image={
            "https://www.kindpng.com/picc/m/47-478098_converse-logo-converse-logo-transparent-background-hd-png.png"
          }
        />
      </Grid>
    </Grid>
  );
};

export default Brands;
