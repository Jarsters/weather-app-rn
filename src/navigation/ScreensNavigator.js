import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DETAIL_SCREEN, FORECAST_SCREEN, HOME_SCREEN } from '../constants/screen';
import Forecast from '../screen/Forecast'
import Detail from '../screen/DetailForecast';

const ScreensNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={HOME_SCREEN}>
            <HomeStack.Screen name={FORECAST_SCREEN} component={Forecast} options={{headerShown:false}} />
            <HomeStack.Screen name={DETAIL_SCREEN} component={Detail} />
        </HomeStack.Navigator>
    );
};
export default ScreensNavigator;