import React, { useState } from "react";
import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import Favoriteitem from "../../../components/Favoriteitem";
import Header from "../../../components/Header";
const Favorites = ({navigation}) => {
    const renderItem = ({item}) => {
        const onProductPress = () =>{
            navigation.navigate('ProductDetails',{product: item})
        }
        return(
            <Favoriteitem onPress={onProductPress} {...item} ></Favoriteitem>
        )
    }
    return(
        <SafeAreaView>
            <View>
                <Header title={'Favorites'} ></Header>
               <FlatList data={products} keyExtractor={(item)=>String(item?.id)} renderItem={renderItem} ></FlatList>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Favorites)