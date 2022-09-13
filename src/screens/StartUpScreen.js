import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {fetchStorage} from '@store/api/asyncStorage'
import Colors from '@constants/Colors';

export default function StartupScreen({navigation}) {

    useEffect(() => {
        const fetchToken = async() => {
          const token = await fetchStorage('token');
            if (!token || token === null){
              navigation.navigate('Auth');
              return;
            }
            navigation.navigate('Main');
        };
        fetchToken();
    }, [navigation]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});