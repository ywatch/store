import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
        container:{
            padding: 24,
            backgroundColor: 'white',
        },
        agreeRow:{
            flexDirection: 'row',
            alignItems: 'center'
        },
        agreeRowletter:{
            color:colors.blue,
            marginHorizontal:14,
        },
        agreeRowtext:{
            fontWeight: 'bold',
        },
        Button:{
            marginVertical:20,
        },
        footertext:{
            color: colors.blue,
            marginBottom:56,
            textAlign: 'center'
        },
        footerlink:{
            fontWeight: 'bold',
        }
})