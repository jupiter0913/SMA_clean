import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import moment from 'moment';
import { setLocale, addColor } from '../utils';
import Events from '../Events/Events';
import Header from '../Header/Header';
import styles from './TimeTableView.styles';

export const TIME_LABELS_COUNT = 25;

export default class TimeTableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoment: props.pivotDate,
    };
    const { pivotTime } = this.props;
    this.calendar = null;
    setLocale(props.locale);
    this.times = this.generateTimes(pivotTime);
  }

  componentDidMount() {
    // this.calendar.scrollTo({ y: (300), x: 0, animated: true });
    // requestAnimationFrame(() => {
    //   this.calendar.scrollTo({ y: (SCREEN_HEIGHT - 300), x: 0, animated: false });
    // });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDate) {
      this.setState({ currentMoment: nextProps.selectedDate });
    }
    if (nextProps.locale !== this.props.locale) {
      setLocale(nextProps.locale);
    }
  }

  generateTimes = (pivotTime) => {
    const times = [];
    for (let i = pivotTime; i < TIME_LABELS_COUNT; i += 1) {
      times.push(i);
    }
    return times;
  };

  render() {
    const {
      numberOfDays,
      headerStyle,
      formatDateHeader,
      onEventPress,
      pivotTime,
    } = this.props;
    const events = addColor(this.props.events);

    const { currentMoment } = this.state;
    // const dates = this.prepareDates(currentMoment, numberOfDays);
    const date = moment(currentMoment);
    const { format24h } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            style={headerStyle}
            formatDate={formatDateHeader}
            selectedDate={currentMoment}
            numberOfDays={numberOfDays}
          />
        </View>
        <ScrollView ref={this.props.scrollViewRef}>
          <View style={styles.scrollViewContent}>
            <View style={styles.timeColumn}>
              {/* {this.times.map(time => (
                <View key={time} style={styles.timeLabel}>
                  <Text style={styles.timeText}>{time === 12 ? 12 : time % 12}</Text>
                </View>
              ))} */}
              {this.times.map((time) => {
                let timeText
                if (time === 0) {
                  timeText = ``
                } else if (time < 12) {
                  timeText = !format24h ? `${time} AM` : time
                } else if (time === 12) {
                  timeText = !format24h ? `${time} PM` : time
                } else if (time === 24) {
                  timeText = !format24h ? `12 AM` : 0
                } else {
                  timeText = !format24h ? `${time - 12} PM` : time
                }
                // const { width, styles } = this.props
                return [
                  <Text
                    key={`timeLabel${time}`}
                    style={[styles.timeLabel, { top: time + 25 }]}
                  >
                    {timeText}
                  </Text>,
                ]
              })}
            </View>
            <View key={date} style={styles.eventsContainer}>
              <Events
                pivotTime={pivotTime}
                key={date}
                times={this.times}
                selectedDate={date.toDate()}
                numberOfDays={numberOfDays}
                onEventPress={onEventPress}
                events={events}
              />
            </View>
          </View>
          <View style={{ height: 20 }}></View>
        </ScrollView>
      </View>
    );
  }
}

TimeTableView.propTypes = {
  scrollViewRef: PropTypes.func,
  events: Events.propTypes.events,
  numberOfDays: PropTypes.oneOf([1, 3, 5, 6, 7]).isRequired,
  pivotTime: PropTypes.number,
  pivotDate: PropTypes.instanceOf(Date).isRequired,
  formatDateHeader: PropTypes.string,
  onEventPress: PropTypes.func,
  headerStyle: PropTypes.object,
  locale: PropTypes.string,
};

TimeTableView.defaultProps = {
  events: [],
  locale: 'en',
  pivotTime: 8,
  formatDateHeader: "ddd",
};
