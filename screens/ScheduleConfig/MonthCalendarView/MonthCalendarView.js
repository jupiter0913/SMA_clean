import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import {
    Ionicons
} from '@expo/vector-icons';

import {
    SText,
    SRoundButton,
    SAnimatedFlatlist
} from '../../../components'

import {
    scrollViewStyle,
    addBtnStyle
} from './style';

import {
    Theme
} from '../../../constants';


class MonthCalendarView extends React.Component {

    renderRemoveIcon = (scheduleId) => {

        let {
            busy,
            onAddressRemove
        } = this.props;

        return (
            <TouchableOpacity
                disabled={busy}
                onPress={() => {
                    !busy &&
                        onAddressRemove(scheduleId)
                }} >
                <Ionicons
                    name="md-remove-circle"
                    size={25}
                    color={
                        !busy ?
                            Theme.COLORS.ERROR :
                            Theme.COLORS.DISABLED_TEXT}
                />
            </TouchableOpacity>
        )
    }

    renderTextInput = ({ key: scheduleId, value: schedule }) => {

        let {
            busy,
            onAddressFocus
        } = this.props;

        let value = schedule ? schedule.address : null;

        return (
            <SText
                //key={scheduleId}
                value={value}
                onPress={() =>
                    onAddressFocus({
                        scheduleId,
                        address: schedule.address
                    })}
                disabled={busy}
                icon={this.renderRemoveIcon(scheduleId)} />
        );
    }

    render() {
        let {
            addresses,
            addEmptySchedule,
            busy
        } = this.props;

        if (!addresses) {
            return null;
        }

        const data = Object.keys(addresses).map( scheduleId => ({
            key: scheduleId,
            value: addresses[scheduleId]
        }));

        return (
            <>
                <FlatList
                    data={data}
                    renderItem={({ item }) => this.renderTextInput(item)}
                    keyExtractor={item => item.key}
                    style={scrollViewStyle.container}
                    contentContainerStyle={scrollViewStyle.contentContainer} />

                <View style={addBtnStyle.container}>
                    <SRoundButton
                        onPress={addEmptySchedule}
                        disabled={busy}>
                        <Text style={addBtnStyle.text}>+</Text>
                    </SRoundButton>
                </View>

            </>
        )

        /*

                <FlatList
                    data={Object.keys(addresses)}
                    renderItem={({ item }) => this.renderTextInput(item, addresses[item])}
                    keyExtractor={item => item}
                    style={scrollViewStyle.container}
                    contentContainerStyle={scrollViewStyle.contentContainer} />

                <SAnimatedFlatlist
                    items={Object.keys(addresses)}
                    inAnimation={"fadeIn"}
                    outAnimation={"fadeOut"}
                    duration={500}
                    rowItem={({item}) => (
                        this.renderTextInput(item, addresses[item])
                    )}
                    keyExtractor={item => item}

                    //keyExtractor={item => item}
                    style={scrollViewStyle.container}
                    //contentContainerStyle={scrollViewStyle.contentContainer} /> 
                    />
                    
        */
    }

}

export default MonthCalendarView;