import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

const Share = props => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Circle cx={18} cy={18} r={17.5} fill="#fff" stroke="#EDEDED" />
    <Path
      d="M20 14.5v-4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"
      fill="#C4C4C4"
    />
  </Svg>
)

export default Share
