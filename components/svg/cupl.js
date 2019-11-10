import React from 'react'
import Svg, { Path } from 'react-native-svg'
import {Text} from 'react-native'

const Cupl = props => (
  <Svg width={10} height={12} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12s5-3.273 5-7.09c0-1.303-.527-2.552-1.464-3.472A5.047 5.047 0 005 0a5.047 5.047 0 00-3.536 1.438A4.864 4.864 0 000 4.909C0 8.727 5 12 5 12zm1.905-6.935c0 1.033-.853 1.87-1.905 1.87s-1.905-.837-1.905-1.87c0-1.033.853-1.87 1.905-1.87s1.905.837 1.905 1.87z"
      fill="#C4C4C4"
    />
    
  </Svg>
)

export default Cupl
