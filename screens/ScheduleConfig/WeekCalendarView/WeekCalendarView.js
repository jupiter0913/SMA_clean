import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Button
} from 'react-native';

import TimeTableView, { genTimeBlock } from '../../../components/STimetable';
const events_data = [
  {
    title: "Interview",
    startTime: genTimeBlock("MON", 5),
    endTime: genTimeBlock("MON", 9, 50),
    location: "interview room",
    extra_descriptions: ["Yuri"],
  },

  {
    title: "Interview",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 12, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },


];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 7;
    this.pivotDate = genTimeBlock('mon');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={1}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#505050'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
