import {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
export default function AllUsers({ route }) {
    const [users, setusers] = useState(route.params)
    
    console.log("users from alluser ======>", users )
    const navigation = useNavigation(); 
    return (<View>
        <View style={{flexDirection:'row', alignItems:'center',padding:10,  }} >
            <TouchableOpacity style={{}} >
                <Ionicons onPress={() => {
                    navigation.goBack()
                }} name="arrow-back" size={40} style={{ color: 'black', fontWeight: 600, marginRight: 20 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 35, color: 'black', fontWeight: 600}} >
                Active Users
            </Text>
        </View>
        

        {users.map((user, i) => {
            return (
                <TouchableOpacity key={i} style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
                    onPress={() => { navigation.navigate('UserDetail', user) }}
                >
                    <Entypo name="user" size={30} style={{marginRight:10, borderWidth:1, padding:5,  }} />
                    <Text style={{ fontSize: 20, color: 'black' }} >{user.name.toUpperCase()}</Text>
                </TouchableOpacity>
            )
        })}
    </View>)
}