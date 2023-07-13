import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Authheader from "../../../components/authheader";
import Input from "../../../components/Input";
import Separetor from "../../../components/separetor";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = ({navigation}) => {
    const onSignup = () => {
        navigation.navigate('Signup')
    }
    const onBack = () => {
        navigation.goBack()

    }
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <Authheader onBackPress={onBack} title={'Connexion'}></Authheader>
            <Input label={'Email'} placeholder={'example@gmail.com'}></Input>
            <Input isPassword label={'Password'} placeholder={'**************'}></Input>
            <Button style={styles.Button} title={'Connexion'}></Button>
            <Separetor text={'Connexion avec'}></Separetor>        
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footertext} >Don't have an account ?<Text onPress={onSignup} style={styles.footerlink}>Inscription</Text></Text>
        </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(Signin);