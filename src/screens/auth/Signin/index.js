import React, { useState } from "react";
import { Image, Pressable, ScrollView,Alert, Text, View } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Authheader from "../../../components/authheader";
import Input from "../../../components/Input";
import Separetor from "../../../components/separetor";
import GoogleLogin from "../../../components/GoogleLogin";
import axios from "axios";

const Signin = ({navigation}) => {
    const[values,setValue]=useState({})
    const onSignup = () => {
        navigation.navigate('Signup')
    }
    const onBack = () => {
        navigation.goBack()

    }
    const onChange = (key,value) => {
        setValue(v => ({...v,[key]:value}))
    }
    const onSubmit = () => {
        // if( !values?.email || !values?.password ){
        //     Alert.alert('tout les champs')
        //     return;
        //     }
                return axios({
                    method:'post',
                    url: `https://fd85-41-250-193-171.ngrok-free.app/api/User/login`,
                    data:values,
                  }).then( response => {
                    navigation.navigate('Tabs')
console.log('response >>',response)
                }).catch(error => {
                    console.log(error)
                })
    }
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <Authheader onBackPress={onBack} title={'Connexion'}></Authheader>
            <Input value={values.email} onChangeText={(v) => onChange('email',v)} label={'Email'} placeholder={'example@gmail.com'}></Input>
            <Input isPassword label={'Password'} value={values.password} onChangeText={(v) => onChange('password',v)} placeholder={'**************'}></Input>
            <Button style={styles.Button} title={'Connexion'} onPress={onSubmit}></Button>
            <Separetor text={'Connexion avec'}></Separetor>        
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footertext} >Don't have an account ?<Text onPress={onSignup} style={styles.footerlink}>Inscription</Text></Text>
        </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(Signin);