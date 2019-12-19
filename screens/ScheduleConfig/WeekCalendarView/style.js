import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
   Theme 
} from '../../../constants'

export const WeekCalendarViewStyle = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    flex: 1,
    width: Dimensions.get('window').width - 10,
    flexDirection: 'column',
    //backgroundColor: 'pink',
  }
});

export const mapStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Theme.COLORS.WHITE,
    marginBottom: 5
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: Theme.COLORS.PRIMARY,
    borderWidth: 2
  },
  map: {
    width: Dimensions.get('window').width - 15,
  },
})