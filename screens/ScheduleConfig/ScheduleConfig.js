import React from 'react';
import {
  Dimensions,
  View,
  Button
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

  saveData = async () => {

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
            />

          }

          {
            scheduleType === ScheduleType.MONTH &&
            <MonthCalendarView
            />
          }
        </View>
        <View>
          <Button color={Theme.COLORS.SELECTED} title="change weeklly schedule" onPress={() => this.props.navigation.navigate('WeeklySchedule')}></Button>
        </View>
      </View>
    ) 
  }
}


export default Schedule;

