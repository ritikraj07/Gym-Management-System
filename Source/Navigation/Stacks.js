
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTab';
import { Login, SignUp } from '../Screens';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTab" component={BottomTabs} />
        </Stack.Navigator>
    );
}