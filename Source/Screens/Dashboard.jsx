import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { NavigationEvents } from 'react-navigation';
import DailyExercise from '../Component/DailyExercise';
import getData from '../Component/Getter';
import setData from '../Component/Setter';
import LoadingComponent from '../Component/Loading';
export default function Dashboard({ navigation }) {
    const [user, setuser] = useState([])
   
  
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            
            getData('data').then((res) => {
                fetch("https://nice-erin-rattlesnake-yoke.cyclic.app/user/all/" + res._id)
                    .then(response => response.json())
                    .then(result => {
                        setuser(result.data)
                    })
                    .catch(error => console.log('error', error));
            })
        });

        return unsubscribe;
       
    
    }, [navigation])


    function ExpiredUserPlan() {
        let No_user = 0;
        let date =new Date();
        let da = new Date('sun 5 aug 2023')
        if (date > da) {
            console.log('yes')
        } else {
            console.log('no')
        }
        console.log((Date().split(' ').map((day, i) => i < 4 ? day + ' ' : '')).join(''))
        user.map((ele) => {
            
        })
        return No_user;
    }

    function LogOut() {
        getData('data').then((res) => {
            res = { ...res, login: false }
            setData('data', res)
            navigation.navigate('SignUp')
        })


    }

    return (<View style={{ backgroundColor: "white", padding: 10, height: '100%', paddingHorizontal:20 }} >
        
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Text style={{ fontSize: 45, color: 'black', fontWeight: 600 }} >Dashboard</Text>
            <AntDesign onPress={() => {
                LogOut()

            }} name="logout" size={30} style={{ color: 'black', fontWeight: 600, marginRight: 2 }} />
        </View>
        
        <TouchableOpacity style={styles.btm}
            onPress={() => {
                navigation.navigate('AllUser', user)
            }}
        >
            <Text style={styles.text}>Active User</Text>
            <Text style={styles.text}>{user.length>0?user.length:0}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btm}>
            <Text style={styles.text} >Monthly Revenue</Text>
            <Text style={styles.text} >$ {user.length > 0 ? user.reduce((totle, ele) => {
                return totle + ele.amount
            },0): 0}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btm}
        >
            <Text style={styles.text} >Plan Expired User</Text>
            <Text style={styles.text} >{ExpiredUserPlan()}</Text>
        </TouchableOpacity>
    </View>)
}






const styles = StyleSheet.create({
    text: { color: 'white', fontSize: 20, fontWeight: 600 },
    btm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#0000cc',
        padding: 15,
        borderRadius: 15,
        marginVertical:5

    }
})


