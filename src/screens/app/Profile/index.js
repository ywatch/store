import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import Listitem from "../../../components/Listitem";
import Button from "../../../components/Button";
const ProductDetails = ({navigation}) => {
    const num = 10;
    const onLogout = () => {
    }
    const onSettingsPress = () => {
        navigation.navigate('Settings');
    }
    const onlisstingPress = () => {
        navigation.navigate('CreateListing');
    }
    const onMyListingsPress = () => {
        navigation.navigate('MyListings');
    }
    
    return(
        <SafeAreaView> 
            <Header  title={'profile'} ShowLogout onLogout={onLogout} ></Header>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>
                    <Listitem onPress={onMyListingsPress}  title={'My Listing'} style={styles.item} subtitle={`you have ${num} listing`}></Listitem>
                    <Listitem onPress={onSettingsPress} style={styles.item} title={'Settings'} subtitle={`Account,FAQ,Contact`}></Listitem>
                </View>
                <Button onPress={onlisstingPress} style={styles.b}  title='ajouter nouveau listing'></Button>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(ProductDetails)