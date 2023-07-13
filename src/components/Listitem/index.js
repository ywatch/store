import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
const Listitem = ({title,subtitle,onPress,style}) => {
    return(
        
            <Pressable onPress={onPress} style={[styles.container,style]}>
            <View style={styles.content}>
                <Text style={styles.titel}>{title}</Text>
                <Text style={styles.subtitel}>{subtitle}</Text>
            </View>
            <Image style={styles.image} source={require('../../assets/arrow.png')} />
            </Pressable>
    )
}
export default React.memo(Listitem)