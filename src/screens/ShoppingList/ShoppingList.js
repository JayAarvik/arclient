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

export default function ShoppingList({ navigation }) {
  const [listData, setListData] = useState([
    { id: 0, created: "Apr 23", title: "Daily Grocery shopping needs", text: "Notes", totalItem: "28 products", listImage: require('../../images/Items/item1.jpg') },
    { id: 1, created: "May 13", title: "Monthly Grocery shopping needs", text: "Notes", totalItem: "81 products", listImage: require('../../images/Items/item2.jpg') },
    { id: 2, created: "Jan 04", title: "Weekly Grocery shopping needs", text: "Notes", totalItem: "18 products", listImage: require('../../images/Items/item3.jpg') },
    { id: 3, created: "Dec 31", title: "Daily Grocery shopping needs", text: "Notes", totalItem: "50 products", listImage: require('../../images/Items/item1.jpg') },
    { id: 4, created: "June 04", title: "Monthly Grocery shopping needs", text: "Notes", totalItem: "32 products", listImage: require('../../images/Items/item2.jpg') },
    { id: 5, created: "Feb 14", title: "Weekly Grocery shopping needs", text: "Notes", totalItem: "19 products", listImage: require('../../images/Items/item3.jpg') },
  ])
  const renderShopList = (item) => {
    console.log("data", item);
    return (
      <View style={Style.listFlatView}>
        <Image source={item.listImage} style={Style.listImageStyle} />
        <View style={Style.flatTextView}>
          <Txt s={12}>{item.created}</Txt>
          <Txt w="500" c="ttl">{item.title}</Txt>
          <Txt>{item.text}</Txt>
          <Txt c="bgrdrk">{item.totalItem}</Txt>
        </View>
      </View>
    )
  }
  const HeaderList = () => {
    return(
      <>
         <View style={Style.headingIcon}>
          <Txt c="ttl" s={18} w="600" pt={2} pb={2}>Shopping List</Txt>
          <MaterialCommunityIcons size={25} color="#000" name="cart-outline" />
        </View>
        <View style={Style.quickView}>
          <Txt c="w" w="600" s={15}>Quick Guides</Txt>
          <Txt c="w">You can easily manage and organize your grocery needs by adding the products
            into group list that make you shop your needs faster. You can create daily,
            weekly, or monthly based on your need.</Txt>
        </View>
        <Txt w="600" c="ttl" s={16} mt={10}>Shopping History</Txt>
          <View style={Style.borderLine}></View>
      </>
    )
  }
  return (
    <View style={Style.background}>
      <View style={Style.contentView}>
        <View style={Style.shopListView}>
        
          <View>
            <FlatList
              data={listData}
              renderItem={({ item }) => renderShopList(item)}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            // contentContainerStyle={{ paddingBottom: 100 }}
            ListHeaderComponent={() => HeaderList()}
            // ListFooterComponent={() => FooterList()}
            />
          </View>

        </View>
      </View>
    </View>
  )
}