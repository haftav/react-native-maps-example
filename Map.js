import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/Feather';


const { width, height } = Dimensions.get('window');


const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Map extends Component {
    constructor() {
        super();

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        }
    }

    watchID: ?number = null

    componentWillMount() {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     var lat = parseFloat(position.coords.latitude);
        //     var long = parseFloat(position.coords.longitude);

        //     var initialRegion = {
        //         latitude: lat,
        //         longitude: long,
        //         latitudeDelta: LATITUDE_DELTA,
        //         longitudeDelta: LONGITUDE_DELTA
        //     }

        //     this.setState({
        //         initialPosition: initialRegion,
        //         markerPosition: initialRegion
        //     })
        // }, (error) => alert(JSON.stringify(error)),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     var lat = parseFloat(position.coords.latitude);
        //     var long = parseFloat(position.coords.longitude);

        //     var lastRegion = {
        //         latitude: lat,
        //         longitude: long,
        //         latitudeDelta: LATITUDE_DELTA,
        //         longitudeDelta: LONGITUDE_DELTA
        //     }

        //     this.setState({
        //         markerPosition: lastRegion
        //     })
        // })

    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    handlePress = () => {
        navigator.geolocation.getCurrentPosition((position) => {
                var lat = parseFloat(position.coords.latitude);
                var long = parseFloat(position.coords.longitude);
    
                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }
    
                this.setState({
                    initialPosition: initialRegion,
                    markerPosition: initialRegion
                })
            }, (error) => alert(JSON.stringify(error)),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
    }

    render() {


        return (
            <View style={StyleSheet.absoluteFillObject}>
                <TouchableOpacity onPress={this.handlePress} style={styles.getCurrentPosition}>
                    <Icon style={styles.navigator} name="navigation" size={20} />
                </TouchableOpacity>
                <MapView
                    initialRegion={this.state.initialPosition}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                    region={this.state.initialPosition}
                    style={styles.map}>
                    <MapView.Marker coordinate={this.state.markerPosition} />
                </MapView>
                <Menu />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    getCurrentPosition: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#b3b3b3',
        width: 35,
        height: 35,
        borderRadius: 3,
        position: 'absolute',
        top: 25,
        left: 25,
        zIndex: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 5
    },
    navigator: {
        color: '#2D9CDB',
        fontSize: 17
    }
})