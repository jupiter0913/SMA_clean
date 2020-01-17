// @flow
import {
  VirtualizedList,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import React from 'react'

import styleConstructor from './style'

import DayView from './DayView'

import {
  SRoundWeekButton
} from '../../components'


export default class EventCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.styles = styleConstructor(props.styles)
    this.state = {
      date: moment(this.props.initDate),
      index: this.props.size,
      monSelected: true,
      tueSelected: false,
      wedSelected: false,
      thuSelected: false,
      friSelected: false,
      satSelected: false,
      sunSelected: false,
    }
  }

  static defaultProps = {
    size: 30,
    initDate: new Date(),
    formatHeader: 'DD MMMM YYYY'
  }

  _getItemLayout(data, index) {
    const { width } = this.props
    return { length: width, offset: width * index, index }
  };

  _getItem(events, index) {
    const date = moment(this.props.initDate).add(index - this.props.size, 'days')
    return _.filter(events, event => {
      const eventStartTime = moment(event.start)
      return eventStartTime >= date.clone().startOf('day') &&
        eventStartTime <= date.clone().endOf('day')
    })
  }

  _renderItem({ index, item }) {
    const { width, format24h, initDate, scrollToFirst } = this.props
    const date = moment(initDate).add(index - this.props.size, 'days')
    return (
      <DayView
        date={date}
        index={index}
        format24h={format24h}
        formatHeader={this.props.formatHeader}
        headerStyle={this.props.headerStyle}
        renderEvent={this.props.renderEvent}
        eventTapped={this.props.eventTapped}
        events={item}
        width={width}
        styles={this.styles}
        scrollToFirst={scrollToFirst}
      />
    )
  }

  _goToPage(index) {
    if (index <= 0 || index >= this.props.size * 2) {
      return
    }
    const date = moment(this.props.initDate).add(index - this.props.size, 'days')
    this.refs.calendar.scrollToIndex({ index, animated: false })
    this.setState({ index, date })
  }

  btnSelectedEvent(date) {
    switch (date) {
      case 'mon':
        this.setState({
          monSelected: true,
          tueSelected: false,
          wedSelected: false,
          thuSelected: false,
          friSelected: false,
          satSelected: false,
          sunSelected: false
        });
        break;
      case 'tue':
        this.setState({
          monSelected: false,
          tueSelected: true,
          wedSelected: false,
          thuSelected: false,
          friSelected: false,
          satSelected: false,
          sunSelected: false
        });
        break;
      case 'wed':
        this.setState({
          monSelected: false,
          tueSelected: false,
          wedSelected: true,
          thuSelected: false,
          friSelected: false,
          satSelected: false,
          sunSelected: false
        });
        break;
      case 'thu':
        this.setState({
          monSelected: false,
          tueSelected: false,
          wedSelected: false,
          thuSelected: true,
          friSelected: false,
          satSelected: false,
          sunSelected: false
        });
        break;
      case 'fri':
        this.setState({
          monSelected: false,
          tueSelected: false,
          wedSelected: false,
          thuSelected: false,
          friSelected: true,
          satSelected: false,
          sunSelected: false
        });
        break;
      case 'sat':
        this.setState({
          monSelected: false,
          tueSelected: false,
          wedSelected: false,
          thuSelected: false,
          friSelected: false,
          satSelected: true,
          sunSelected: false
        });
        break;
      case 'sun':
        this.setState({
          monSelected: false,
          tueSelected: false,
          wedSelected: false,
          thuSelected: false,
          friSelected: false,
          satSelected: false,
          sunSelected: true
        });
        break;
    }
  }

  render() {
    const {
      width,
      virtualizedListProps,
      events,
      initDate,
      formatHeader
    } = this.props
    return (
      <View style={[this.styles.container, { width }]}>
        <View style={this.styles.addBtnStyle}>
          <SRoundWeekButton selected={this.state.monSelected} onPress={() => this.btnSelectedEvent('mon')}>
            {this.state.monSelected ?
              <Text style={this.styles.BtnSelectedText}>M</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>M</Text>
            }
          </SRoundWeekButton>
          <SRoundWeekButton selected={this.state.tueSelected} onPress={() => this.btnSelectedEvent('tue')}>
            {this.state.tueSelected ?
              <Text style={this.styles.BtnSelectedText}>T</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>T</Text>
            }
          </SRoundWeekButton>
          <SRoundWeekButton selected={this.state.wedSelected} onPress={() => this.btnSelectedEvent('wed')}>
            {this.state.wedSelected ?
              <Text style={this.styles.BtnSelectedText}>W</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>W</Text>
            }
          </SRoundWeekButton>
          <SRoundWeekButton selected={this.state.thuSelected} onPress={() => this.btnSelectedEvent('thu')}>
            {this.state.thuSelected ?
              <Text style={this.styles.BtnSelectedText}>TH</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>TH</Text>
            }
          </SRoundWeekButton>
          <SRoundWeekButton selected={this.state.friSelected} onPress={() => this.btnSelectedEvent('fri')}>
            {this.state.friSelected ?
              <Text style={this.styles.BtnSelectedText}>F</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>F</Text>
            }
          </SRoundWeekButton>
          <SRoundWeekButton selected={this.state.satSelected} onPress={() => this.btnSelectedEvent('sat')}>
            {this.state.satSelected ?
              <Text style={this.styles.BtnSelectedText}>S</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>S</Text>
            }
          </SRoundWeekButton>
          <SRoundWeekButton selected={this.state.sunSelected} onPress={() => this.btnSelectedEvent('sun')}>
            {this.state.sunSelected ?
              <Text style={this.styles.BtnSelectedText}>SU</Text>
              :
              <Text style={this.styles.BtnUnselectedText}>SU</Text>
            }
          </SRoundWeekButton>
        </View>
        <VirtualizedList
          ref='calendar'
          windowSize={2}
          initialNumToRender={2}
          initialScrollIndex={this.props.size}
          data={events}
          getItemCount={() => this.props.size * 2}
          getItem={this._getItem.bind(this)}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={this._getItemLayout.bind(this)}
          horizontal
          pagingEnabled
          renderItem={this._renderItem.bind(this)}
          style={{ width: width }}
          onMomentumScrollEnd={(event) => {
            const index = parseInt(event.nativeEvent.contentOffset.x / width)
            const date = moment(this.props.initDate).add(index - this.props.size, 'days')
            this.setState({ index, date })
          }}
          {...virtualizedListProps}
        />
      </View>
    )
  }
}
