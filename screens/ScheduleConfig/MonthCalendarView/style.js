import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
   Theme 
} from '../../../constants'

export const WeekCalendarViewStyle = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 22,
  },
  headerStyle: {
    backgroundColor: '#4286f4',
  },
  changeWeekButton: {
    position: 'absolute',
    bottom: 35,
    backgroundColor: '#333333'
  }
});