import React, { useState } from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import Input from "../Input";

const ProductHomeItem = ({title,price,image,onPress }) => {

  return(
    <Pressable onPress={onPress} style={styles.container} >
        <Image style={styles.image} source={{uri:image}}/>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.price}>{price}</Text>
      </Pressable>
    )
}
export default React.memo(ProductHomeItem);