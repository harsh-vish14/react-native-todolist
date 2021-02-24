import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    taskwarpper: {
        height: "87%",
        paddingTop: 50,
        paddingHorizontal: 20
    },
    taskBox: {
        // marginLeft: 20,
        // marginRight:20,
        marginTop: 20,
        height: 60,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    boxIcon: {
        height: 30,
        borderRadius: 5,
        width: 30,
        backgroundColor: 'lightblue',
        
    },
    taskText: {
        // marginLeft: 20,
        width: '80%',
        fontSize: 20
    },
    circle: {
        height: 12,
        width: 12,
        borderWidth: 2,
        borderColor: '#55BCF6',
        borderRadius: 50,
        
    },
    inputbox: {
        position: 'absolute',
        bottom: 37,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    textbox: {
        backgroundColor: '#FFF',
        marginRight: 10,
        borderRadius: 60,

        height: 65,
        width: '80%',
        fontSize: 14,
        color: 'black',
        paddingHorizontal: 30
    },
    buttons: {
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
});

export default styles