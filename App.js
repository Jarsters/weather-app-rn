import React from 'react'
import GlobalProvider from './src/contexts/Provider';
import TabNavigator from './src/navigation/TabsNavigator';

const Application = () => {
    return (
        <GlobalProvider>
            <TabNavigator />
        </GlobalProvider>
    )
}

export default Application;
