import React from 'react';
import {
  View
} from 'react-native';

import {
  SText
} from '../../../components'

import {
  fixedAddressViewStyle
} from './style'

import GoogleMap from './GoogleMap'

export default FixedSection = props => {

  let { addresses, onAddressFocus } = props;
  let coordinate = null;
  let address = null;
  let locationId = null;

  if (addresses) {
    let addrs = Object.values(addresses);
    let keys = Object.keys(addresses);

    if (addrs.length > 0) {
      address = addrs[0].address;
      locationId = keys[0];
      coordinate = {
        latitude: addrs[0].lat,
        longitude: addrs[0].lon
      }
    }
  }

  return (
    <View style={fixedAddressViewStyle.container}>
      <SText
        value={address}
        onPress={ () => onAddressFocus({ locationId, address }) } />
      <GoogleMap coordinate={coordinate} />
    </View>
  )

}
