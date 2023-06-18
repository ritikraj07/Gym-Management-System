import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

import DailyExercise from '../Component/DailyExercise';
import getData from '../Component/Getter';
import setData from '../Component/Setter';
export default function Dashboard({ navigation }) {
    const [user, setuser] = useState([{ amount: 0 }])
   
    const [exercise, setExercise] = useState([
        "Push-ups",
        "Sit-ups",
        "Squats",
        "Lunges",
        "Burpees",
        "Plank",
        "Mountain climbers",
        "Jumping jacks",
        "Bicep curls",
        "Tricep dips",
        "Shoulder press",
        "Deadlifts",
        "Russian twists",
        "Calf raises",
        "Leg press",
        "Bench press",
        "Crunches",
        "Leg extensions",
        "Lat pulldowns",
        "Dumbbell rows"
    ])

    useEffect(() => {
        getData('data').then((res) => {
            fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/all/"+res._id)
                .then(response => response.json())
                .then(result => {
                    setuser(result.data)
                })
                .catch(error => console.log('error', error));
        })
    
    }, [navigation])


    function ExpiredUserPlan() {
        let No_user = 0;
        let date =new Date();
        let da = new Date('sun 5 aug 2023')
        if (date > da) {
            console.log('yes')
        } else {
            console.log('no')
        }
        console.log((Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join(''))
        user.map((ele) => {
            
        })
        return No_user;
    }

    function LogOut() {
        getData('data').then((res) => {
            res = { ...res, login: false }
            setData('data', res)
            navigation.navigate('SignUp')
        })


    }

    return (<View style={{ backgroundColor: "white", padding: 10, height: '100%' }} >
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Text style={{ fontSize: 45, color: 'black', fontWeight: 600 }} >Dashboard</Text>
            <AntDesign onPress={() => {
                LogOut()

            }} name="logout" size={30} style={{ color: 'black', fontWeight: 600, marginRight: 2 }} />
        </View>
        <View>
            <FlatList
                data={exercise}
                renderItem={({ item, index }) => <DailyExercise index={index} item={item} />}
                horizontal
            />
        </View>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            marginHorizontal: 20,
            backgroundColor: '#0000cc',
            padding: 15,
            borderRadius: 15

        }} >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>Active User</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>{user.length>0?user.length:0}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            margin: 20,
            backgroundColor: '#0000cc',
            padding: 15,
            borderRadius: 15

        }}
        >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >Monthly Revenue</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >$ {user.length > 0 ? user.reduce((totle, ele) => {
                return totle + ele.amount
            },0): 0}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            marginHorizontal: 20,
            backgroundColor: '#0000cc',
            padding: 15,
            borderRadius: 15

        }}
        >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >Plan Expired User</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >{ExpiredUserPlan()}</Text>
        </TouchableOpacity>
    </View>)
}








