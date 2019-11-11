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
import Dress from'./svg/dres';


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
                        <View >
                            <Image style={styles.main__image} 
                                source ={require('../img/imag.png')}/>
                        </View>
                            <View style = {styles.main__info}>
                                <Text style = {styles.info__text}>Mango
                                </Text>
                                <Dress style ={styles.dres}/>
                                <Text style = {styles.text_inf}>Одежда, обувь, аксессуры</Text>
                            </View>
                   </View>
                   <View style ={styles.main__content}>
                        <View style = {styles.main__buttons}>
                            <View style = {styles.button__logo}>
                                <Image style ={styles.logo__image} source={require('../img/1212.png')}/>
                                <Talk/>
                            </View>
                            <View style = {styles.button__like}>
                                <TouchableOpacity onPress ={this.onLabelClick}>
                                    <Like/>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Share style={styles.share__svg}/>
                                </TouchableOpacity>
                           </View>
                           
                        </View>
                        <View style = {styles.date}>
                            <View style = {styles.date__where}>
                                <Cupl/>
                                <Text> Москва</Text>
                            </View>
                            <View style = {styles.date__when}>
                                <Text>14 октября - 21 ноября</Text>
                                <Renc style = {{marginLeft:10}}/>
                                {/* <Renc style={{marginLeft:15}} /> */}
                            </View>
                        </View>
                        
                        <View style = {styles.description}>
                            <ScrollView>
                                <Text style ={styles.description__title}>Скидка на пылесосы</Text>
                                <Text style ={styles.description__titleAfter}>При покупке 2 пылесосов 3 в подарок</Text>
                            
                                <Text style ={styles.description__text}>
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
   date__where:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
   },
   date__when:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:13
   },
   date:{
    flex:1,
    flexDirection:'column',
    borderColor:'#EDEDED',
    borderBottomWidth:1,
    marginLeft:15,
    marginRight:15
   },
   description__text:{
    fontSize:18,
   },
   description__titleAfter:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10
   },
   text_inf:{
    flexDirection:'row',
    textAlignVertical:'center',
    justifyContent:'center',
    alignItems:'center',
    flex:3,
   },
   dres:{
    marginRight:5,
    marginTop:14
   },
   description__title:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:2
   },
   description:{
    flex:5,
    flexDirection:'column',
    marginLeft:15,
    marginRight:15,
    marginTop:5
   },
   share__svg:{
    marginLeft:15
   },
   logo__image:{
    marginRight:10
   },
   button__logo:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    
   },
   button__like:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:15
   },
   main__buttons:{
    flex:1,
    flexDirection:'row',
    borderColor:'#EDEDED',
    marginTop:17,
    borderBottomWidth:1,
    marginLeft:15,
    marginRight:15
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
        resizeMode: "stretch",
        width:'100%',
        height:175
    },
    main__info:{
        backgroundColor:'#F7F7F7',
        height:40,
        flexDirection:'row'
        
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
    },
    main:{
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
        borderRadius:10
    },
    
})