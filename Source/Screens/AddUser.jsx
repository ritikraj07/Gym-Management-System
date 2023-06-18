import {useState, useEffect} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import getData from '../Component/Getter';
export default function AddUser() {
    const [user, setuser] = useState({
        name: '',
        email: '',
        weight: '',
        height: '', bod: '',
        profession: '',
        start_date: '',
        end_date: '',
        gender: '',
        number: '',
        password: '',
        payment_mode: '',
        amount: '',
        attendence:[]
    })

    const [admin, setadmin] = useState()

    useEffect(() => {
        getData('data')
            .then((res) => {
                setadmin(res)
            })
    }, [])
    function InputTaker(value, fieldName) {
        setuser({ ...user, [fieldName]: value });
    }

    let date = Date().split(' ')
    
    function Sumbit() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQBc9efPu6om_2COvIP4ZmmHedQb2IwtSEM3z4mw0W4Mh19CkKJdpymhjkb2Z6dGctbliTn8ivGsmb3XwuRJ1ijV1wwPhEwsJ3zpJDMtfVA8UJZk8PY");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({...user, admin_id: admin._id  });
        console.log('raw', raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/register", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("result ===>  ",result)
                setuser({
                    name: '',
                    email: '',
                    weight: '',
                    height: '', bod: '',
                    profession: '',
                    start_date: '',
                    end_date: '',
                    gender: '',
                    number: '',
                    password: '',
                    payment_mode: '',
                    amount: ''
                })
            })
            .catch(error => console.log('error', error));
   }

    
    return (<View style={{ backgroundColor: "white", padding: 10, height: '100%', }} >
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Text style={{ fontSize: 45, color: 'black', fontWeight: 600 }} >Add User</Text>
            <Entypo name="user" size={30} style={{ color: 'black', }} />
        </View>
        
        <ScrollView style={{marginBottom:120}} >
            
            <Text style={styles.lable}>Enter User Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                name="name"
                aria-label='Name'
                value={user.name}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'name')}

            />
            <Text style={styles.lable}>Enter User Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'email')}
            />
            <Text style={styles.lable}>Enter User Weight (kg/gr) </Text>
            <TextInput
                style={styles.input}
                placeholder="Weight"
                name="weight"
                value={user.weight}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'weight')}
                keyboardType="numeric"
            />
            <Text style={styles.lable}>Enter User Height (in cm) </Text>
            <TextInput
                style={styles.input}
                placeholder="Height"
                name="height"
                keyboardType="numeric"
                value={user.height}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'height')}
            />
            <Text style={styles.lable}>Enter User Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Contact Number"
                name="number"
                maxLength={10}
                keyboardType="numeric"
                value={user.number}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'number')}
            />
            <Text style={styles.lable}>Enter User Gender (M/F) </Text>
            <TextInput
                style={styles.input}
                placeholder="Gender"
                name="gender"
                value={user.gender}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'gender')}
            />
            <Text style={styles.lable}>Enter User Date of Birth (dd/mm/yy)</Text>
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                name="dob"
                value={user.dob}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'dob')}
            />
            <Text style={styles.lable}>Enter User Profession</Text>
            <TextInput
                style={styles.input}
                placeholder="Profession"
                name="profession"
                value={user.profession}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'profession')}
            />
            <Text style={styles.lable}>Enter User Start Date (day/mm/dd/yy) </Text>
            <TextInput
                style={styles.input}
                placeholder="Start Date"
                name="start_date"

                value={(Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join('')}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'start_date')}
                editable={false}
            />
            <Text style={styles.lable}>Enter User End Date (day/mm/dd/yy) </Text>
            <TextInput
                style={styles.input}
                placeholder="End Date"
                name="end_date"
                value={user.end_date}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'end_date')}
            />
            <Text style={styles.lable}>Enter User Amount</Text>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                name="amount in $"
                keyboardType="numeric"
                value={user.amount}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'amount')}
            />
            <Text style={styles.lable}>Enter User Payment Mode</Text>
            <TextInput
                style={styles.input}
                placeholder="Mode of Payment"
                name="payment_mode"
                value={user.payment_mode}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'payment_mode')}
            />
            <Text style={styles.lable}>Enter User Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={(e) => InputTaker(e.nativeEvent.text, 'password')}
            />

            <TouchableOpacity style={{
                backgroundColor: '#005ce6',
                margin: 10,
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center'
            }}
                onPress={() => {
                Sumbit()
            }}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 25
}}>Submit</Text>
            </TouchableOpacity>
            
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 5,
        fontSize: 20,
        paddingHorizontal:10
    },
    lable: {
        fontSize: 15,
        marginHorizontal: 10,
        color:'black'
    }
});