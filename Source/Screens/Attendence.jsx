import {useState, useEffect} from 'react'
import { View, Text,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';

import getData from '../Component/Getter';
export default function Attendence({ navigation }) {
    const [users, setusers] = useState([])
    const [curDate, setCurDate] = useState([])
    let date = (Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join('')
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData('data').then((res) => {
                fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/all/" + res._id)
                    .then(response => response.json())
                    .then(result => {
                        setusers(result.data)
                        // console.log(result.data.attendence)
                        let dt = []
                        result.data.map((ele) => {
                            dt.push(ele.attendence[ele.attendence.length - 1])
                        })
                        console.log(" from line 21 ====>", dt)
                        setCurDate(dt)
                    })
                    .catch(error => console.log('error', error));
            })
        });

        return unsubscribe;
       

    }, [navigation])

    useEffect(() => {
        
    }, [users, curDate])
    
    
    
    function MakeAttendence(i) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer BQBc9efPu6om_2COvIP4ZmmHedQb2IwtSEM3z4mw0W4Mh19CkKJdpymhjkb2Z6dGctbliTn8ivGsmb3XwuRJ1ijV1wwPhEwsJ3zpJDMtfVA8UJZk8PY");
        let present_val = users[i]?.attendence[users[i].attendence.length-1]?.present || false
        console.log(present_val)
        let data = {
            "_id": users[i]._id,
            "date": date,
            "value": !present_val
        }
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
      

        fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/attend", requestOptions)
            .then(response => response.json())
            .then(result => {
                navigation.navigate('UserDetail', users[i])
                // console.log("======> ",result.data)
            })
            .catch(error => console.log('error===>', error));
    }

  
    
    return (<View style={{
        height: '100%', backgroundColor: 'white', alignItems: 'center',
        width: '100%',
        paddingHorizontal:10
    }} >
        <Text style={{ fontSize: 20, color: "black" }} >{date}</Text>
        <Text style={{
            color: 'black', fontSize: 40,
            fontWeight:600
        }} >Attendence</Text>
        <ScrollView style={{marginBottom:100, width:'100%'}} >
            {curDate.map((user, i) => {
               
                return <TouchableOpacity key={i}
                    onPress={() => {
                        console.log(i)
                        navigation.navigate('UserDetail', users[i])

                    }}
                    style={{
                        flexDirection: "row",
                        width: '90%',
                        margin: 10,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 80,
                        marginHorizontal: 20,
                        backgroundColor: '#0000cc',
                        padding: 15,
                        borderRadius: 15
                    }}
                >
                    <Text style={styles.text}>{i + 1}  {users[i].name}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            MakeAttendence(i)
                            navigation.navigate('UserDetail', users[i])
                        }}
                        style={[styles.btm, user.present ? { backgroundColor: '#00b300' } : { backgroundColor: '#ff4d94' }]}
                    >
                        <Text style={styles.text}> {user.present ==true?"Present":"Absent"} </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            })}
        </ScrollView>
        
    </View>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color:'white'
    },
    btm: {
        
        height: 40,
        justifyContent: 'center',
        borderRadius:10
    }
})