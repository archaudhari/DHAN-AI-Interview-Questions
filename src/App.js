// Here's an example code snippet to create 8 vertical divs in React with alternate black background color and unique colors for the

import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`box ${index % 2 === 0 ? "even" : "odd"}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
