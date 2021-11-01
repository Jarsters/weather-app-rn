import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import HomeComponent from '../../components/Home';
import today from '../../contexts/actions/today';
import { GlobalContext } from '../../contexts/Provider';

const Home = () => {

    const {
        weatherTodayDispatch,
        weatherTodayState: { data },
    } = useContext(GlobalContext);

    useEffect(() => {
        today()(weatherTodayDispatch)
    }, [])

    return (
        <HomeComponent
            data={data}
         />
    )
}

export default Home
