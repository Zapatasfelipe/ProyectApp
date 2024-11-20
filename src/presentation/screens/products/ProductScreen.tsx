import React from 'react';
import { Text, View } from 'react-native';
import BotonPrimario from '../../../components/BotonPrimario';
import { RootStackParams } from '../../routes/StackNavigator';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../../constants/theme';

const ProductsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <View style={globalStyles.container}>
            <BotonPrimario onPress={() => navigation.navigate('Settings')} label="Settings" />



            {/* regresar al home */}
            <BotonPrimario onPress={() => navigation.dispatch(StackActions.popToTop())} label="home" />
        </View>
    );
};

export default ProductsScreen;
