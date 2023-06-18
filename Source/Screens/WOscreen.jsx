import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, BackHandler } from 'react-native'
import getData from '../Component/Getter';
import setData from '../Component/Setter';

export default function WOscreen({ navigation }) {
    
    let date = Date()
    date = date.split(' ').map((e, i) => i < 4 ? e + " " : "")

   
   
   
    return <ImageBackground source={{ uri: 'https://cdn.wallpapersafari.com/24/23/pENVy4.jpg' }}
        style={{
            height: "100%",
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
       
        <View>
            <Text style={{
                fontSize: 30,
                backgroundColor:'white'
            }} >Comming Soon...</Text>
        </View>
        <TouchableOpacity style={styles.btm}
            onPress={() => {
                
                navigation.navigate('Workout')
                BackHandler.exitApp()
            }}
        >
            <Text style={styles.btmLable} > Exit Now</Text>
        </TouchableOpacity>
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
        fontSize: 25,
        marginHorizontal: 10
    }
});