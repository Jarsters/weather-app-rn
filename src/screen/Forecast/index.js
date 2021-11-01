import React, { useContext, useEffect }from 'react'
import ForecastComponent from '../../components/Forecast';
import forecast from '../../contexts/actions/forecast';
import { GlobalContext } from '../../contexts/Provider';

const Forecast = ({navigation}) => {

    const {
        weatherForecastDispatch,
        weatherForecastState:  { data }
    } = useContext(GlobalContext);

    useEffect(() => {
        forecast()(weatherForecastDispatch)
    }, [])

    return (
        <ForecastComponent 
            data={data}
            navigation={navigation}
        />
    )
}



export default Forecast
