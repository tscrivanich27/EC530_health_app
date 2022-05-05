import React, {useEffect, useState, useCallback} from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import app from '../database/firebase'
import { collection, getFirestore, onSnapshot, query, setDoc, doc } from 'firebase/firestore'

const db = getFirestore(app)
const chatRef = collection(db, "chat")

export default function ChatScreen() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        readUser()
        const q = query(chatRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messagesFirestore = querySnapshot.docChanges().filter(({type}) => type === 'added')
                .map(({ doc }) => { 
                    const message = doc.data() 
                    return {...message, createdAt: message.createdAt.toDate()}
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return unsubscribe()
    }, [])

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }

    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = {_id, name}
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    async function handleSend(messages) {
        const writes = messages.map((m) => setDoc(doc(db, `/chat/${user["name"]}`), m))
        await Promise.all(writes)
    }

    const appendMessages = useCallback((messages) => {
        setMessages((previousMessage) => GiftedChat.append(previousMessage, messages))
    })

    if (!user){
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Welcome New User</Text>
                <Text style={styles.infoText}>Enter your name below to start sending messages!</Text>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName}/>
                <TouchableOpacity
                    style={styles.button} 
                    onPress={() => handlePress()} >
                    <Text style={styles.buttonText}>
                        Enter Chat 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            <GiftedChat 
                messages={messages}
                user={user}
                onSend={handleSend}
            />
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
        marginBottom: 60,
        fontSize: 44,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    infoText: {
        color: '#0af',
        marginTop: 0,
        marginBottom: 40,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        marginTop: 2,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        borderColor: 'gray'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0af",
        height: 54,
        width: 180,
        marginTop: 40,
        padding: 10,
        borderRadius: 10
    },
})