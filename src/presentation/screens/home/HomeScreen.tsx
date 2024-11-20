import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../../constants/theme';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import BotonPrimario from '../../../components/BotonPrimario';
import type { RootStackParams } from '../../routes/StackNavigator';

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <View style={globalStyles.container}>
            <BotonPrimario
                onPress={() => navigation.navigate('Products')}
                label="Productos"
            />

            <BotonPrimario
                onPress={() => navigation.navigate('Settings')}
                label="Settings"
            />
        </View>
    );
};

export default HomeScreen;
