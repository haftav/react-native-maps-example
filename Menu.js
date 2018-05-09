import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';
 import Icon from 'react-native-vector-icons/Feather';
 import { withNavigation } from 'react-navigation';


 class Menu extends Component {
     constructor(props) {
         super(props);
     }
    render() {
        return (
            <View style={styles.menuWrapper}>
                <TouchableOpacity style={styles.box}><Icon style={styles.icon} name="settings" size={25} color="#4c4c4c" /></TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('Map')}><Icon name="map" size={30} color="black" /></TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('Profile')}><Icon name="user" size={25} color="#4c4c4c" /></TouchableOpacity>
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
        justifyContent: 'space-around',
        zIndex: 10
    },
    box: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default withNavigation(Menu);