/** @format */

import { Container, Typography } from "@material-ui/core";
import React from "react";
import ListItems from "./listItems";
import axios from "axios";
import { useState, useEffect } from "react";

const db = async () => {
  const response = await axios.get("http://localhost:3001/db");
  return response.data;
};

const Men = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    db().then((res) => {
      setData(res.db);
    });
  }, []);

  let women = data.filter((item) => {
    return item.productGender === "Men" ? item : null;
  });
  return (
    <Container maxWidth='xl'>
      <Typography variant={"h3"} color={"textSecondary"} align='center'>
        MENS
      </Typography>
      <ListItems data={women} />
    </Container>
  );
};

export default Men;
