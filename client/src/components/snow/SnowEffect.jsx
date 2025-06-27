// import React, { useEffect, useState } from "react";

// const SnowEffect = () => {
//   const [flakes, setFlakes] = useState([]);

//   useEffect(() => {
//     const count = 50; // increase snowflakes count
//     const newFlakes = Array.from({ length: count }, (_, i) => {
//       const size = Math.floor(Math.random() * 8 + 4); // 4px - 12px
//       const duration = Math.random() * 10 + 5; // 5s to 15s
//       const delay = Math.random() * 10; // 0s to 10s
//       const left = Math.random() * 100;

//       return (
//         <div
//           key={i}
//           className="absolute snowflake"
//           style={{
//             width: `${size}px`,
//             height: `${size}px`,
//             left: `${left}%`,
//             animationDuration: `${duration}s`,
//             animationDelay: `${delay}s`,
//             backgroundColor: "white",
//             opacity: 0.8,
//             borderRadius: "50%",
//             top: "-10px",
//           }}
//         />
//       );
//     });

//     setFlakes(newFlakes);
//   }, []);

//   return (
//     <>
//       <div className="snowflakes absolute inset-0 w-full h-full pointer-events-none z-30 overflow-hidden">
//         {flakes}
//       </div>

//       <style>{`
//         @keyframes snowfall {
//           0% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100vh);
//             opacity: 0;
//           }
//         }

//         .snowflake {
//           animation-name: snowfall;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//           position: absolute;
//         }
//       `}</style>
//     </>
//   );
// };

// export default SnowEffect;

// components/SnowEffect.jsx
import React from "react";
import Snowfall from "react-snowfall";

const SnowEffect = () => {
  return (
    <Snowfall
      color="white"
      snowflakeCount={150}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 5,
        pointerEvents: "none",
      }}
    />
  );
};

export default SnowEffect;
