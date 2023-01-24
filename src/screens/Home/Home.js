import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView, StatusBar,
    TextInput,
    FlatList,
    Image
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGR, BGRDRK, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';

export default function Home({ navigation }) {
    const [catData, setCatData] = useState([
        { id: 0, name: "All Products", pImage: require('../../images/Categories/grid.png') },
        { id: 1, name: "Fruits", pImage: require('../../images/Categories/fruits.png') },
        { id: 2, name: "Vegetables", pImage: require('../../images/Categories/veg.png') },
        { id: 3, name: "Meat & Egg", pImage: require('../../images/Categories/meat.png') },
        { id: 4, name: "Fish & Seafood", pImage: require('../../images/Categories/fish.png') },
    ]);
    const [todayData, setTodayData] = useState([
        { id: 0, name: "Yotam Ottolenghi", type: "Salty", pImage: require('../../images/Items/item1.jpg') },
        { id: 1, name: "Hanoi-style Eggs", type: "Salty", pImage: require('../../images/Items/item2.jpg') },
        { id: 2, name: "Chicken Biryani", type: "Spicy", pImage: require('../../images/Items/item3.jpg') },
        { id: 3, name: "Yotam Ottolenghi", type: "Salty", pImage: require('../../images/Items/item1.jpg') },
        { id: 4, name: "Hanoi-style Eggs", type: "Salty", pImage: require('../../images/Items/item2.jpg') },
    ])
    const startBtn = () => {
        navigation.navigate("Login");
    }
    const registerNow = () => {
        navigation.navigate("Registration");
    }
    const renderCategories = (item) => {
        return (
            <View style={Style.catFlatView}>
                <Image source={item.pImage} style={Style.catFlatImage} />
                <Txt a="c" c="ttl" s={13}>{item.name}</Txt>
            </View>
        )
    }
    const renderTodayItem = (item) => {
        return (
            <View style={Style.itemsStyle}>
                <Image source={item.pImage} style={Style.itemImage} />
                <View style={Style.itemFlatTextView}>
                    <Txt c="bgrdrk">{item.type}</Txt>
                    <Txt c="ttl" w="500" s={15}>{item.name}</Txt>
                    <Txt c="bgrdrk" w="500">$55</Txt>
                    <View style={Style.addCartView}>
                        <Txt a="c" c="bgrdrk" w="500">Add to cart</Txt>
                    </View>
                </View>
            </View>
        )
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
                        containerStyle={{ borderWidth: 2, borderColor: "#fff" }}
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
                    <Txt c="ttl" w="500">Categories</Txt>
                    <FlatList
                        data={catData}
                        renderItem={({ item }) => renderCategories(item)}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={Style.getOffView}>
                    <View style={Style.offerInner}>
                        <Txt c="yl" s={25} pt={5} w="700">Get 10% Off</Txt>
                        <Txt c="w" w="500">All fruits & vegetables</Txt>
                        <View style={Style.periodView}>
                            <Txt c="w" w="500" a="c">Period: 25th Jun - 5th Jul</Txt>
                        </View>
                    </View>
                    <Image source={require('../../images/vegetables.png')} style={Style.offerImageStyle} />
                </View>
                <View style={Style.seeMoreView}>
                    <View style={Style.textMoreInner}>
                        <Txt c="ttl" w="500" s={20}>Today's Inspiration</Txt>
                        <View style={Style.seeMoreStyle}>
                            <Txt c="bgrdrk">See more</Txt>
                            <MaterialIcons size={25} color={BGRDRK} name="keyboard-arrow-right" />
                        </View>
                    </View>
                    <View style={Style.moreFlatStyle}>
                        <FlatList
                            data={todayData}
                            renderItem={({ item }) => renderTodayItem(item)}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}