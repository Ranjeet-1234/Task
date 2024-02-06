import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
const Tab = createMaterialBottomTabNavigator();
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookOpenReader, faCartShopping, faHouse, faMapLocation, faUser } from '@fortawesome/free-solid-svg-icons'
import SignUp from './signUp'
import Header from './header';


export default function Main() {
    return (
        <Tab.Navigator initialRouteName='Homescreen'>
            <Tab.Screen
                name="Home"
                component={Header}  // Corrected this line
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faHouse} color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Catergory"
                component={SignUp}  // Corrected this line
                options={{
                    tabBarLabel: 'Catergory',
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faMapLocation} color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="News"
                component={SignUp}  // Corrected this line
                options={{
                    tabBarLabel: 'Try Out',
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faBookOpenReader} color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SignUp}  // Corrected this line
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faUser} color={color} size={24} />
                    ),
                }} />
            <Tab.Screen
                name="Cart"
                component={SignUp}  // Corrected this line
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faCartShopping} color={color} size={24} />
                    ),
                }} />
        </Tab.Navigator>
    )
}
