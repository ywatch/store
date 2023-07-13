import React from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Checkbox =({checked, onCheck}) => {
  return(
    <TouchableOpacity activeOpacity={0.6}  style={styles.container} onPress={() => onCheck(!checked)}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.checkIcon} source={require('../../assets/check.png')}></Image>
        </View>
      ): null}

    </TouchableOpacity>
  )
}
export default React.memo(Checkbox);