import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
const {height} = Dimensions.get('window');
 export const styles =StyleSheet.create({
    container: {
        paddingHorizontal:16,
        paddingVertical:8,
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
        borderRadius:4,
    },
    titel:{
        fontSize:12,
        fontWeight:'bold',
    },
  input:{
        color:colors.blue,
        fontSize:14,
        fontWeight:'500',
  }
 })