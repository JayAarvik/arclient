import { View, Text, ImageBackground, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native'
import React from 'react'
import Style from './Style'
import { BGR, BGRDRK, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements'

export default function Home({ navigation }) {
    const startBtn = () => {
        navigation.navigate("Login");
    }
    const registerNow = () => {
        navigation.navigate("Registration");
    }
    return (
        <ScrollView style={Style.background}>
            <StatusBar backgroundColor={BGR} />
            <View style={Style.firstView}>
                <View style={Style.searchMain}>
                    <View style={Style.searchBarStyle}>
                        <MaterialIcons size={20} color={BGRDRK} name="search" />
                        <TextInput
                            style={Style.textInputStyle}
                            placeholder='Search for fruits, vegetables, grocery..'
                        />
                    </View>
                    <MaterialIcons size={30} color="#fff" name="notifications-none" style={Style.UprIcon} />
                    <MaterialCommunityIcons size={30} color="#fff" name="cart-outline" style={Style.UprIcon} />
                </View>
                <View style={Style.addressStyle}>
                    <View style={Style.addressHeading}>
                        <MaterialCommunityIcons size={25} color="#fff" name="map-marker-outline" />
                        <Txt c="w">Delivery address</Txt>
                    </View>
                    <View style={Style.addressHeading}>
                        <Txt c="w" w="500">Chandigarh, India...</Txt>
                        <MaterialIcons size={25} color="#fff" name="keyboard-arrow-down" />
                    </View>
                </View>
                <View style={Style.nameView}>
                    <Avatar
                        rounded
                        source={User_Img}
                        containerStyle={{borderWidth:2, borderColor:"#fff"}}
                        size="small"
                    />
                    <Txt ml={10} s={20} w="600" c="w">Hi, Mr. Jay</Txt>
                </View>
                <View style={Style.voucherView}>
                    <View style={Style.voucherInside}>
                        <MaterialCommunityIcons size={20} color="#fff" name="ticket-confirmation" />
                        <Txt c="w" pl={5} w="500">15 Vouchers</Txt>
                        <MaterialIcons size={25} color="#fff" name="keyboard-arrow-right" />
                    </View>
                    <View style={Style.voucherInside}>
                        <MaterialCommunityIcons size={20} color="#fff" name="cash-multiple" />
                        <Txt c="w" pl={5} w="500">Payments</Txt>
                        <MaterialIcons size={25} color="#fff" name="keyboard-arrow-right" />
                    </View>
                </View>
            </View>
            <View style={Style.secondView}>
                <View style={Style.catgryView}>
                    <Txt>Categories</Txt>
                </View>
            </View>
        </ScrollView>
    )
}