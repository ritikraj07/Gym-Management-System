import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import setData from "../Component/Setter";
import getData from "../Component/Getter";
import clearStorage from "../Component/ClearStorage";
export default function SignUp({ navigation }) {
    const [text, setText] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    useEffect(() => {
        getData('data')
            .then((res) => {
                    
                if (res && res.login == true) {

                    navigation.navigate(res.screen)

                }
            })
    }, [error])

    let len = text.password.length > 6 && text.email.length > 11

    function InputTaker(value, fieldName) {
        setText({ ...text, [fieldName]: value });
        setError('')
    }


    function AdminSignUp() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "email": text.email,
            "password": text.password
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch('https://nice-erin-rattlesnake-yoke.cyclic.app/admin/register', requestOptions)
            .then(res => res.json())
            .then((res) => {
                // console.log(res)
                if (res.status) {
                    clearStorage().then(res => { })
                    setData("data", { ...res.data, screen: 'BottomTab',login:true })
                    navigation.navigate('BottomTab')
                } else {
                    let er = res.data;
                    setError(er)
                }
            }).catch(error => {
                console.log('error', error)

            });
    }

    function Login(url, screenName) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer BQBc9efPu6om_2COvIP4ZmmHedQb2IwtSEM3z4mw0W4Mh19CkKJdpymhjkb2Z6dGctbliTn8ivGsmb3XwuRJ1ijV1wwPhEwsJ3zpJDMtfVA8UJZk8PY");

        var raw = JSON.stringify({
            "email": text.email,
            "password": text.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(res => {
                // console.log(res)
                if (res.status) {
                    clearStorage().then(res=>{})

                    console.log(res.data)
                    setData('data', { ...res.data, screen: screenName, login: true })
                    navigation.navigate(screenName)
                } else {
                    setError(res.data)
                }
            })
            .catch(error => console.log('error', error));
    }





    return (<ImageBackground source={{ uri: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?cs=srgb&dl=pexels-cesar-gale%C3%A3o-3289711.jpg&fm=jpg' }}
        style={{
            height: "100%",
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >

        <View style={{
            backgroundColor: 'white', width: '90%',
            borderRadius: 10,
            padding: 10
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
            <Text style={styles.lable}>Enter Your Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                name="Password"
                onChange={(e) => InputTaker(e.nativeEvent.text, 'password')}

            />
            <TouchableOpacity style={[styles.btm, len ? styles.btmCol1 : styles.btmCol2]}
                onPress={() => { AdminSignUp() }}
                disabled={!len}
            >
                <Text style={styles.btmLable}>Admin SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btm, len ? styles.btmCol1 : styles.btmCol2]}
                onPress={() => { Login('https://nice-erin-rattlesnake-yoke.cyclic.app/admin/login', 'BottomTab') }}
                disabled={!len}
            >
                <Text style={styles.btmLable}>Admin Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btm, len ? styles.btmCol1 : styles.btmCol2]}
                onPress={() => { Login('https://nice-erin-rattlesnake-yoke.cyclic.app/user/login', 'Workout') }}
                disabled={!len}
            >
                <Text style={styles.btmLable}>User Login</Text>
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
        borderRadius: 4
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