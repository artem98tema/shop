/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  AppRegistry
} from 'react-native';
import Swiper from 'react-native-swiper';
import Screen1 from './components/screen-1';
import Screen2 from './components/screen-2';
import Screen3 from './components/screen-3';
import Stocks from './components/screen-4';
import Screen from './components/scren';
import Scr from './components/scr';



export default class App extends Component {
  render() {
    return (
      <View  style={styles.container}>
        <Swiper 
        showsPagination ={false}
        // dot={<View style={{backgroundColor: '#FED739', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        //  style={styles.wrapper}
        //  activeDot={<View style={{backgroundColor: '#EDEDED', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        //  paginationStyle={{
        //   bottom: '40%'
        // }}
          loop={false}>
        <Screen1/>
        <Screen2/>
        <Screen3/>
        <Stocks/>
        <Screen/>
        <Scr/>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  flexDirection:'column'
  },
  wrapper: {
    
  },})
  AppRegistry.registerComponent('shopzila', () => SwiperComponent);