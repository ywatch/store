import React, { useState } from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import Listitem from "../../../components/Listitem";
import Editablebox from "../../../components/Editablebox";
import Button from "../../../components/Button";
const Settings = ({navigation}) => {
    const onItemPress = () => {
        Linking.openURL('https://reactnative.dev/docs/environment-setup')
    }
    const [editing,setEditing]=useState(false);
    const [values,setvalues]=useState({name:'User',email:'user@mail.com'});
    const onEditPress = () =>{
        setEditing(true);
    }
    const onSave = () => {
        setEditing(false)
    }
    const onChange = (key,value) =>{
        setvalues(v =>({...v,[key]:value}))
    }
    const goback = () => {
        navigation.goBack()
    }
    return(
        <SafeAreaView>
            <Header showBack onBackPress={goback}title={'Settings'} ></Header>
            <ScrollView style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.sectionfile}>Personal Information</Text>
                <Pressable onPress={onEditPress}>
                    <Image style={styles.icon} source={require('../../../assets/edit.png')} ></Image>
                </Pressable>    
            </View>
            <Editablebox title={'Name'} onChangeText={(v)=>onChange('name',v)} value={values.name} editable={editing} ></Editablebox>
            <Editablebox title={'Email'} onChangeText={(v)=>onChange('email',v)} value={values.email} editable={editing} ></Editablebox>
            {editing ? (
                    <Button style={styles.b} onPress={onSave} title={'save'}></Button>
                ):null}
            <Text style={[styles.sectionfile,{marginTop:20}]}>Help Center</Text>
            <Listitem onPress={onItemPress} style={styles.item} title={'FAQ'}></Listitem>
            <Listitem onPress={onItemPress} style={styles.item} title={'Contact US'}></Listitem>
            <Listitem onPress={onItemPress} style={styles.item} title={'Privacy & Terms'}></Listitem>
            </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(Settings)