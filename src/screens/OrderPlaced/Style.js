import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK, BLUE } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff",
    flex:1,
    justifyContent:"center",
    alignItems:"center"
   },
   bgImage:{
    height:300,
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:20
   },
   borderLine:{
    height:1,
    backgroundColor:"#D3D3D3",
    marginVertical:5
   },
   backView:{
    borderWidth:1,
    padding:5,
    marginTop:50,
    borderRadius:10,
    borderColor:BGR
   }
})

export default Style;