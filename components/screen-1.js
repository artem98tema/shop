
import React ,{Component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import FoneSvg from './svg';
import SvgComponent from './asd';
export default class Screen1 extends Component {
  render(){
   
    return(
      <View style={styles.container}>
      <View style = {styles.header} >
        <Image source ={require('../img/logo.png')} />
      </View>
      <View style = {styles.content}>
       
        <Image source ={require('../img/shop.png')} />
        <Text style = {styles.main__text}>Выберете категории</Text>
        
      

      </View>
    <View style = {styles.footer}></View>
    </View>
      
    )
  }
}

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    flexDirection:'column'
    },
    header:{
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      height:100,
      backgroundColor:'#FED739'
    },
    content:{
      flex:3,
      backgroundColor:'white',
      justifyContent:"center",
      alignItems:'center',
      
    },
    footer:{
      flex:1,
      backgroundColor:'#FED739'
    },
    main__text:{
      fontWeight: "bold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    color: '#111111',
    marginTop:35,
    marginBottom:25
    },
    main__load:{
      flexDirection:'row'
    }
});


