import React from 'react';
import {
    View
} from 'react-native';

import MapView, {
    Marker,
    PROVIDER_GOOGLE 
} from 'react-native-maps';

import {
    mapStyle
} from './style';

export default GoogleMap = props => {
    let { coordinate } = props;
    const siliconValley = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    let initialRegion = siliconValley;

    if ( coordinate ) {
        initialRegion = {
            ...siliconValley,
            ...coordinate,
        };
    }

    return (
        <View style={mapStyle.container}>
            <View style={mapStyle.innerContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    mapType={!coordinate ? "none" : "standard"}
                    style={mapStyle.map}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={initialRegion}
                    region={initialRegion}>

                    {coordinate && <Marker coordinate={coordinate} />}

                </MapView>
            </View>
        </View>
    )
}
