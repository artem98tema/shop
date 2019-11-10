import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgBack = props => (
  <Svg width={20} height={16} fill="none" {...props}>
    <Path
      d="M6.524 1.18a.706.706 0 011.008 0 .711.711 0 010 .999l-5.11 5.11h16.862a.71.71 0 110 1.42H2.421l5.11 5.102a.723.723 0 010 1.007.706.706 0 01-1.007 0l-6.32-6.32a.711.711 0 010-.997l6.32-6.32z"
      fill="#111"
    />
  </Svg>
)

export default SvgBack
