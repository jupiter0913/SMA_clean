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

import SEventCalendar from '../../components/SDaySchedule'

let { width } = Dimensions.get('window')
state = {
    events: [
        { start: '2019-12-26 22:30:00', end: '2019-12-26 23:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-27 01:00:00', end: '2019-12-27 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-09 03:10:00', end: '2019-12-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-09 00:10:00', end: '2019-12-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2019-12-10 12:10:00', end: '2019-12-10 13:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
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
            <View style={{ flex:1}}>
                <SEventCalendar
                    style={styles.eventCalendar}
                    // eventTapped={_eventTapped.bind(this)}
                    eventTapped={handleClickSRoundButton}
                    events={state.events}
                    width={width}
                    numberOfDay={60}
                    initDate={'2019-12-27'}
                    scrollToFirst
                />
                <View style={styles.RoundBtn}>
                    <SRoundButton onPress={handleClickSRoundButton}>
                        <Text style={styles.Btntext}>+</Text>
                    </SRoundButton>
                </View>
                <View>
                    <Button color="#0e0e0e" title="FINISH" onPress={() => props.navigation.navigate('Schedule')}></Button>
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

