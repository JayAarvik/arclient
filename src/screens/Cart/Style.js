import { StyleSheet, Platform } from "react-native"
import { BGC, BGR, BGRDRK, BLUE } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    paddingTop : Platform.OS == "ios" ? 50 : null, 
    backgroundColor:"#fff",
    flex:1
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
   backIconStyle:{
    padding:10,
    flexDirection:"row",
    alignItems:"center",
    elevation:1,
    backgroundColor:"#fff"
   },
   productsView:{
    backgroundColor:"#fff",
    elevation:2,
    marginVertical:5,
    padding:5
   },
   itemInnerView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:5
   },
   quantityView:{
    flexDirection:"row",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#D3D3D3",
    borderRadius:5,
    padding:5,
   },
   increStyle:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
   },
   deliveryChrgView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10
   },
   addressView:{
    backgroundColor:BGR,
    padding:10,
    marginTop:10,
    borderRadius:10
   },
   editStyle:{
    position:"absolute",
    right:0,
    padding:5
   },
   instructionView:{
    padding:10,
    marginTop:5
   },
   proceedStyle:{
    backgroundColor:BGR,
    position:"absolute",
    width:"100%",
    bottom:0,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingVertical:15,
    borderTopLeftRadius:15,
    borderTopRightRadius:15
   }
})

export default Style;