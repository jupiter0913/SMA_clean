import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LocationConfigScreen from '../screens/LocationConfig';
import SearchAddressScreen from '../screens/SearchAddress';

const AppStack = createStackNavigator({
  Location: LocationConfigScreen,
  Search: SearchAddressScreen
});

export default createAppContainer(AppStack);