import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BRT = ({teks, value}) => {
    return (
        <View style={styles.container_etc}>
            <Text style={{ marginBottom: 3, fontWeight: 'bold' }}>{teks}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container_etc:{
        width:135,
        alignItems:'center',
        marginLeft:25,
        marginBottom:5,
        borderWidth:1,
        borderColor:'#00f'
    },
})

export default BRT
