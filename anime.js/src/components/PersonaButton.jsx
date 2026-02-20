import { useRef } from "react";
import { animate, svg } from "animejs";

export default function PersonaButton() {
  const waveAnim = useRef(null);

  function handleMouseEnter() {
    // Fade in overlay
    animate(".wave-overlay", {
      opacity: 1,
      duration: 100,
      ease: "inOutQuad",
    });

    // If animation has been created before, just restart it
    if (waveAnim.current) {
      waveAnim.current.restart();
      return;
    }

    // Otherwise create it
    waveAnim.current = animate("#wave1", {
      d: svg.morphTo("#wave2"),
      duration: 100,
      ease: "inOutSine",
      loop: true,
      alternate: true,
      autoplay: false,  // important so we can control it
    });

    waveAnim.current.restart();
  }

  function handleMouseLeave() {
    // Only fade out overlay — no animation reset
    animate(".wave-overlay", {
      opacity: 0,
      duration: 100,
      ease: "inOutQuad",
    });
  }

  return (
    <div
      className="persona-button-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "visible",
      }}
    >
      <button className="persona-btn">Hover me</button>

      <svg
        className="wave-overlay"
        width="200%"
        height="200%"
        viewBox="0 0 1019 180"
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -3,
        }}
      >
        <path
          id="wave1"
          d="M1018.5 19L0 0L118.798 179.5L944.063 172.246L1018.5 19Z"
          fill="#FF0107"
        />

        <path
          id="wave2"
          d="M1018.5 26.5057L45.4091 0L0 179.5L871.35 161.488L1018.5 26.5057Z"
          opacity="0"
        />
      </svg>
    </div>
  );
}
