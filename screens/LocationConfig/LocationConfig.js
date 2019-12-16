import React from 'react';
import {
  Dimensions,
  View
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

import {
  styles
} from './style';

import {
  LocationType,
  Theme
} from '../../constants'

import {
  SButtonGroup
} from '../../components'

import FixedAddressView from './FixedAddressView'
import MobileAddressView from './MobileAddressView';

class Location extends React.Component {

  static navigationOptions = {
    title: 'Location',
    headerStyle: {
      backgroundColor: Theme.COLORS.PRIMARY,
    },
    headerTintColor: Theme.COLORS.WHITE,
  };

  componentDidMount() {
    this.props.fetchLocationType(1);
  }

  renderShowActivity(busy) {
    return (
      <ProgressBarAnimated
        width={Dimensions.get('window').width}
        backgroundColor='#0073ff'
        borderRadius={0}
        value={busy ? 50 : 0}
        barEasing={"bounce"}
        barAnimationDuration={150}
        height={5} />
    )
  }

  render() {
    let { 
      locationType,
      busy,
      addresses, 
      navigation, 
      addEmptyLocation,
      removeLocation
    } = this.props;

    return (
      <View style={styles.container}>

        {this.renderShowActivity(busy)}

        <View style={styles.content}>

          <SButtonGroup
            label="Location Type"
            buttons={Object.values(LocationType)}
            selected={locationType}
            isDisabled={locationType == null || busy}
            onChange={t => this.props.setLocationType(1, t)} />

          {
            locationType === LocationType.FIXED &&
            <FixedAddressView
              onAddressFocus={({ locationId, address }) => {
                navigation.navigate("Search", { locationId, address })
              }}
              navigation={navigation}
              addresses={addresses} />
          }

          {
            locationType === LocationType.MOBILE &&
            <MobileAddressView
              onAddressFocus={({ locationId, address }) => {
                navigation.navigate("Search", { locationId, address })
              }}
              busy={busy}
              onAddressRemove={ locationId => removeLocation(1, locationId) }
              addEmptyLocation={addEmptyLocation}
              addresses={addresses} />
          }
        </View>
      </View>
    )
  }
}


export default Location;

