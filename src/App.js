// Here's an example code snippet to create 8 vertical divs in React with alternate black background color and unique colors for the

// import React from "react";
// import "./style.css";

// export default function App() {
//   return (
//     <div className="container">
//       {[...Array(8)].map((_, index) => (
//         <div
//           key={index}
//           className={`box ${index % 2 === 0 ? "even" : "odd"}`}
//         >
//           {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// }
// Here's an example code snippet that changes the background colors of the divs on button click:
// import React, { useState } from 'react';
// import './style.css'; // Importing the stylesheet

// function App() {
//   const [boxColors, setBoxColors] = useState([
//     '#ffcc00',
//     'purple',
//     'pink',
//     'red',
//     '#00bfff',
//     '#32cd32',
//     '#ffb6c1',
//     'black',
//   ]);

//   const shuffleColors = () => {
//     setBoxColors((prevColors) => {
//       // Create a copy of the previous colors array
//       const newColors = [...prevColors];

//       // Shuffle the colors using Fisher-Yates algorithm
//       for (let i = newColors.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [newColors[i], newColors[j]] = [newColors[j], newColors[i]];
//       }

//       // Return the shuffled colors array
//       return newColors;
//     });
//   };

//   return (
//     <div className="container">
//       <button onClick={shuffleColors}>Shuffle Colors</button>
//       {/* Looping through the boxColors state array */}
//       {boxColors.map((color, i) => (
//         <div className={`box ${color === 'black' ? 'black' : ''}`} key={i}>
//           {i + 1}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// Here's an example code snippet that adds a "Save Colors" button to the previous example:
import React, { useState } from 'react';
import './style.css'; // Importing the stylesheet

function App() {
  const [boxColors, setBoxColors] = useState([
    '#ffcc00',
    'purple',
    'pink',
    'red',
    '#00bfff',
    '#32cd32',
    '#ffb6c1',
    'black',
  ]);

  const shuffleColors = () => {
    setBoxColors((prevColors) => {
      // Create a copy of the previous colors array
      const newColors = [...prevColors];

      // Shuffle the colors using Fisher-Yates algorithm
      for (let i = newColors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newColors[i], newColors[j]] = [newColors[j], newColors[i]];
      }

      // Return the shuffled colors array
      return newColors;
    });
  };

  const saveColors = () => {
    // TODO: Implement save functionality
    console.log('Colors saved:', boxColors);
  };

  return (
    <div className="container">
      <button onClick={shuffleColors}>Shuffle Colors</button>
      <button onClick={saveColors}>Save Colors</button>
      {/* Looping through the boxColors state array */}
      {boxColors.map((color, i) => (
        <div className={`box ${color === 'black' ? 'black' : ''}`} key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default App;



