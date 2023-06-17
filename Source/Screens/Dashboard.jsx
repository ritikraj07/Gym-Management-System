import {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import DailyExercise from '../Component/DailyExercise';
export default function Dashboard() {
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

    return (<View style={{ backgroundColor: "white", padding: 10, height:'100%' }} >
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Text style={{ fontSize: 45, color: 'black', fontWeight: 600 }} >Exercises</Text>
            <Entypo name="user" size={30} style={{ color: 'black', }} />
        </View>
        <View>
            <FlatList 
                data={exercise}
                renderItem={({item, index})=> <DailyExercise index={index} item={item} /> }
                horizontal
            />
        </View>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            height: 80,
            marginHorizontal: 20,
            backgroundColor: '#0000cc',
            padding: 15,
            borderRadius:15
            
        }} >
            <Text style={{color:'white', fontSize:20, fontWeight:600}}>Active User</Text>
            <Text style={{color:'white', fontSize:20, fontWeight:600}}>40</Text>
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
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >$2453</Text>
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
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >53</Text>
        </TouchableOpacity>
    </View>)
}