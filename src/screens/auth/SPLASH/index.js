import React, { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import Button from "../../../components/Button";
import { UserContext } from "../../../../App";
const Splash = ({navigation}) => {
    const Signup = () => {
        navigation.navigate('Signup')
    }
    const Signin = () => {
        navigation.navigate('Signin')
    }
    return(
        <View style={styles.container}>
        <Image resizeMode="contain"  style={styles.image} source={require("../../../assets/splash_image.png")}/>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>you'll find </Text> 
        <Text style={[styles.title,styles.innertitle]}>all you need</Text> 
        <Text style={styles.title}>here!</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row'}}>
        <Button title="inscription" onPress={Signup} ></Button>
        </View  >
            <Pressable onPress={Signin} hitSlop={20}>
            <Text style={styles.footertext}>connexion</Text>
        </Pressable>
        </View>
    )
}
export default React.memo(Splash);