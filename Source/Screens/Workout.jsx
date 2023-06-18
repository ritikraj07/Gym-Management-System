import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import getData from '../Component/Getter';
import setData from '../Component/Setter';

export default function Workout({ navigation }) {
    const [user, setuser] = useState({})
    const [value, setvalue] = useState(false)
    const [click, setclick] = useState(true)
    let date = (Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join('')

    useEffect(() => {
        getData('data').then((res) => {
            console.log("localstorage =>", res._id)
            setuser(res)
            GetAttendance(res._id)
             
        })
    }, [click])

    function GetAttendance(id) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer BQBc9efPu6om_2COvIP4ZmmHedQb2IwtSEM3z4mw0W4Mh19CkKJdpymhjkb2Z6dGctbliTn8ivGsmb3XwuRJ1ijV1wwPhEwsJ3zpJDMtfVA8UJZk8PY");

        var raw = JSON.stringify({
            "_id": id,
            "date": date
        });


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/getAttendance", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let val = result.data.present
                setvalue(val)
            })
            .catch(error => console.log('error', error));
    }



    function MakeAttendance() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer BQBc9efPu6om_2COvIP4ZmmHedQb2IwtSEM3z4mw0W4Mh19CkKJdpymhjkb2Z6dGctbliTn8ivGsmb3XwuRJ1ijV1wwPhEwsJ3zpJDMtfVA8UJZk8PY");

        var raw = JSON.stringify({
            "_id": user._id,
            "date": date,
            "value": true
        });
        console.log("Here is raw 62", raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/attend", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(" result in 74 line", result)
                let val = result.data.present
                setvalue(val)
            })
            .catch(error => console.log('error', error));
    }

    return <ImageBackground source={{ uri: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?cs=srgb&dl=pexels-cesar-gale%C3%A3o-3289711.jpg&fm=jpg' }}
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
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'purple',
                fontWeight: 600,

            }} >{date}</Text>
            {value ? <TouchableOpacity style={styles.btm}
                onPress={() => {
                    navigation.navigate('WOscreen')
                }}
            >
                <Text style={styles.btmLable} > Start Workout </Text>
            </TouchableOpacity> : <TouchableOpacity style={styles.btm}
                onPress={() => {
                    MakeAttendance()
                    setclick(false)
                }}
            >
                <Text style={styles.btmLable} > Mark as Present </Text>
            </TouchableOpacity>}
        </View>

    </ImageBackground>
}


const styles = StyleSheet.create({
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
    }
});