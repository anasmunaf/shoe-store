/** @format */

import { Container, Typography } from "@material-ui/core";
import React from "react";
import ListItems from "./listItems";
import axios from "axios";
import { useState, useEffect } from "react";
import { db } from "../db/product";

// const db = async () => {
//   const response = await axios.get("http://localhost:3001/db");
//   return response.data;
// };

const Kids = () => {
  //   let [data, setData] = useState([]);
  //   useEffect(() => {
  //     db().then((res) => {
  //       setData(res.db);
  //     });
  //   }, []);

  let kids = db.filter((item) => {
    return item.productGender === "kids" ? item : null;
  });
  return (
    <Container maxWidth='xl'>
      <Typography variant={"h3"} color={"textSecondary"} align='center'>
        KIDS
      </Typography>
      <ListItems data={kids} />
    </Container>
  );
};

export default Kids;
