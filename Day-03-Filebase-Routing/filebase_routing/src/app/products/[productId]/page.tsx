"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  return <div>Product Details {productId}</div>;
};

export default ProductDetails;
