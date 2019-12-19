import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LocationConfigScreen from '../screens/LocationConfig';
import SearchAddressScreen from '../screens/SearchAddress';
import ScheduleConfigScreen from '../screens/ScheduleConfig';
// import SearchAddressScreen from '../screens/CalendarView';

const AppStack = createStackNavigator({
  Schedule: ScheduleConfigScreen,
  Location: LocationConfigScreen,
  Search: SearchAddressScreen,
  // Calendar:CalendarViewScreen
});

export default createAppContainer(AppStack);