/** @format */

import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";
import Cards from "./card";
const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
  },
}));
const SaleSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      className={classes.root}
      spacing={3}
    >
      <Grid item xs={12} md={3}>
        <Cards
          label={"VIONIC ALL-STARS"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1xmDzW0nt1iXbVFMpaVcO4UWBhmK9PS9WA&usqp=CAU"
          }
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards
          label={"UP TO 50% OFF SKETCHERS"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDJ00SJrUWiK6kFPaU3sbaXmkjuY7x_o6hA&usqp=CAU"
          }
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards
          label={"UP TO 40% OFF COMFFORT"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5r9HjlGc9NeC35KoBsn1CHObzjilBL7q_g&usqp=CAU"
          }
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards
          label={"UP TO 30% OFF ATHLETIC"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo34wCnMKOWdmVhsOYmA5Z94jmaSQ92OD9JkWRs_47CUmW3PR7WaJrWJmvYTp_I86Jh2o&usqp=CAU"
          }
        />
      </Grid>
    </Grid>
  );
};

export default SaleSection;
