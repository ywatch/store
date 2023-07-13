import React, { useState } from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import Input from "../Input";

const Favoriteitem = ({title,price,image,icon,onPress }) => {

  return(
    <Pressable onPress={onPress} style={styles.container} >
        <Image style={styles.image} source={{uri:image}}/>
        <View style={styles.content}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.price}>{price}</Text>
       </View>       
       <Image style={styles.icon} source={icon || require('../../assets/tabs/close.png')}/>
      </Pressable>
    )
}
export default React.memo(Favoriteitem);