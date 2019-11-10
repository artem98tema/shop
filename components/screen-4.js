import React ,{Component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import SvgBack from './back';
// import Like from './svg/like';
import Share from './svg/share';
import Talk from './svg/talkbuble';
import Renc from './svg/renc';
import Cupl from './svg/cupl';

import Svg, { Circle, Path } from 'react-native-svg'
export default class Stocks extends Component{
constructor(){
    super();
    this.state ={
        
        done:false
        
    }
}
onLabelClick=()=>{
this.setState((state)=>{
    return {done: !state.done}
})
}



    render(){
      
        const {done} = this.state;
        this.currentColor= "yellow";
        if(done){
            
            this.currentColor= "yellow"
         } else{
            
            this.currentColor = "#C4C4C4"
         }
        const Like = props => (
            <Svg  width={36} height={36} fill="none" {...props}>
              <Circle cx={18} cy={18} r={17.5} fill="#fff" stroke="#EDEDED" />
              <Path 
                d="M25.612 11.888a4.735 4.735 0 00-6.7 0l-.912.913-.913-.913a4.737 4.737 0 00-6.7 6.7l.913.912 6.7 6.7 6.7-6.7.912-.913a4.736 4.736 0 000-6.699z"
                fill={this.currentColor}
              />
            </Svg>
          )
         
        return(
            <View style ={styles.container}>
                <View style = {styles.header}>
                <TouchableOpacity style  = {styles.header__img}>
                      <SvgBack/>
                      
                      </TouchableOpacity>
               
                    <Text style = {styles.header__title}>Акции</Text>
                      
                </View>
                <View style = {styles.main}>
                    <View style={styles.content}>
                        <View style = {styles.main__image}>
                            <Image style={{
                                resizeMode: "stretch",width:'100%',height:175}} 
                                source ={require('../img/imag.png')}/>
                        </View>
                            <View style = {styles.main__info}>
                                <Text style = {styles.info__text}>Mango
                                    <Text>Одежда, обувь, аксессуры</Text>
                                </Text>
                            </View>
                   </View>
                   <View style ={styles.main__content}>
                        <View style = {{flex:1,flexDirection:'row',borderColor:'#EDEDED',marginTop:17,borderBottomWidth:1,marginLeft:15,marginRight:15}}>
                            <View style = {{flex:1,flexDirection:'row',justifyContent:'flex-start',marginLeft:15}}><Image style ={{marginRight:10}} source={require('../img/1212.png')}/>
                            <Talk/></View>
                            <View style = {{flex:1,flexDirection:'row',justifyContent:'flex-end',marginRight:15}}><TouchableOpacity onPress ={this.onLabelClick}><Like/></TouchableOpacity>
                           <TouchableOpacity ><Share style={{marginLeft:15}}/></TouchableOpacity></View>
                           
                        </View>
                        <View style = {{flex:1,flexDirection:'column',borderColor:'#EDEDED',borderBottomWidth:1,marginLeft:15,marginRight:15}}>
                            <View style = {{flex:1,flexDirection:'row',alignItems:'center'}}><Cupl/><Text> Москва</Text></View>
                            <View style = {{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text>14 октября - 21 ноября</Text>
                                {/* <Renc style={{marginLeft:15}} /> */}
                            </View>
                        </View>
                        
                        <View style = {{flex:5,flexDirection:'column',marginLeft:15,marginRight:15,marginTop:5}}>
                        <ScrollView>
                            <Text style ={{fontSize:25,fontWeight:'bold',marginBottom:2}}>Скидка на пылесосы</Text>
                            <Text style ={{fontSize:18,fontWeight:'bold',marginBottom:2,}}>При покупке 2 пылесосов 3 в подарок</Text>
                            
                            <Text style ={{fontSize:18,marginBottom:2,}}>Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                                Скидка на пылесосы в течение 1 недели!Скидка на пылесосы в течение 1 недели!
                            </Text>
                            </ScrollView>
                        </View>
                         
                   </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
   btn:{
    color:"yellow"
   },
    container:{
        flex:1
    },
    content:{
        flex:1,
        
    },
    main__content:{
        backgroundColor:'#FFFFFF',
        flex:2,
        
    },
    main:{
        borderRadius:10
    },
    main__image:{
        
    },
    main__info:{
        backgroundColor:'#F7F7F7',
        height:40,
        
    },
    info__text:{
        fontSize: 15,
        fontWeight:'bold',
        textAlignVertical:'center',
        flex:1,
        marginLeft:15
    },
    header:{
        backgroundColor:'#FED739',
        height:60,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1
        
    },
    header__img:{
        right:"186%",
    },
    header__title:{
        fontSize: 30,
    fontWeight:'bold', 
    },main:{
        flex:9,
        backgroundColor:'#878787',
        margin:15,
        borderWidth:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderColor: '#ddd',
        
    },
    
})