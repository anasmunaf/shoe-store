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
      <Grid item xs={6} md={3}>
        <Cards
          image={
            "https://seeklogo.com/images/A/adidas-logo-49D5BEBA90-seeklogo.com.png"
          }
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Cards
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUSmI81EHqV8LUFcCrY-i3Vf2DlFOrBTpMA&usqp=CAU"
          }
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Cards
          image={
            "https://www.seekpng.com/png/detail/343-3439713_timberland-timberland-logo-png.png"
          }
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Cards
          image={
            "https://i.pinimg.com/236x/62/cb/bb/62cbbbe48876c60c2eda6f45fe03c21d--puma.jpg"
          }
        />
      </Grid>
    </Grid>
  );
};

export default Brands;
