import React, { useState } from 'react';

import ModalDialog from './ModalDialog';

import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Icon,
    Button
} from 'react-native';

import {
    SRoundButton
} from '../../components'


import {
    styles,
} from './style';

import {
    Theme
} from '../../constants'

import SEventCalendar from '../../components/SDaySchedule'

let { width } = Dimensions.get('window')
state = {
    events: [
        { start: '2020-01-12 22:30:00', end: '2020-01-12 23:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-13 01:00:00', end: '2020-01-13 04:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-14 03:10:00', end: '2020-01-14 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-15 00:10:00', end: '2020-01-15 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-16 12:10:00', end: '2020-01-16 13:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-17 12:10:00', end: '2020-01-17 13:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-18 12:10:00', end: '2020-01-18 15:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-19 12:10:00', end: '2020-01-19 16:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-20 12:10:00', end: '2020-01-20 14:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-21 12:10:00', end: '2020-01-21 15:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-22 12:10:00', end: '2020-01-22 20:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-23 12:10:00', end: '2020-01-23 21:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-24 12:10:00', end: '2020-01-24 16:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-25 12:10:00', end: '2020-01-25 14:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2020-01-26 12:10:00', end: '2020-01-26 15:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
    ]
}

// _eventTapped = (event) => {
//     alert(JSON.stringify(event))
// }

const LoginButton = () => (
    <TouchableOpacity >
        <Icon
            family="Entypo"
            size={16}
            name="user"
        // color={theme.COLORS[isWhite ? 'WHITE' : 'WHITE']}
        />
    </TouchableOpacity>
);



export const WeeklySchedule = props => {
    const [getModalDialogStatus, setModalDialogStatue] = useState(false);

    const handleClickSRoundButton = () => {
        setModalDialogStatue(true);
    }

    const closeModalDialog = () => {
        setModalDialogStatue(false);
    }

    return (

        <View style={styles.container}>
            <ModalDialog isVisible={getModalDialogStatus} closeEvent={closeModalDialog} />
            <View style={{ flex: 1 }}>
                <SEventCalendar
                    style={styles.eventCalendar}
                    eventTapped={handleClickSRoundButton}
                    events={state.events}
                    width={width}
                    numberOfDay={60}
                    scrollToFirst
                />
                <View style={styles.RoundBtn}>
                    <SRoundButton onPress={handleClickSRoundButton}>
                        <Text style={styles.Btntext}>+</Text>
                    </SRoundButton>
                </View>
                <View>
                    <Button color={Theme.COLORS.SELECTED} title="FINISH" onPress={() => props.navigation.navigate('Schedule')}></Button>
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

