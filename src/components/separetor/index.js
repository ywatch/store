import React from "react";
import { Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Separetor =({text}) => {
  return(
    <View style={styles.container} >
      <View style={styles.line} />
      <Text style={styles.Text}>{text}</Text>
      <View style={styles.line} />
    </View>
  )
}
export default Separetor;