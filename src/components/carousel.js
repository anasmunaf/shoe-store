/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselCard = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
      >
        <div>
          <img src='https://images.unsplash.com/photo-1601618752436-7b60b7818699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1613166945886-166350fd43b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
