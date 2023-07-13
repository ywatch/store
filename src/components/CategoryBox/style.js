import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
 export const styles =StyleSheet.create({
  container: {
    marginTop:8,
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    padding:15,
  },
  title: {
    color:colors.black,
  },
   image:{
    width: 32,
    height: 32,
   },
   imageContainer:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,

   }
 })