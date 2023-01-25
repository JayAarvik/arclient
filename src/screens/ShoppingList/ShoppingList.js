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

export default function ShoppingList({navigation}) {
  return (
    <View style={Style.background}>
      <View style={Style.contentView}>
        <View style={Style.headingIcon}>
            <Txt c="ttl" s={18} w="600" pt={2} pb={2}>Shopping List</Txt>
            <MaterialCommunityIcons size={25} color="#000" name="cart-outline"/>
        </View>
        <View style={Style.quickView}>
            <Txt c="w" w="600" s={15}>Quick Guides</Txt>
            <Txt c="w">You can easily manage and organize your grocery needs by adding the products
                 into group list that make you shop your needs faster. You can create daily, 
                 weekly, or monthly based on your need.</Txt>
        </View>
        <View style={Style.shopListView}>
            <Txt w="600" c="ttl" s={16}>Shop Lists</Txt>
            <View style={Style.borderLine}></View>
        </View>
      </View>
    </View>
  )
}