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


class MobileAddressView extends React.Component {

    renderRemoveIcon = (locationId) => {

        let {
            busy,
            onAddressRemove
        } = this.props;

        return (
            <TouchableOpacity
                disabled={busy}
                onPress={() => {
                    !busy &&
                        onAddressRemove(locationId)
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

    renderTextInput = ({ key: locationId, value: location }) => {

        let {
            busy,
            onAddressFocus
        } = this.props;

        let value = location ? location.address : null;

        return (
            <SText
                //key={locationId}
                value={value}
                onPress={() =>
                    onAddressFocus({
                        locationId,
                        address: location.address
                    })}
                disabled={busy}
                icon={this.renderRemoveIcon(locationId)} />
        );
    }

    render() {
        let {
            addresses,
            addEmptyLocation,
            busy
        } = this.props;

        if (!addresses) {
            return null;
        }

        const data = Object.keys(addresses).map( locationId => ({
            key: locationId,
            value: addresses[locationId]
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
                        onPress={addEmptyLocation}
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

export default MobileAddressView;