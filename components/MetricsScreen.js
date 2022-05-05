import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function MetricsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                Choose a Device to View Your Metrics
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 35,
    },
    mainText: {
        color: '#0af',
        marginTop: -20,
        marginBottom: 10,
        fontSize: 38,
        textAlign: 'center'
    },
})