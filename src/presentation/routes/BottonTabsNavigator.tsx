import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottonTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                },
                tabBarLabelStyle: {
                    paddingBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                },
            }}>
            <Tab.Screen
                name="tab1"
                options={{ title: 'Inicio', tabBarIcon: ({color}) => (<Text style={{color}}>test</Text>) }}
                component={Tab1Screen}
            />
            <Tab.Screen name="tab2" component={Tab2Screen} />
            <Tab.Screen name="tab3" component={Tab3Screen} />
        </Tab.Navigator>
    );
};

export default BottonTabsNavigator;
