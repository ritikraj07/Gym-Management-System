import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AddUser, Attendence, Dashboard} from '../Screens/index'
import {Text} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                color: 'white',
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    height: 70,
                    borderRadius: 15,
                    backgroundColor: '#005ce6',
                    
                },
                
                
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <>
                            {focused ? (
                                <MaterialCommunityIcons name="view-dashboard" size={30} color={color} />
                            ) : (
                                    <MaterialCommunityIcons name="view-dashboard-outline" size={30} color={color} />
                            )}
                            
                        </>
                    ),
                    
                }}

            />
            <Tab.Screen name="Add User" component={AddUser}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <>
                            {focused ? (
                                <FontAwesome name="user-circle" size={26} color={color} />
                            ) : (
                                <FontAwesome name="user-circle-o" size={30} color={color} />
                            )}
                            
                        </>
                    )
                }}

            />
            <Tab.Screen name="Attendence" component={Attendence} 
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <>
                            {focused ? (
                                <Entypo name="text-document-inverted" size={30} color={color} />
                            ) : (
                                    <Entypo name="text-document" size={30} color={color} />
                            )}
                            
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    );
}