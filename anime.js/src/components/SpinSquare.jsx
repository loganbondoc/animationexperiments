// import { animate, svg, utils } from 'animejs';
// import { useEffect } from 'react';

// export default function SpinSquare() {
    
//   const square = document.querySelector('#spin-square');

//   useEffect(() => {
//         animate("#spin-square", {
//             rotate: 360,
//             duration: 1000,
//             easing: "easeInOutQuad",
//             loop: true,
//         });
//     }, []);
  
//   return (
//         <div>
//             <div id="spin-square" style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         </div>
//     )
// }


import { useEffect } from "react";
import { animate, svg } from "animejs";

export default function SpinSquare() {
  useEffect(() => {
    const path1 = document.querySelector("#path-start");
    const path2 = document.querySelector("#path-end");

    if (!path1 || !path2) return;

    animate(path1, {
      d: svg.morphTo(path2), // THIS morphs the actual path
      duration: 3000,
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div>
      <svg width="400" height="200" viewBox="0 0 400 200">
        {/* Start Shape */}
        <path
          id="path-start"
          d="M10 10 L390 10 L200 190 Z"
          fill="#FF0107"
        />

        {/* End Shape (will NOT display, just used to read the path data) */}
        <path
          id="path-end"
          d="M200 10 C350 50, 350 150, 200 190 C50 150, 50 50, 200 10 Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </div>
  );
}
