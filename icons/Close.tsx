import * as React from "react"
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={props.size || 24}
    height={props.size || 24}
    style={{
      opacity: 1,
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M512 52.535 459.467.002l-203.465 203.46L52.538.002 0 52.535l203.47 203.47L0 459.465l52.533 52.533 203.469-203.471 203.465 203.471L512 459.475l-203.464-203.47z"
    />
  </svg>
)
export default SvgComponent
