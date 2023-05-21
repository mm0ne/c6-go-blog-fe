import react from "react";

export default function Loader({fullscreen}){
  return (
    <div
      className={
        "flex items-center justify-center " +
        (fullscreen && "h-screen w-screen")
      }
      style={
        fullscreen
          ? {}
          : {
              height: height + "px",
            }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#29404D"
          strokeWidth="7"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};