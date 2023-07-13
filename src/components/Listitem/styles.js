import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
const {height} = Dimensions.get('window');
 export const styles =StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor:colors.white,
        marginVertical:12,
    },
    titel:{
        color:colors.blue,
        fontSize:18,
        fontWeight:'bold',
        marginTop:6,
    },
    subtitel:{
        fontSize:12,
    },
    image:{
        width:20,
        height:20,
    },
 })