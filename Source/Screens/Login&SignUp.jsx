import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from "react-native";
import {useState, useEffect} from 'react'
export default function SignUp() {
    const [admin, setAdmin] = useState({})
    const [error, setError] = useState('')
    function InputTaker(value, fieldName) {
        setAdmin({ ...admin, [fieldName]: value });
        setError('')
    }
    return (<ImageBackground source={{ uri: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?cs=srgb&dl=pexels-cesar-gale%C3%A3o-3289711.jpg&fm=jpg' }}
        style={{
            height: "100%",
            alignItems: 'center',
            justifyContent:'center'
        }}
    >
        
        <View style={{
            backgroundColor: 'white', width: '90%',
            borderRadius: 10,
            padding:10
        }} >
            {/* Error message text */}
           {error.length > 0 && <Text style={{ textAlign: 'center', fontSize: 18, color: 'red' }} >
                {error}
            </Text>}
            
            <Text style={styles.lable}>Enter Your Valid Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                name="Email"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'email')}
            />
            <Text style={styles.lable}>Enter Six Digit Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                name="Password"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'password')}
    
            />
            <TouchableOpacity style={styles.btm}>
                <Text style={styles.btmLable}>SignUp Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btm}>
                <Text style={styles.btmLable}>Login Now</Text>
            </TouchableOpacity>
        </View>


        
    </ImageBackground>
        )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 5,
        fontSize: 20,
        paddingHorizontal: 10,
        borderRadius:4
    },
    lable: {
        fontSize: 20,
        marginHorizontal: 10,
        color: 'black'
    },
    btm: {
        backgroundColor: '#005ce6',
        margin: 5,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:'center'
    },
    btmLable: {
        color: 'white',
        fontSize: 25
    }
});