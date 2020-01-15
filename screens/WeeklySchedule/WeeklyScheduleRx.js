import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { 
    setWeeklyScheduleAsync
} from '../../store'

import { WeeklySchedule } from './WeeklySchedule';

function mapStateToProps({ location }) {
    return {
        busy: location.get('busy'),
        addresses: location.get('addresses'),
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        setWeeklySchedule: setWeeklyScheduleAsync
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withImmutablePropsToJS(WeeklySchedule)
);