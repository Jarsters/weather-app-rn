// Pada saat mau selesai App.js lama dihapus, dan ubah nama App2.js -> App.js


import React from 'react'
import GlobalProvider from './src/contexts/Provider';
import ScreensNavigator from './src/navigation/ScreensNavigator';
import TabNavigator from './src/navigation/TabsNavigator';

const Application = () => {
    return (
        <GlobalProvider>
            {/* <ScreensNavigator /> */}
            <TabNavigator />
        </GlobalProvider>
    )
}

export default Application;
