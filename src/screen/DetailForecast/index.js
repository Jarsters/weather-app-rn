import React, { useContext } from 'react'
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native'
import { GlobalContext } from '../../contexts/Provider';

const Detail = ({ route, navigation }) => {
    const {
        data,
        location,
        last_updated
    } = route.params;
    
    return (
        <>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data.hour}
                renderItem={({ item, index }) => {

                    return (
                        <>
                            {
                                index === 0 && (
                                    <View>
                                        {/* Bagian max,min, dll */}
                                        < View style={{
                                            borderColor: '#000',
                                            borderWidth: 1,
                                            marginTop: 20,
                                            paddingLeft: 30, 
                                        }}>
                                            <View style={styles.container_title}>
                                                <Text style={[styles.location]}>{location}</Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginTop: 15,
                                                    width: '100%'
                                                }}>
                                                <View style={{ width: 120, height: 120 }}>
                                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}
                                                    >{data.day.condition.text}</Text>
                                                    <Image
                                                        source={{ uri: 'https:' + data.day.condition.icon }}
                                                        style={{ width: 70, height: 70 }}
                                                    />
                                                </View>
                                                <View>
                                                    <Text>Max Temperatur: {data.day.maxtemp_c}°C</Text>
                                                    <Text>Min Temperatur: {data.day.mintemp_c}°C</Text>
                                                    <Text>Avg Temperatur: {data.day.avgtemp_c}°C</Text>
                                                    <Text>Max Wind Speed: {data.day.maxwind_kph}KPH</Text>
                                                    <Text>Total Precipitation: {data.day.totalprecip_mm}mm</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection:'row', marginBottom:5 }}>
                                                <Text style={{fontWeight:'bold',}}>Last Updated:</Text>
                                                <Text> {last_updated}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                            <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 15, borderColor: '#000', borderWidth: 1, width: '100%' }}>
                                <View style={{ width: 130, height: 130 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}
                                    >{item.condition.text}</Text>
                                    <Image
                                        source={{ uri: 'https:' + item.condition.icon }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}
                                    >{item.time}</Text>
                                    <Text>Temperatur: {item.temp_c}°C</Text>
                                    <Text>Wind Speed: {item.wind_kph}KPH</Text>
                                    <Text>Pressure: {item.pressure_mb}mb</Text>
                                    <Text>Precipitation: {item.precip_mm}mm</Text>
                                </View>
                            </View>
                        </>
                    )
                }}
            />
            < View style={{ paddingBottom: 5 }}></View >
        </>
    )
}

const styles = StyleSheet.create({
    location: {
        fontSize: 16,
        fontWeight: '700'
    },
    container_title: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 10,
    },
})

export default Detail
