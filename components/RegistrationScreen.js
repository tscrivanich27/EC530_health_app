import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

import auth from '../database/firebase'
import { createUserWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';

export default class RegistrationScreen extends Component {

    constructor() {
        super();
        this.state = { 
          displayName: '',
          email: '', 
          password: '',
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signup!')
        } else {
          createUserWithEmailAndPassword(auth, this.state.email, this.state.password).then((res) => {
            Alert.alert("User Created")
            this.props.navigation.navigate("Home")
            this.setState({
              isLoading: false,
              displayName: '',
              email: '', 
              password: ''
            })
          })
          .catch(error => alert("Error: Registration Failed"))    
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.register_message}>Please Enter the Information Below</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    value={this.state.displayName}
                    onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                />      
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
                <Text
                    style={styles.loginText}
                    onPress={() => this.registerUser()}>
                    Register
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
    inputStyle: {
        width: '100%',
        marginTop: 40,
        marginBottom: 15,
        paddingBottom: 15,
        fontSize: 18,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#0af',
        marginTop: 80,
        marginBottom: 10,
        fontSize: 42,
        textAlign: 'center'
    },
    register_message: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 34,
        textAlign: 'center'
    }
})