import React from 'react'
import Svg, { Path } from 'react-native-svg'
import {Text} from 'react-native'



const Renc = props => (
  <Svg width={63} height={24} fill="none" {...props}>
      <Text>Не началось</Text>
    <Path
      d="M4.615 17a5 5 0 005 5H55a5 5 0 005-5V7a5 5 0 00-5-5H9.615a5 5 0 00-5 5c0 1.545-.831 2.97-2.176 3.73L0 12.108l2.396 1.242A4.111 4.111 0 014.616 17z"
      fill="#EDEDED"
    />
  </Svg>
)



  export default Renc


