import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

export type RootStackParams = {
    Home: undefined;
    Products: undefined;
    Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
