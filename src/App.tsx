import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './presentation/routes/StackNavigator';
import BottonTabsNavigator from './presentation/routes/BottonTabsNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <BottonTabsNavigator/>
        </NavigationContainer>
    );
};

export default App;
