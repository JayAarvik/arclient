import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login/Login';
import Registration from './src/screens/Registration/Registration';
import Home from './src/screens/Home/Home';
import StartScreen from './src/screens/Start/StartScreen';
import Tabs from './src/screens/BottomBar/Tabs';
import AllItems from './src/screens/AllItems/AllItems';
import SingleItem from './src/screens/SingleItem/SingleItem';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                <Stack.Screen name="AllItems" component={AllItems} options={{headerShown: false}} />
                <Stack.Screen name="SingleItem" component={SingleItem} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;