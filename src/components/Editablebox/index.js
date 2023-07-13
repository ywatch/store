import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
const Editablebox = ({title,value,editable,onChangeText,style}) => {
    return(
            <View  style={[styles.container,style]}>
                <Text style={styles.titel}>{title}</Text>
                <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input}></TextInput>
            </View>
    )
}
export default React.memo(Editablebox)