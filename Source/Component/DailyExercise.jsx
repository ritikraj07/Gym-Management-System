import { View, Text } from 'react-native'

export default function DailyExercise({item, index}) {
    return <View style={{
        height: 150,
        width: 353, backgroundColor: '#0000cc',
        paddingHorizontal: 20,
        paddingVertical:15,
        borderRadius: 20,
        margin: 20,
        justifyContent:'center'
    }}>
        <Text style={{ fontSize: 30, fontWeight: 600, color: 'white' }} >Day {index + 1}</Text>
        <Text style={{ fontSize: 20, fontWeight: 600, color: 'white' }} >Learn: {item}</Text>
    </View>
}