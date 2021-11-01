import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '../components/common/Icon';
import { Text, View } from 'react-native';
import Home from '../screen/Home';
import Forecast from '../screen/Forecast';
import ScreensNavigator from './ScreensNavigator';
import { HOME_SCREEN, SCREENS } from '../constants/screen';

const TabNavigator = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let type;
                        if (route.name === HOME_SCREEN) {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                            type = 'ionicon'
                        } else if (route.name === SCREENS) {
                            iconName = focused
                                ? 'eye'
                                : 'eye-outline';
                            type = 'ionicon'
                        }
                        return <Icon type={type} name={iconName} size={21} color={color} />;
                    },
                })} tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name={HOME_SCREEN} component={Home} />
                <Tab.Screen name={SCREENS} component={ScreensNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default TabNavigator
