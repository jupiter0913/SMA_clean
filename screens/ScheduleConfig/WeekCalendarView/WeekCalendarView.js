import React from 'react';
import {
  View,
  Alert,
} from 'react-native';

import {
  WeekCalendarViewStyle
} from './style'

import WeekView, { addLocale } from 'react-native-week-view';

addLocale('fr', {
  months: 'January_February_March_April_may_June__July_August_September_October_November_December'.split('_'),
  monthsShort: 'Jan._Feb._Mar._Apr._May._Jun._Jul._Aug._Sep._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  weekdaysShort: 'Sun._Mon._Tue._Wed._Thu._Fri._Sat.'.split('_'),
});

  selectedDate = new Date();

  generateDates = (hours, minutes) => {
    const date = new Date();
    date.setHours(date.getHours() + hours);
    if (minutes != null) {
      date.setMinutes(minutes);
    }
    return date;
  };

    const events = [
      {
        id: 1,
        description: 'Event 1',
        startDate: this.generateDates(0),
        endDate: this.generateDates(2),
        color: 'blue',
      },
      {
        id: 2,
        description: 'Event 2',
        startDate: this.generateDates(1),
        endDate: this.generateDates(4),
        color: 'red',
      },
      {
        id: 3,
        description: 'Event 3',
        startDate: this.generateDates(-5),
        endDate: this.generateDates(-3),
        color: 'green',
      },
    ];



export default WeekSection = props => {

  return (
    <View style={WeekCalendarViewStyle.container}>
    <WeekView
      events={events}
      selectedDate={this.selectedDate}
      numberOfDays={3}
      onEventPress={(event) => Alert.alert('eventId:' + event.id)}
      headerStyle={WeekCalendarViewStyle.headerStyle}
      formatDateHeader="MMM D"
      locale="fr"
    />
  </View>
  )

}
