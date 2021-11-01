import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native'
import BRT from '../common/BoxRealTime';

const HomeComponent = ({data}) => {


    return (
        <ScrollView>
            {/* Bagian Location dan Last Updated */}
            <View style={styles.container_title}>
                <Text style={styles.location}>{data.location?.name}, {data.location?.country}</Text>
                <Text>{data.current?.last_updated}</Text>
            </View>

            {/* Bagian Condition.Text, Image, dan Temp_C */}
            <View style={styles.container_main}>
                <Text style={styles.condition_text}>{data.current?.condition.text}</Text>
                <View style={styles.container2}>
                    <Image
                        source={require('../../assets/image/awan_hujan.png')}
                    />
                    <View style={styles.temp_container}>
                        <Text style={styles.temp_text}>{data.current?.temp_c.toFixed(2)}</Text>
                        <Text style={styles.temp_c}>°C</Text>
                    </View>
                </View>
            </View>

            {/* Bagian Air Quality */}
            <View>
                <Text style={{
                    marginLeft: 28,
                    marginTop: 37,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    fontSize: 14
                }}>AIR QUALITY</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {/* Bagian CO */}
                        <BRT teks={'CO'} value={data.current?.air_quality.co.toFixed(2)} />
                        {/* Bagian NO2 */}
                        <BRT teks={"NO2"} value={data.current?.air_quality.no2.toFixed(2)} />
                        {/* Bagian O3 */}
                        <BRT teks={'O3'} value={data.current?.air_quality.o3.toFixed(2)} />
                        {/* Bagian SO2 */}
                        <BRT teks={'SO2'} value={data.current?.air_quality.so2.toFixed(2)} />
                    </View>
                    <View>
                        {/* Bagian PM2_5 */}
                        <BRT teks={"PM2_5"} value={data.current?.air_quality.pm2_5.toFixed(2)} />
                        {/* Bagian PM10 */}
                        <BRT teks={'PM10'} value={data.current?.air_quality.pm10.toFixed(2)} />
                        {/* Bagian US-EPA-INDEX */}
                        <BRT teks={"US-EPA-INDEX"} value={data.current?.air_quality['us-epa-index'].toFixed(2)} />
                        {/* Bagian GB-DEFRA-INDEX" */}
                        <BRT teks={"G-DEFRA-INDEX"} value={data.current?.air_quality['gb-defra-index'].toFixed(2)} />
                    </View>
                </View>
            </View>

            <View>
                <Text style={{
                    marginLeft: 28,
                    marginTop: 37,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    fontSize: 14
                }}>TODAY CONDITION</Text>
                <View style={{ flexDirection: 'row', marginBottom: 150 }}>
                    <View>
                        {/* Bagian WIND */}
                        <BRT teks={'WIND'} value={data.current?.wind_kph.toFixed(2) + 'KPH'} />
                        {/* Bagian Pressure */}
                        <BRT teks={"PRESSURE"} value={data.current?.pressure_mb.toFixed(2) + 'mb'} />
                        {/* Bagian PRECIPITATION */}
                        <BRT teks={'PRECIPITATION'} value={data.current?.precip_mm.toFixed(2) + 'mm'} />
                    </View>
                    <View>
                        {/* Bagian HUMIDITY */}
                        <BRT teks={"HUMIDITY"} value={data.current?.humidity.toFixed(2)} />
                        {/* Bagian CLOUD */}
                        <BRT teks={'CLOUD'} value={data.current?.cloud.toFixed(2)} />
                        {/* Bagian GUST */}
                        <BRT teks={"GUST"} value={data.current?.gust_kph.toFixed(2) + 'KPH'} />
                    </View>
                </View>
            </View>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container_title: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    container_main: {
        alignSelf: 'center',
        marginTop: 40,
        width: '80%',
    },
    container2: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    container_etc: {
        width: 100,
        alignItems: 'center',
        marginLeft: 25,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#00f'
    },
    temp_container: {
        flex: 0,
        flexDirection: 'row',
        marginLeft: 8,
    },
    condition_text: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    temp_text: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 16,
        fontWeight: '700'
    },
    temp_c: {
        fontSize: 20,
    }
})

export default HomeComponent
