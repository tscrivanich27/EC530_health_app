import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, TextInput, Alert, TouchableOpacity} from 'react-native';

import image from '../images/strong_heart.png'

import auth from '../database/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default class LoginScreen extends Component {
    
    constructor() {
        super();
        this.state = { 
          email: '', 
          password: '',
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userLogin = () => {
        if (this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to Login!')
        } 
        else {
          signInWithEmailAndPassword(auth, this.state.email, this.state.password).then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Home')
          })
          .catch(error => alert("Error: Sign In Failed"))
        }
    }

    render () {
        return ( 
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to HealthNOW!</Text>
                <Image source={image} style={{width: 350, height: 180, marginTop: 20, marginBottom: 20}}></Image>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true}
                />   
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.userLogin()}>
                    <Text style={styles.loginText}>
                      Login
                    </Text>
                </TouchableOpacity>
                <Text
                    style={styles.registerText}
                    onPress={() => this.props.navigation.navigate('Registration')}>
                    New user? Click here to register
                </Text>
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
    title: {
      fontSize: 42,
      fontWeight: 'bold',
      marginTop: 20,
      color: '#0af'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1,
      fontSize: 24,
    },
    registerText: {
      color: '#0af',
      marginTop: 50,
      textAlign: 'center',
      fontSize: 20,
    },
    loginText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 32,
      fontWeight: 'bold',
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0af",
      height: 60,
      width: 120,
      marginTop: 20,
      padding: 10,
      borderRadius: 10
    },
});