import { useEffect } from 'react';
import { animate, remove, svg } from 'animejs';


export default function PersonaButton() {
  // useEffect means that the code will run after the component is mounted
  useEffect(() => {
    const outline1 = document.querySelector('#outline1');
    const outline2 = document.querySelector('#outline2');

    animate("#outline1 path", {
      d: svg.morphTo("#outline2 path"),
      duration: 30000,
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div>
      <svg id="outline1" width="1019" height="180" viewBox="0 0 1019 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1018.5 19L0 0L118.798 179.5L944.063 172.246L1018.5 19Z" fill="#FF0107" />
      </svg>

      <svg id="outline2" width="859" height="183" viewBox="0 0 859 183" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M858.266 27L38.2656 0L0.000488281 182.848L734.266 164.5L858.266 27Z" fill="#FF0107" style={{ display: "none" }} />
      </svg>


      <h1>Experiment</h1>
    </div>
  );
}