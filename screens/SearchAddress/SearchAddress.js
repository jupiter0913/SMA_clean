import React, { 
    useState, 
    useEffect 
} from 'react';

import {
    View
} from 'react-native';

import {
    GooglePlacesAutocomplete
} from 'react-native-google-places-autocomplete';

import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

import {
    Key
} from '../../constants';

import {
    styles,
    googlePlacesAutocompleteStyle
} from './style';

export const SearchAddress = props => {

    //console.log(props.busy, props.addresses)
    //let prevAddress = props.addresses;

    const [addresses, setAddresses] = useState(
        cloneDeep(props.addresses)
    );

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if(!isEqual(addresses, props.addresses)) {
            props.navigation.navigate("Location")
        }
    },
    [props.busy]);

    // get parameters 
    let address = props.navigation.getParam('address');
    let locationId = props.navigation.getParam('locationId');

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={address}
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed={false}    // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    //this.setselectedAddressData(data, details);
                    //console.log(data);
                    //console.log(details);

                    let location = {
                        address: data.description,
                        lat: details.geometry.location.lat,
                        lon: details.geometry.location.lng,
                    }

                    if ( props.setLocation ) {
                        props.setLocation(1, locationId, location);
                    }
                }}
                getDefaultValue={() => ''}
                query={{
                    key: Key.GoogleMapApiKey,
                    language: 'en'//, // language of the results
                    //types: '(cities)' // default: 'geocode'
                }}
                styles={googlePlacesAutocompleteStyle}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
        </View>
    );
}

SearchAddress.navigationOptions = {
    headerTitle: 'Address Search',
    headerStyle: {
        backgroundColor: '#1c1c1c',
    },
    headerTintColor: '#fff',
};