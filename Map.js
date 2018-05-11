import React, { Component } from 'react';
import glamorous from 'glamorous-native';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
            markers: []
        }
    }

    watchID: ?number = null

    componentDidMount() {
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
                initialPosition: initialRegion
            })
        }, (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    handlePress = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude);
            var long = parseFloat(position.coords.longitude);

            var region = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }

            this.setState({
                initialPosition: region
            })
        }, (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
    }

    addMarker = () => {
        let { latitude, longitude } = this.state.initialPosition;
        console.log(`you want to add a marker at lat ${this.state.initialPosition.latitude} and long ${this.state.initialPosition.longitude}`)
        let markersCopy = [...this.state.markers];
        markersCopy.push({
            latlng: {
                latitude,
                longitude
            }
        });
        this.setState({ markers: markersCopy });
    }

    handleRegionChange = (region) => {
        console.log(region)
        this.setState({
            initialPosition: region
        })
    }

    render() {
        console.log(this.state.markers)

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
                    style={styles.map}
                    onRegionChangeComplete={this.handleRegionChange} >
                    {
                        this.state.markers.map((marker, idx) => {
                            return <Marker coordinate={marker.latlng} key={idx} />
                        })
                    }
                    <AddMarker onPress={this.addMarker} />
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

const AddMarker = glamorous.touchableOpacity({
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#2D9CDB',
    position: 'absolute',
    right: 25,
    bottom: 75,
    zIndex: 10
})