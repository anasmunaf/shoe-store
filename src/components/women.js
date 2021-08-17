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

const Women = () => {
  //   let [data, setData] = useState([]);
  //   useEffect(() => {
  //     db().then((res) => {
  //       setData(res.db);
  //     });
  //   }, []);
  let women = db.filter((item) => {
    return item.productGender === "Women" ? item : null;
  });
  return (
    <Container maxWidth='xl'>
      <Typography variant={"h3"} color={"textSecondary"} align='center'>
        Women
      </Typography>
      <ListItems data={women} />
    </Container>
  );
};

export default Women;
