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
  ScheduleType,
  Theme
} from '../../constants'

import {
  SButtonGroup
} from '../../components'

import WeekCalendarView from './WeekCalendarView'
import MonthCalendarView from './MonthCalendarView';

class Schedule extends React.Component {

  static navigationOptions = {
    title: 'Schedule',
    headerStyle: {
      backgroundColor: Theme.COLORS.PRIMARY,
    },
    headerTintColor: Theme.COLORS.WHITE,
  };

  componentDidMount() {
    this.props.fetchScheduleType(1);
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
      scheduleType,
      busy,
      addresses, 
      navigation, 
      addEmptySchedule,
      removeSchedule
    } = this.props;

    return (
      <View style={styles.container}>

        {this.renderShowActivity(busy)}

        <View style={styles.content}>

          <SButtonGroup
            label="Schedule Type"
            buttons={Object.values(ScheduleType)}
            selected={scheduleType}
            isDisabled={scheduleType == null || busy}
            onChange={t => this.props.setScheduleType(1, t)} />

          {
            scheduleType === ScheduleType.WEEK &&
            <WeekCalendarView
              onAddressFocus={({ scheduleId, address }) => {
                navigation.navigate("Search", { scheduleId, address })
              }}
              navigation={navigation}
              addresses={addresses} />
          }

          {
            scheduleType === ScheduleType.MONTH &&
            <MonthCalendarView
              onAddressFocus={({ scheduleId, address }) => {
                navigation.navigate("Search", { scheduleId, address })
              }}
              busy={busy}
              onAddressRemove={ scheduleId => removeSchedule(1, scheduleId) }
              addEmptySchedule={addEmptySchedule}
              addresses={addresses} />
          }
        </View>
      </View>
    )
  }
}


export default Schedule;

