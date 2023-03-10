import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK } from "../../Utils/Import";
import { Platform } from "react-native";

const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff",
    flex:1
   },
   bgImage:{
    height:"100%",
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:20,
    height:"100%"
   },
   firstView:{
      paddingTop:Platform.OS == "ios" ? 50 : null,
      padding:10,
      backgroundColor:BGR,
      paddingBottom:20,
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30
   },
   searchMain:{
      flexDirection:"row",
      alignItems:"center"
   },
   searchBarStyle:{
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#fff",
      paddingHorizontal:5,
      marginRight:5,
      borderRadius:10
   },
   textInputStyle:{
      padding:5
   },
   UprIcon:{
      paddingHorizontal:5
   },
   secondView:{
    //   marginHorizontal:20
   },
   catgryView:{
      paddingHorizontal:15,
      backgroundColor:"#fff",
    //   elevation:5,
      paddingVertical:10,
      borderRadius:15
   },
   catFlatView:{
      marginHorizontal:5,
      paddingHorizontal:5
   },
   catFlatImage:{
      height:50,
      width:50,
      alignSelf:"center"
   },
   getOffView:{
      backgroundColor:BGR,
      marginTop:25,
      borderRadius:15,
      flexDirection:"row",
      justifyContent:"space-between",
      overflow:"hidden"
   },
   periodView:{
      backgroundColor: "#02424C",
      paddingVertical:5,
      borderRadius:10,
      paddingHorizontal:10,
      marginTop:5
   },
   offerInner:{
      padding:15
   },
   offerImageStyle:{
      height:120,
      width:120
   },
   seeMoreView:{
    //   marginTop:15,
    //   marginBottom:50,
   },
   textMoreInner:{
      flexDirection:"row",
      justifyContent:"space-between",
    //   alignItems:"center"
   },
   seeMoreStyle:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
   },
   itemsStyle:{
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      overflow:"hidden",
      marginLeft:20,
      marginBottom:5,
      backgroundColor:"#fff",
      marginTop:10,
   },
   itemImage:{
      height:180,
      width:170,
   },
   addCartView:{
      borderWidth:1,
      borderColor:BGRDRK,
      paddingVertical:8,
      borderRadius:5,
      marginBottom:3
   },
   moreFlatStyle:{
    alignContent:"center"
   },
   itemFlatTextView:{
      paddingHorizontal:5
   },
   borderLine:{
    height:1,
    backgroundColor:"#D3D3D3",
    marginHorizontal:10
   },
   footerStyle:{
    padding:10,
    backgroundColor:"#f1f1f1"
   }
})

export default Style;