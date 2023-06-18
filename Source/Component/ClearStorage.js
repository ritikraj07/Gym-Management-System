import AsyncStorage from '@react-native-async-storage/async-storage';

const clearStorage = async () => {
    try {
        await AsyncStorage.removeItem('data');
        console.log('AsyncStorage cleared successfully.');
    } catch (error) {
        console.error('Failed to clear AsyncStorage:', error);
    }
};

export default clearStorage;