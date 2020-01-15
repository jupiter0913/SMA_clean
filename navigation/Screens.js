import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LocationConfigScreen from '../screens/LocationConfig';
import SearchAddressScreen from '../screens/SearchAddress';
import ScheduleConfigScreen from '../screens/ScheduleConfig';
import WeeklyScheduleScreen from '../screens/WeeklySchedule'

const AppStack = createStackNavigator({
  Schedule: ScheduleConfigScreen,
  Location: LocationConfigScreen,
  Search: SearchAddressScreen,
  WeeklySchedule:WeeklyScheduleScreen
});

export default createAppContainer(AppStack);