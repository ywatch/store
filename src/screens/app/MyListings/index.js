import React, { useState } from "react";
import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import Favoriteitem from "../../../components/Favoriteitem";
import Header from "../../../components/Header";
const MyListings = ({navigation}) => {
    const renderItem = ({item}) => {
        const onProductPress = () =>{
            navigation.navigate('ProductDetails',{product: item})
        }
        return(
            <Favoriteitem icon={require('../../../assets/delete.png')}  onPress={onProductPress} {...item} ></Favoriteitem>
        )
    }
    const goback = () => {
        navigation.goBack()
    }
    return(
        <SafeAreaView>
            <View>
                <Header showBack onBackPress={goback} title={'My Listings'} ></Header>
               <FlatList data={products} keyExtractor={(item)=>String(item?.id)} renderItem={renderItem} ></FlatList>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(MyListings)