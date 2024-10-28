"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";

const Review = () => {
  const params = useParams<{ productId: string; reviewId: string }>();

  if (parseInt(params.reviewId) > 10) {
    notFound();
  }

  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default Review;
