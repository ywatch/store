import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
const {height} = Dimensions.get('window');
 export const styles =StyleSheet.create({
 safe: {
flex:1,
backgroundColor:colors.white,
    },
    container:{

    },
    backmark:{
        backgroundColor:colors.white,
        padding: 18,
        margin:24,
        borderRadius: 8,
        marginRight:16,
        position:'absolute'
    },
    backmarkic:{
width:20,
height:20,
    },
    bookmark:{
backgroundColor:colors.white,
padding: 8,
borderRadius:8,
marginRight:16,
    },
    bookmarkic:{
width: 32,
height:32,
marginTop:9,
    },
    footer:{
padding:24,
flexDirection:'row'
    },
  image: {
    width: '100%',
    height: height*0.45,
},
content: {
    backgroundColor: colors.white,
    borderTopLeftRadius:16,
    borderTopRightRadius: 16 ,
    marginTop: -40,
    paddingHorizontal:24,
},
title: {
    color:colors.black,
    marginTop: 40 ,
    fontSize: 24 , 
    fontWeight:'500',
},
price:{  
    color:colors.black,
    fontSize: 24 , 
    fontWeight:'bold',
    marginVertical:8,
},
description:{
    fontWeight:'300',
    marginVertical:8,
    color:colors.black,
}
 })