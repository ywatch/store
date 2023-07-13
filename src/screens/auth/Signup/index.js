import React, { useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import Button from "../../../components/Button";
import Authheader from "../../../components/authheader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separetor from "../../../components/separetor";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { request } from "../../../utils/request";
const Signup = ({navigation}) => {
    const[checked,setChecked]=useState(false);
    const[values,setValue]=useState({})
    const onBack = () => {
        navigation.goBack()

    }
    const onSignIn = () => {
        navigation.navigate('Signin')
    }
    const onChange = (key,value) => {
        setValue(v => ({...v,[key]:value}))
    }
    const onSubmit = () => {
        if( !values?.fullName || !values?.email || !values?.password ||  !values?.confirmPassword){
            Alert.alert('tout les champs')
            return;
            }
        if(values?.password !==  values?.confirmPassword){
                Alert.alert('password false')
                return;
                }
                request({
                    url:'/user/register',
                    method:'post',
                    data:values,
                }).then( response => {
console.log('response >>',response)
                }).catch(error => {
                    console.log(error)
                })
    }
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <Authheader onBackPress={onBack} title={'inscription'}></Authheader>
            <Input value={values.fullName} onChangeText={(v) => onChange('fullName',v)} label={'Name'} placeholder={'Name'}></Input>
            <Input value={values.email} onChangeText={(v) => onChange('email',v)} label={'Email'} placeholder={'example@gmail.com'}></Input>
            <Input value={values.password} onChangeText={(v) => onChange('password',v)} isPassword label={'Password'} placeholder={'**************'}></Input>
            <Input value={values.confirmPassword} onChangeText={(v) => onChange('confirmPassword',v)} isPassword label={'confirmPassword'} placeholder={'**************'}></Input>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeRowletter}>I agree with <Text style={styles.agreeRowtext}>Terms</Text> & <Text style={styles.agreeRowtext}>Privacy</Text></Text>
            </View>
            <Button onPress={onSubmit} style={styles.Button} title={'inscription'}></Button>
            <Separetor text={'inscription avec'}></Separetor>        
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footertext} >Already have an account ?<Text onPress={onSignIn} style={styles.footerlink}>Connexion</Text></Text>
        </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(Signup);