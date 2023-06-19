import {useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function UserDetail({route}) {
    let user = route.params;
    const navigation = useNavigation(); 
    
    {
        Object.entries(user).map(([key, value]) => (
            console.log(key, value)

        ))
    }


    return <View
        style={{
            height: '100%', backgroundColor: 'white', alignItems: 'center',

            paddingHorizontal: 10
        }}
    >
        
            <Text style={{
                color: 'black', fontSize: 40,
                fontWeight: 600,
                textAlign:'center'
            }} >User Detail</Text>
        <ScrollView style={{
            backgroundColor: '#b3ffcc', borderRadius: 2,
            borderWidth: 2, borderColor: '#005ce6'
        }} >
                <View style={styles.view}>
                    <Text style={styles.text}>User id:</Text>
                    <Text style={styles.text}>{user._id}</Text>
                </View>
                
                <View style={styles.view}>
                    <Text style={styles.text}>User Name:</Text>
                    <Text style={styles.text}>{user.name}</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>User email:</Text>
                    <Text style={styles.text}>{user.email}</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>User Gender:</Text>
                    <Text style={styles.text}>{user.gender}</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>User Height:</Text>
                    <Text style={styles.text}>{user.height} cm</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>User Weight:</Text>
                    <Text style={styles.text}>{user.weight} kg</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>User Paid Amount:</Text>
                    <Text style={styles.text}>$ {user.amount}</Text>
                </View>
               
                <View style={styles.view}>
                    <Text style={styles.text}>User Profession:</Text>
                    <Text style={styles.text}>{user.profession}</Text>
            </View>
            
            <View style={styles.view}>
                <Text style={styles.text}>User Starting Date:</Text>
                <Text style={styles.text}>{user.start_date}</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>User Ending Date:</Text>
                <Text style={styles.text}>{user.end_date}</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>User Contact:</Text>
                <Text style={styles.text}>{user.number}</Text>
            </View>

        </ScrollView>
        
        <TouchableOpacity style={styles.btm}
            onPress={() => {
                navigation.navigate('BottomTab')
            }}
        >
            <Text style={styles.btmLable}>Go Back</Text>
        </TouchableOpacity>
        
        
    </View>
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    },
    view: {
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        
        marginVertical:2
    },
    btm: {
        margin: 5,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#005ce6',
        width:'90%'
    },
    btmLable: {
        color: 'white',
        fontSize: 25
    },
})