import { StyleSheet } from "react-native"; 
import Constants from "expo-constants";

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:30,
        paddingTop: Constants.statusBarHeight+40,    
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
        fontSize:15,
        color:'#737380',
    }
})