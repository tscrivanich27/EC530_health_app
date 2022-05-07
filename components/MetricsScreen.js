import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'

import app from '../database/firebase'
import { getAuth } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const auth = getAuth(app)
const db = getFirestore(app)

export default function MetricsScreen() {
    const [metrics, setMetrics] = useState(null)
    const userID = auth.currentUser.email

    const metricsRef = doc(db, "metrics", userID)

    async function getMetrics() {
        const document = await getDoc(metricsRef)
        if (document.data() == {})
        {
            alert("No User Data")
        }
        else 
        {
            const data = document.data()
            setMetrics(data)
        }
    }

    useEffect(() => {
        getMetrics()
    }, [])

    if (metrics != null) {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Patient Metrics
                </Text>
                <Text style={styles.metricHeader}>
                    Temperature:
                </Text>
                <Text style={styles.metricResults}>
                    {metrics["temperature"]} &ordm;F
                </Text>
                <Text style={styles.metricHeader}>
                    Blood Pressure:
                </Text>
                <Text style={styles.metricResults}>
                    Systolic: {metrics["blood pressure"]["systolic"]}{'\n'}{'\n'}
                    Diastolic: {metrics["blood pressure"]["diastolic"]}
                </Text>
                <Text style={styles.metricHeader}>
                    Weight:
                </Text>
                <Text style={styles.metricResults}>
                    {metrics["weight"]} lbs.
                </Text>
                <Text style={styles.metricHeader}>
                    Blood Sugar:
                </Text>
                <Text style={styles.metricResults}>
                    {metrics["blood sugar "]} mg/dl.
                </Text>
            </View>
        )
        }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>No User Data</Text>
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
      marginBottom: 5,
      fontSize: 38,
      textAlign: 'center'
    },
    metricHeader: {
      color: '#0af',
      marginTop: 30,
      marginBottom: 40,
      fontSize: 32,
      textAlign: 'center',
      fontStyle: 'italic'
    },
    metricResults: {
      color: '#000',
      marginTop: -20,
      marginBottom: 10,
      fontSize: 26,
      textAlign: 'center',
    }
})