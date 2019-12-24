import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Button
} from 'react-native';
// import TimeTableView, { genTimeBlock } from 'react-native-timetable';
import TimeTableView, { genTimeBlock } from '../../../components/STimetable';
const events_data = [
  {
    title: "Interview",
    startTime: genTimeBlock("MON", 5),
    endTime: genTimeBlock("MON", 6, 50),
    location: "interview room",
    extra_descriptions: ["Yuri"],
  },

  {
    title: "Meeting",
    startTime: genTimeBlock("MON", 8),
    endTime: genTimeBlock("MON", 8, 60),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Interview",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 9, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Mandarin",
    startTime: genTimeBlock("TUE", 6),
    endTime: genTimeBlock("TUE", 8, 50),
    location: "Language Center",
    extra_descriptions: ["Chen"],
  },

  {
    title: "Club Activity",
    startTime: genTimeBlock("THU", 8),
    endTime: genTimeBlock("THU", 10, 50),
    location: "Activity Center",
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
    backgroundColor: '#81E1B8'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
