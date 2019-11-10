// import React,{Component} from 'react';
// import {StyleSheet,View,Text} from 'react-native';


// export default class Talk extends Component {
//     render(){
//         return(
//             <View style={styles.talkBubble}>
//                 <View style={styles.talkBubbleSquare} />
//                 <View style={styles.talkBubbleTriangle} />
//                 <Text style={{color:'yellow',top:-28,left:20,fontWeight:'bold'}}>1000</Text>
//             </View>
//         )
//     }
// }
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import {StyleSheet,View,Text} from 'react-native';

const Talk = props => (
  <Svg width={80} height={36} fill="none" {...props}>
      <Text style={{color:'yellow',top:8,left:20,fontWeight:'bold'}}>-1000р</Text>
    <Path
      d="M7.154 31a4 4 0 004 4H75a4 4 0 004-4V5a4 4 0 00-4-4H11.154a4 4 0 00-4 4v6.026a6 6 0 01-2.361 4.77L1.694 18.16l2.9 2.028a6 6 0 012.56 4.916V31z"
      fill="#111"
      stroke="#111"
      strokeWidth={2}
    />
  </Svg>
)

export default Talk

// const styles = StyleSheet.create({
//     talkBubble: {
//         backgroundColor: 'transparent'
//       },
//       talkBubbleSquare: {
//         width: 80,
//         height: 36,
//         backgroundColor: 'black',
//         borderRadius: 10
//       },
//       talkBubbleTriangle: {
//         position: 'absolute',
//         left: -10,
//         top: 6,
//         width: 0,
//         height: 0,
//         borderTopColor: 'transparent',
//         borderTopWidth: 13,
//         borderRightWidth: 26,
//         borderRightColor: 'black',
//         borderBottomWidth: 13,
//         borderBottomColor: 'transparent'
//       }
// })