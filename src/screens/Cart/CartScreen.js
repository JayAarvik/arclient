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

export default function CartScreen({ navigation }) {
    const [oneQuantity, setOneQuantity] = useState(1);
    const [twoQuantity, setTwoQuantity] = useState(1);
    const goBackNow = () => {
        navigation.goBack();
    }
    const minusOne = () => {
        oneQuantity > 1 ? setOneQuantity(oneQuantity - 1) : null
    }
    const addMore = () => {
        setOneQuantity(oneQuantity + 1)
    }
    const minusOneSec = () => {
        twoQuantity > 1 ? setTwoQuantity(twoQuantity - 1) : null
    }
    const addMoreSec = () => {
        setTwoQuantity(twoQuantity + 1)
    }
    const editAddress = () => {
        navigation.navigate("EditProfile");
    }
    const OrderDone = () => {
        navigation.navigate("OrderPlaced");
    }
    return (
        <View style={Style.background}>
            <TouchableOpacity style={Style.backIconStyle} onPress={() => goBackNow()}>
                <MaterialCommunityIcons size={35} color={BGR} name="chevron-left" />
                <Txt c="bgr" s={18} w="500">Grocery Shop Name</Txt>
            </TouchableOpacity>
            <ScrollView style={Style.contentView}>
                <View style={Style.productsView}>

                <Txt w="600" s={15}>Cart Items</Txt>
                    <View style={Style.itemInnerView}>
                        <Txt c="bgr" s={16} w="600">Item 1</Txt>
                        <View style={Style.increStyle}>
                            <View style={Style.quantityView}>
                                <MaterialCommunityIcons size={20} color="#999" name="minus" onPress={() => minusOne()} />
                                <Txt c="ttl" s={15} ml={5} mr={5}>{oneQuantity}</Txt>
                                <MaterialCommunityIcons size={20} color="#999" name="plus" onPress={() => addMore()} />
                            </View>
                            <Txt c="bgrdrk" s={15} w="500" ml={20}>234</Txt>
                        </View>
                    </View>
                    <View style={Style.itemInnerView}>
                        <Txt c="bgr" s={16} w="600">Item 1</Txt>
                        <View style={Style.increStyle}>
                            <View style={Style.quantityView}>
                                <MaterialCommunityIcons size={20} color="#999" name="minus" onPress={() => minusOneSec()} />
                                <Txt c="ttl" s={15} ml={5} mr={5}>{twoQuantity}</Txt>
                                <MaterialCommunityIcons size={20} color="#999" name="plus" onPress={() => addMoreSec()} />
                            </View>
                            <Txt c="bgrdrk" s={15} w="500" ml={20}>234</Txt>
                        </View>
                    </View>

                    <View style={Style.deliveryChrgView}>
                        <Txt w="500">Delivery Charges</Txt>
                        <Txt c="ttl" w="600" s={15}>40</Txt>
                    </View>
                    <View style={Style.borderLine}></View>
                    <View style={Style.deliveryChrgView}>
                        <Txt w="500">Total</Txt>
                        <Txt c="bgrdrk" w="600" s={20}>40</Txt>
                    </View>
                </View>

                <View style={Style.addressView}>
                    <Txt c="w" s={16} w="700">Address:</Txt>
                    <Txt c="w" w="500">Alan Walker</Txt>
                    <Txt c="w" w="500">House no 9876, Phase 5, Mohali, Punjab, India.</Txt>
                    <Txt c="w" w="500">+93 9846 35463</Txt>
                    <TouchableOpacity style={Style.editStyle} onPress={() => editAddress()}>
                        <MaterialIcons size={25} color="#fff" name="edit"/>
                    </TouchableOpacity>
                </View>
                
                <View style={Style.instructionView}>
                    <Txt s={15} w="500">Instructions</Txt>
                    <Txt>Offer guidance on how to pick great items. Not only do you get what you need, you help to educate your shopper on choosing good quality items.</Txt>
                    <Txt>Be as specific as possible about the weight of an item and the cut. If you order a pound of pork chops assuming you'll get two thickish chops but you don't specify, you could get one giant chop or four thin chops.</Txt>
                </View>

            </ScrollView>
            <TouchableOpacity style={Style.proceedStyle} onPress={() => OrderDone()}>
                <View>
                    <Txt c="w" w="500" s={20}>Proceed</Txt>
                    <Txt c="w">Cash on Delivery</Txt>
                </View>
                <View>
                    <Txt c="w" w="500" s={20}>Total</Txt>
                    <Txt c="w" ml={5} w="600" s={16}>654</Txt>
                </View>
            </TouchableOpacity>
        </View>
    )
}