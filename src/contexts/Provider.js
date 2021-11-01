import React, {createContext, useReducer} from 'react';
import weatherForecastStates from './initialStates/weatherForecastStates';
import weatherInitialStates from './initialStates/weatherTodayStates';
import weatherForecast from './reducers/weatherForecast';
import  weatherToday  from './reducers/weatherToday';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [weatherTodayState, weatherTodayDispatch] = useReducer( weatherToday, weatherInitialStates);
  const [weatherForecastState, weatherForecastDispatch] = useReducer( weatherForecast, weatherForecastStates);

  return (
    <GlobalContext.Provider
      value={{weatherTodayState, weatherTodayDispatch, weatherForecastState, weatherForecastDispatch,}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
