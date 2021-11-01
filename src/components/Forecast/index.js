import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { DETAIL_SCREEN } from '../../constants/screen';

const ForecastComponent = ({data, navigation}) => {

    // console.log(data);
    // console.log(data.forecast?.forecastday);
    return (
        <View>
            {/* Bagian Location dan Last Updated */}
            <View style={styles.container_title}>
                <Text style={styles.location}>{data.location?.name}, {data.location?.country}</Text>
                <Text>{data.current?.last_updated}</Text>
            </View>

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data.forecast?.forecastday}
                renderItem={({ item, index }) => {

                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(DETAIL_SCREEN,
                                    {
                                        'data': data.forecast?.forecastday[index],
                                        'location': data.location?.name + ',' + data.location?.country,
                                        'last_updated': data.current?.last_updated
                                    })
                            }}
                            style={styles.item}
                        >
                            <View style={[styles.wrapper]}>
                                {/* Bagian Kiri */}
                                <Text style={[styles.text, styles.title]}>{item.date}</Text>
                                {/* Bagian Kanan */}
                                <View style={{ width: 165, marginLeft: 20, borderWidth: 1, borderColor: '#000' }}>
                                    {/* Bagian Condition.text */}
                                    <Text style={[styles.text, styles.desc]}>{item.day.condition.text}</Text>
                                    {/* Bagian Image dan Temperatur */}
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* Image */}
                                        <Image
                                            source={{ uri: 'https:' + item.day.condition.icon }}
                                            style={{ width: 50, height: 50 }}
                                        />
                                        {/* Bagian Kanan */}
                                        <View style={styles.temp_container}>
                                            {/* Temperatur angka */}
                                            <Text style={styles.temp_text}>{data.current?.temp_c}</Text>
                                            {/* Temperatur derajat celcius */}
                                            <Text style={styles.temp_c}>°C</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
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
        justifyContent: 'space-around',
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        margin: 20,
        paddingBottom: 15,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
    },
    text: {
        color: '#000',
    },
    title: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    desc: {
        fontSize: 18,
        marginLeft: 10,
    },
    wrapper: {
        flex: 1,
        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    temp_container: {
        flex: 0,
        flexDirection: 'row',
        marginLeft: 8,
    },
    temp_text: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    temp_c: {
        fontSize: 20,
    }
})

export default ForecastComponent
