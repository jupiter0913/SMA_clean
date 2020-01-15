import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { 
    fetchScheduleTypeAsync,
    // fetchAddressesAsync,
    setScheduleTypeAsync,
    // addEmptyScheduleAsync,
    // removeScheduleAsync
} from '../../store'

import Schedule from './ScheduleConfig';

function mapStateToProps({ schedule }) {
    return {
        busy: schedule.get('busy'),
        scheduleType: schedule.get('scheduleType'),
        failedReason: schedule.get('failedReason')
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        fetchScheduleType: fetchScheduleTypeAsync,
        setScheduleType: setScheduleTypeAsync,
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withImmutablePropsToJS(Schedule)
);