/** @format */

import React from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Cards from "./card";
import CarouselCard from "./carousel";
import { makeStyles } from "@material-ui/core/styles";
import Category from "./category";
import SaleSection from "./saleSection";
import Brands from "./brands";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' alignItems='center' spacing={7}>
        <Grid item xs={12} md={7}>
          <CarouselCard />
        </Grid>
        <Grid container item xs={12} md={8} alignItems='stretch'>
          <Category />
        </Grid>
        <Grid container item xs={12} md={8}>
          <SaleSection />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant={"h5"} style={{ fontWeight: "bolder" }}>
            Shop Our Top Brands
          </Typography>
        </Grid>
        <Grid container item xs={12} md={8}>
          <Brands />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
