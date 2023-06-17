
import { View, Text,TouchableOpacity } from 'react-native';

export default function Attendence() {
    let date = Date().split(' ')
    
    return (<View style={{ height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{
            color: 'black', fontSize: 40,
            position: 'absolute',
            top:0
        }} >Attendence</Text>
        <Text style={{ fontSize: 20, color: "black" }} >{date.map((e, i) => i < 4 ? e + " " : "")}</Text>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            margin: 20,
            backgroundColor: '#0000cc',
            padding: 15,
            borderRadius: 15

        }} >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >
                Click Here to Make Attendence
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            margin: 20,
            backgroundColor: '#0000cc',
            padding: 15,
            borderRadius: 15

        }} >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }} >
                Click Here to chekc you history
            </Text>
        </TouchableOpacity>
    </View>)
}