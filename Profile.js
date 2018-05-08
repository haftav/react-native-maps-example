import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <View style={StyleSheet.absoluteFill}>
                <Text>I am the profile page</Text>
            </View>
        )
    }
}