import {useState, useEffect} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
export default function AddUser() {
    const [user, setuser] = useState({})
    function InputTaker(value, fieldName) {
        setuser({ ...user, [fieldName]: value });
    }
    let date = Date().split(' ')
    
    
    return (<View style={{ backgroundColor: "white", padding: 10, height: '100%', }} >
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Text style={{ fontSize: 45, color: 'black', fontWeight: 600 }} >Add User</Text>
            <Entypo name="user" size={30} style={{ color: 'black', }} />
        </View>
        <ScrollView>
            
            <Text style={styles.lable}>Enter User Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                name="name"
                aria-label='Name'
                onChange={(e) => InputTaker(e.nativeEvent.text, 'name')}

            />
            <Text style={styles.lable}>Enter User Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                name="email"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'email')}
            />
            <Text style={styles.lable}>Enter User Weight (kg/gr) </Text>
            <TextInput
                style={styles.input}
                placeholder="Weight"
                name="weight"
                 
                onChange={(e) => InputTaker(e.nativeEvent.text, 'weight')}
                keyboardType="numeric"
            />
            <Text style={styles.lable}>Enter User Height (in cm) </Text>
            <TextInput
                style={styles.input}
                placeholder="Height"
                name="height"
                keyboardType="numeric"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'height')}
            />
            <Text style={styles.lable}>Enter User Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Contact Number"
                name="number"
                maxLength={10}
                keyboardType="numeric"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'number')}
            />
            <Text style={styles.lable}>Enter User Gender (M/F) </Text>
            <TextInput
                style={styles.input}
                placeholder="Gender"
                name="gender"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'gender')}
            />
            <Text style={styles.lable}>Enter User Date of Birth (dd/mm/yy)</Text>
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                name="dob"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'dob')}
            />
            <Text style={styles.lable}>Enter User Profession</Text>
            <TextInput
                style={styles.input}
                placeholder="Profession"
                name="profession"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'profession')}
            />
            <Text style={styles.lable}>Enter User Start Date (dd/mm/yy) </Text>
            <TextInput
                style={styles.input}
                placeholder="Start Date"
                name="start_date"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'start_date')}
            />
            <Text style={styles.lable}>Enter User End Date (dd/mm/yy) </Text>
            <TextInput
                style={styles.input}
                placeholder="End Date"
                name="end_date"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'end_date')}
            />
            <Text style={styles.lable}>Enter User Amount</Text>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                name="amount in $"
                keyboardType="numeric"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'amount')}
            />
            <Text style={styles.lable}>Enter User Payment Mode</Text>
            <TextInput
                style={styles.input}
                placeholder="Mode of Payment"
                name="payment_mode"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'payment_mode')}
            />
            
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