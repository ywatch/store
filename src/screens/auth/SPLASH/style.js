import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        image:{
            width: '100%',
            height: 200,
        },
        title:{
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
        },
        innertitle: {
            color: '#FCA34D',
            textDecorationLine: 'underline'
        },
        container:{
            padding: 24,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'white',
        },
        footertext: {
            color: '#4F63AC',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 30,
            
        },
        titleContainer: {
            marginVertical: 54,

        }


})