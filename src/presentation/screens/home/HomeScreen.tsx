import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import BotonPrimario from '../../../components/BotonPrimario';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <BotonPrimario
                onPress={() => navigation.navigate('Products' as never)}
                label="Productos"
            />

            <BotonPrimario
                onPress={() => navigation.navigate('Settings' as never)}
                label="Settings"
            />
        </View>
    );
};

export default HomeScreen;
