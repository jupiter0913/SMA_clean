import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { 
    setLocationAsync
} from '../../store'

import { SearchAddress } from './SearchAddress';

function mapStateToProps({ location }) {
    return {
        busy: location.get('busy'),
        addresses: location.get('addresses'),
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        setLocation: setLocationAsync
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withImmutablePropsToJS(SearchAddress)
);