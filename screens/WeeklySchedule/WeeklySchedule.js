import React from 'react'

import {
    View,
    Dimensions,
    Text
} from 'react-native';

import {
    SRoundButton
} from '../../components'


import {
    styles,
} from './style';

import SEventCalendar from '../../components/SDaySchedule'

let { width } = Dimensions.get('window')
this.state = {
    events: [
        { start: '2019-12-06 22:30:00', end: '2019-12-06 23:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-07 00:30:00', end: '2019-12-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-09 03:10:00', end: '2019-12-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-09 00:10:00', end: '2019-12-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-10 12:10:00', end: '2019-12-10 13:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
    ]
}

_eventTapped = (event) => {
    alert(JSON.stringify(event))
}

export const WeeklySchedule = props => {
    return (

        <View style={styles.container}>
            <View style={styles.addBtnStyle}>
                <SRoundButton>
                    <Text style={styles.Btntext}>M</Text>
                </SRoundButton>
                <SRoundButton>
                    <Text style={styles.Btntext}>T</Text>
                </SRoundButton>
                <SRoundButton>
                    <Text style={styles.Btntext}>W</Text>
                </SRoundButton>
                <SRoundButton>
                    <Text style={styles.Btntext}>TH</Text>
                </SRoundButton>
                <SRoundButton>
                    <Text style={styles.Btntext}>F</Text>
                </SRoundButton>
                <SRoundButton>
                    <Text style={styles.Btntext}>S</Text>
                </SRoundButton>
                <SRoundButton>
                    <Text style={styles.Btntext}>SU</Text>
                </SRoundButton>
                {/* <LoginButton key='login-loacation' />   
      <Text key='login-user' color='white'>Jim</Text> */}
            </View>

            <View style={{ flex: 1, marginTop: 20 }}>
                <SEventCalendar
                    style={styles.eventCalendar}
                    eventTapped={this._eventTapped.bind(this)}
                    events={this.state.events}
                    width={width}
                    numberOfDay={60}
                    initDate={'2019-12-07'}
                    scrollToFirst
                />
                <View style={styles.RoundBtn}>
                <SRoundButton>
                    <Text style={styles.Btntext}>+</Text>
                </SRoundButton>
                </View>
            </View>
        </View>
    );
}

WeeklySchedule.navigationOptions = {
    headerTitle: 'Weekly Schedule',
    headerStyle: {
        backgroundColor: '#1c1c1c',
    },
    headerTintColor: '#fff',
};

