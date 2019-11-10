import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

const Like = props => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Circle cx={18} cy={18} r={17.5} fill="#fff" stroke="#EDEDED" />
    <Path
      d="M25.612 11.888a4.735 4.735 0 00-6.7 0l-.912.913-.913-.913a4.737 4.737 0 00-6.7 6.7l.913.912 6.7 6.7 6.7-6.7.912-.913a4.736 4.736 0 000-6.699z"
      fill="#C4C4C4"
    />
  </Svg>
)

export default Like
