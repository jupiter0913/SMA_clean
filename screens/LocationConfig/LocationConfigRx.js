import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { 
    fetchLocationTypeAsync,
    fetchAddressesAsync,
    setLocationTypeAsync,
    addEmptyLocationAsync,
    removeLocationAsync
} from '../../store'

import Location from './LocationConfig';

function mapStateToProps({ location }) {
    return {
        busy: location.get('busy'),
        locationType: location.get('locationType'),
        addresses: location.get('addresses'),
        failedReason: location.get('failedReason')
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        fetchLocationType: fetchLocationTypeAsync,
        fetchAddresses: fetchAddressesAsync,
        setLocationType: setLocationTypeAsync,
        addEmptyLocation: addEmptyLocationAsync ,
        removeLocation: removeLocationAsync
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withImmutablePropsToJS(Location)
);