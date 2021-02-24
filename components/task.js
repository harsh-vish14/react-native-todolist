import React from 'react'
import {View,Text } from 'react-native'
import styles from '../styles'

const Task = (props) => {
    return (
        
        <View style={styles.taskBox}>
            <View style={styles.boxIcon}></View>
            <Text style={styles.taskText}>{props.title}</Text>
            <View style={styles.circle}></View>
        </View>
    )
}

export default Task