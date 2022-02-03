import React, { useState } from 'react';
import {
    Text,
    StatusBar,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

var { height, width } = Dimensions.get('window');

const Home = () => {

    const [state, setState] = useState('');
    const navigation = useNavigation();

    const fetchApiCall = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            console.log('data', data.message);
            setState(data.message)
            navigation.navigate('Image', { data: data.message })
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={'#000'}
                barStyle="light-content"
            />
            <TouchableOpacity onPress={fetchApiCall}>
                <View style={styles.contianer}>
                    <Text style={styles.textstyle}>
                        Fetch
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: '#000',
        width: width / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: height / 2.5,
        borderRadius: 10
        // backgroundColor: Colors.white,
    },
    textstyle: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10
    },
});

export default Home;
