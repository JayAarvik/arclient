import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK, BLUE } from "../../Utils/Import";
import { Platform } from "react-native";
const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff",
    flex:1,
   },
   bgImage:{
    height:300,
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:10
   },
   headingIcon:{
    paddingTop : Platform.OS == "ios" ? 50 : null,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
   },
   quickView:{
    backgroundColor:BGR,
    padding:15,
    marginTop:20,
    borderRadius:10
   },
   shopListView:{
   },
   borderLine:{
    height:1,
    backgroundColor:"#D3D3D3",
    marginVertical:5
   },
   listImageStyle:{
      height:90,
      width:90,
      borderRadius:10
   },
   listFlatView:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:5,
      backgroundColor:"#F3F8F3",
      padding:10
   },
   flatTextView:{
      paddingHorizontal:5,
      width:"88%"
   }
})

export default Style;