import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK, BLUE } from "../../Utils/Import";

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
    padding:20
   },
   headingIcon:{
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
    marginTop:20
   },
   borderLine:{
    height:1,
    backgroundColor:"#DCDCDC",
   }
})

export default Style;