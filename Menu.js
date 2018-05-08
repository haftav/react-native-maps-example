import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';


export default class Menu extends Component {
    render() {
        return (
            <View style={styles.menuWrapper}>

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
        borderTopWidth: 1,
        borderColor: '#d3d3d3'
    }
})


