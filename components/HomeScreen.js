import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import message from '../images/message.png'
import metrics from '../images/metrics.png'

import app from '../database/firebase'
import { getAuth } from 'firebase/auth'

const auth = getAuth(app)

export default class HomeScreen extends Component {

    render () {
        const signout = () => {
            auth.signOut()
            this.props.navigation.navigate("Login")
        }

        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Patient Dashboard</Text>
                <Image source={message} style={{width: 200, height: 90, marginTop: 15, marginBottom: 20, resizeMode: 'contain'}}></Image>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => this.props.navigation.navigate("Chat")}>
                    <Text style={styles.buttonText1}>
                        Messages
                    </Text>
                </TouchableOpacity>
                <Image source={metrics} style={{width: 200, height: 110, marginTop: 30, marginBottom: 20, resizeMode: 'contain'}}></Image>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => this.props.navigation.navigate("Metrics")}>
                    <Text style={styles.buttonText1}>
                        Metrics
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => signout()}>
                    <Text style={styles.buttonText2}>
                        Sign Out
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
        marginTop: -20,
        marginBottom: 10,
        fontSize: 38,
        textAlign: 'center'
    },
    button1: {
        alignItems: "center",
        backgroundColor: "#0af",
        height: 50,
        width: 180,
        marginTop: 0,
        padding: 10,
        borderRadius: 10
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#0af",
        height: 50,
        width: 180,
        marginTop: 180,
        padding: 10,
        borderRadius: 10
    },
    buttonText1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonText2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    }
})