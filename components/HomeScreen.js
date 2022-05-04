import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

import auth from '../database/firebase'

export default class HomeScreen extends Component {

    render () {
        const currentUser = auth.currentUser.displayName

        console.log(currentUser)

        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Patient Dashboard</Text>
            </View>
        )
    }
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
        marginTop: 20,
        marginBottom: 10,
        fontSize: 38,
        textAlign: 'center'
    },
})