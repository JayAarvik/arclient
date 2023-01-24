import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BGC, BGRDRK } from '../../Utils/Import';
import Home from '../Home/Home';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGRDRK : "gray"} name="home" />
            ),
            tabBarActiveTintColor:BGRDRK
          }}
        />
      </Tab.Navigator>
  );
}