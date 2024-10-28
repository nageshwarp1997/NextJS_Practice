"use client"

import { useParams } from "next/navigation";
import React from "react";

const Review = () => {
  const params = useParams<{ productId: string; reviewId: string }>();

  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default Review;
