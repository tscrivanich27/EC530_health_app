import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import message from '../images/message.png'

export default class HomeScreen extends Component {

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Patient Dashboard</Text>
                <Image source={message} style={{width: 200, height: 90, marginTop: 30, marginBottom: 20, resizeMode: 'contain'}}></Image>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => this.props.navigation.navigate("Chat")}>
                    <Text style={styles.buttonText}>
                        Messages
                    </Text>
                </TouchableOpacity>
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
        marginTop: 0,
        marginBottom: 10,
        fontSize: 38,
        textAlign: 'center'
    },
    button1: {
        alignItems: "center",
        backgroundColor: "#0af",
        height: 56,
        width: 180,
        marginTop: 0,
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
      },
})