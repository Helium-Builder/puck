import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const scrollVid6 = [
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_031.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_032.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_033.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_034.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_035.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_036.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_037.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_038.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_039.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_040.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_041.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_042.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_043.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_044.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_045.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_046.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_047.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_048.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_049.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_050.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_051.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_052.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
];

const SECTION_ONE = [
  {
    title: "Set the standard high",
    text: "",
  },
  {
    title: "Origin's stainless steel body",
    text: "and precise contour cut redefine the standard for style and sophistication, ensuring that every glance leaves a lasting impression.",
  },
  {
    title: "Stainless steel",
    text: "renowned for its durability and timeless elegance, forms the sturdy framework of this exquisite timepiece.",
  },
  {
    title: "Contour cut",
    text: "placed to accentuate the dial's silhouette, adding depth and dimension to its overall appearance.",
  },
  {
    title: "Rotatable crown ",
    text: "embodies both functionality and elegance. Its smooth rotation offers a satisfying tactile experience.",
  },
];
const WatchScrollComponent = () => {
  return (
    <div>
      <h1 className="text-xl">Below is a fading animation</h1>
      <ScrollAnimation animateIn="fadeIn">Some text</ScrollAnimation>
      <p>Hello </p>
    </div>
  );
};

export const WatchScrollConfig = {
  render: WatchScrollComponent,
};

export default WatchScrollComponent;
