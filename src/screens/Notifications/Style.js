import { StyleSheet, Platform } from "react-native"
import { LGR } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    paddingTop : Platform.OS == "ios" ? 50 : null, 
    flex:1,
    backgroundColor:"#fff"
   },
   bgImage:{
    height:200,
    width:300,
    resizeMode:"cover",
    marginTop:20,
    alignSelf:"center"
   },
   contentView:{
    padding:10,
    height:"95%"
   },
   headerView:{
    flexDirection:"row",
    alignItems:"center",
   },
   renderFlatView:{
      marginVertical:5,
      flexDirection:"row",
      alignItems:"center"
   },
   imgStyle:{
      height:70,
      width:70,
      borderRadius:50
   }
})

export default Style;