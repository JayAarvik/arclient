import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    TextInput,
    FlatList,
    Image,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGR, BGRDRK, BLUE, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';

export default function OrderPlaced({navigation}) {
    const goToHome = () => {
        navigation.navigate("Tabs");
    }
  return (
    <View style={Style.background}>
    <MaterialCommunityIcons size={200} color={BGR} name="check-circle" />
    <Txt c="bgr" s={25} pt={10} w="500">
        Order Placed
    </Txt>
    <TouchableOpacity style={Style.backView} onPress={() => goToHome()}>
        <Txt c="bgr">Back</Txt>
    </TouchableOpacity>
    </View>
  )
}
