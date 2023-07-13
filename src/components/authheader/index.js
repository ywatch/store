import React from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Authheader = ({title, onBackPress}) => {
  return(
   <View style={styles.container}>
    <Pressable onPress={onBackPress}>
        <Image style={styles.image} source={require('../../assets/auth_back.png')} />
    </Pressable>
    <Text style={styles.title}>{title}</Text>
   </View>
  )
}
export default React.memo(Authheader);