import * as React from "react"
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    x={0}
    y={0}
    width={props.size || 24}
    height={props.size || 24}
    style={{
      opacity: 1,
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M0 16h512v80H0zM0 216.008h512v79.984H0zM0 416h512v80H0z"
    />
  </svg>
)
export default SvgComponent
