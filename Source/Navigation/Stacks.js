
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTab';
import { Login, SignUp } from '../Screens';
import Workout from '../Screens/Workout';
import WOscreen from '../Screens/WOscreen';
import UserDetail from '../Component/UserDetail';
import LoadingComponent from '../Component/Loading';
import AllUsers from '../Screens/AllUsers';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name='Workout' component={Workout} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="WOscreen" component={WOscreen} />
            <Stack.Screen name="UserDetail" component={UserDetail}/>
            <Stack.Screen name="BottomTab" component={BottomTabs} />
            <Stack.Screen name="loading" component={LoadingComponent} />
            <Stack.Screen name="AllUser" component={AllUsers} />
        </Stack.Navigator>
    );
}