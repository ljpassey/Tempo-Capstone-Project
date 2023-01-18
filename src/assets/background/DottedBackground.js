import React from 'react'

const DottedBackground = () => {
  return (
    // <svg width="100%" height="100%">
    //   <pattern
    //     id="pattern-circles"
    //     x="0"
    //     y="0"
    //     width="50"
    //     height="50"
    //     patternUnits="userSpaceOnUse"
    //     patternContentUnits="userSpaceOnUse"
    //   >
    //     <circle
    //       id="pattern-circle"
    //       cx="10"
    //       cy="10"
    //       r="1.6257413380501518"
    //       fill="#000"
    //     ></circle>
    //   </pattern>

    //   <rect
    //     id="rect"
    //     x="0"
    //     y="0"
    //     width="100%"
    //     height="100%"
    //     fill="url(#pattern-circles)"
    //   ></rect>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 100 100"
    >
      <rect fill="#F2F2F2" width="100" height="100" />
      <rect
        x="0"
        y="0"
        width="9"
        height="9"
        fill-opacity="0.42"
        fill="#000000"
      />
    </svg>
  );
}

export default DottedBackground