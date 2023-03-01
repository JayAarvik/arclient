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

export default function Notifications({ navigation }) {
    const [todayData, setTodayData] = useState([
        { id: 0, notification: "You cancelled an order.", time: "11 days ago", pImage: require('../../images/Items/item1.jpg') },
        { id: 1, notification: "You placed an order.", time: "1 day ago", pImage: require('../../images/Items/item2.jpg') },
        { id: 2, notification: "You cancelled an order.", time: "15 days ago", pImage: require('../../images/Items/item3.jpg') },
        { id: 3, notification: "You cancelled an order.", time: "12 minutes ago", pImage: require('../../images/Items/item1.jpg') },
        { id: 4, notification: "Your order has been delivered.", time: "5 minutes ago", pImage: require('../../images/Items/item2.jpg') },
        { id: 5, notification: "New Food bar restraunt listed. Check your home now.", time: "1 day ago", pImage: require('../../images/Items/item3.jpg') },
        { id: 6, notification: "You cancelled an order.", time: "1 day ago", pImage: require('../../images/Items/item1.jpg') },
        { id: 7, notification: "You cancelled an order.", time: "11 days ago", pImage: require('../../images/Items/item2.jpg') },
        { id: 8, notification: "You cancelled an order.", time: "11 days ago", pImage: require('../../images/Items/item1.jpg') },
        { id: 9, notification: "You placed an order.", time: "1 day ago", pImage: require('../../images/Items/item2.jpg') },
        { id: 10, notification: "You cancelled an order.", time: "15 days ago", pImage: require('../../images/Items/item3.jpg') },
        { id: 11, notification: "You cancelled an order.", time: "12 minutes ago", pImage: require('../../images/Items/item1.jpg') },
    ]);
    const goBackNow = () => {
        navigation.goBack();
    }
    const renderNotifications = (item) => {
        return (
            <View style={Style.renderFlatView}>
                <Image source={item.pImage} style={Style.imgStyle} />
                <View style={{width:"80%"}}>
                    <Txt c="ttl" ml={5}>{item.notification}</Txt>
                    <Txt ml={5} s={12}>{item.time}</Txt>
                </View>
            </View>
        )
    }
    return (
        <View style={Style.background}>
            <View style={Style.headerView}>
                <TouchableOpacity style={Style.backIconStyle} onPress={() => goBackNow()}>
                    <MaterialCommunityIcons size={35} color={BGR} name="chevron-left" />
                </TouchableOpacity>
                <Txt c="bgr" s={18} w="500">Notifications</Txt>
            </View>
            <View style={Style.contentView}>
                <FlatList
                    data={todayData}
                    renderItem={({ item }) => renderNotifications(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}