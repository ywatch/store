import React, { useState } from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import ImageCarousel from "../../../components/ImageCarousel";
const ProductDetails = ({navigation,route}) => {
    const {product} = route?.params || {};
    const onBackPress = () => {
        navigation.goBack();
    }
    const onContact = () => {
        // call a phone
        const tel = '0762549577' 
        Linking.openURL(`tel:${tel}`);
        // send email
        const mail = 'abdomendoubi@gmail.com' 
        Linking.openURL(`mailto:${mail}`);
    }
    return(
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} ></ImageCarousel>
                ):(
                <Image style={styles.image} source={{uri: product?.image}} ></Image>
                )}<View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.price}>{product?.price}</Text>
                <Text stylte={styles.description}>{product?.description}</Text>
                </View>   
                <Pressable onPress={onBackPress} style={styles.backmark}>
                    <Image  style={styles.backmarkic} source={require('../../../assets/back.png')}></Image>
                </Pressable>        
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmark}>
                    <Image  style={styles.bookmarkic} source={require('../../../assets/tabs/bookmark_blue.png')}></Image>
                </Pressable>
                <Button onPress={onContact} title="contacter vendeur" ></Button>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(ProductDetails)