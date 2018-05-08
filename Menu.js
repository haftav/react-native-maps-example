import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
 import Icon from 'react-native-vector-icons/Feather';


export default class Menu extends Component {
    render() {
        return (
            <View style={styles.menuWrapper}>
                <View style={styles.box}><Icon style={styles.icon} name="settings" size={25} color="black" /></View>
                <View style={styles.box}><Icon name="map" size={25} color="black" /></View>
                <View style={styles.box}><Icon name="user" size={25} color="black" /></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuWrapper: {
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 5,
            height: -1
        },
        shadowRadius: 25,
        shadowOpacity: 0.15,
        borderTopWidth: 0.5,
        borderColor: '#d3d3d3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    box: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'black'
    }
})


