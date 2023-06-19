import { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import getData from '../Component/Getter';
import LoadingComponent from '../Component/Loading';
export default function AddUser({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [user, setuser] = useState({
        name: '',
        email: '',
        weight: "50",
        height: "150", bod: '',
        profession: '',
        start_date: (Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join(''),
        end_date: '',
        gender: 'Male',
        number: '0987654321',
        password: '12345678',
        payment_mode: 'card',
        amount: "50",
        attendence: [{
            date: (Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join(''),
            present: false
        }]
    })

    let len = user.name.length && user.email.length && user.password.length >6

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

    const handleNavigate = (user) => {
        navigation.navigate('UserDetail', user);
    };

    function Sumbit() {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQBc9efPu6om_2COvIP4ZmmHedQb2IwtSEM3z4mw0W4Mh19CkKJdpymhjkb2Z6dGctbliTn8ivGsmb3XwuRJ1ijV1wwPhEwsJ3zpJDMtfVA8UJZk8PY");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ ...user, admin_id: admin._id });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
                console.log("result ===>  ", user)

        fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/register", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("result ===>  ", result)
                setLoading(false)
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
                handleNavigate(user)
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

        {loading ? <LoadingComponent /> :
            <ScrollView style={{ marginBottom: 120 }} >

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
                <Text style={styles.lable}>Enter User Gender (Male/Female) </Text>
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

                <TouchableOpacity style={[styles.btm, len ? styles.btmCol1 : styles.btmCol2]}
                    onPress={() => { Sumbit() }}
                    disabled={!len}
                >
                    <Text style={styles.btmLable}>Add User to Database</Text>
                </TouchableOpacity>

            </ScrollView>}

    </View>)
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 5,
        fontSize: 20,
        paddingHorizontal: 10
    },
    lable: {
        fontSize: 15,
        marginHorizontal: 10,
        color: 'black'
    },
    btm: {
        backgroundColor: '#005ce6',
        margin: 5,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btmLable: {
        color: 'white',
        fontSize: 25
    },
    btmCol1: {
        backgroundColor: '#005ce6',
    },
    btmCol2: {
        backgroundColor: 'red',
    }
});













// {
//     "name": "Sanket",
//         "email": "Sanket@gmail.com",
//             "admin_id": "648eb5ff7d3a199a8e976dbd",
//                 "weight": 65,
//                     "height": 13, "bod": "13 api 04",
//                         "profession": "sutdent",
//                             "start_date": "19 jun 23",
//                                 "end_date": "12 dec 23",
//                                     "gender": "F",
//                                         "number": "1234567890",
//                                             "password": "password",
//                                                 "payment_mode": "card",
//                                                     "amount": 23,
//                                                         "attendence": []
// }