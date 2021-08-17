/** @format */

import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Tile from "./tiles";

const ListItems = (props) => {
  return (
    <div>
      <Grid container item spacing={6}>
        {props.data.map((item) => {
          return (
            <Grid item md={4} xs={12} sm={6}>
              <Tile
                url={item.productImageUrl}
                name={item.productName}
                price={item.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ListItems;
