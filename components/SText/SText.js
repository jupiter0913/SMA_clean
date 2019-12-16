import React from 'react';

import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import {
    stextStyle,
} from './style';

export const SText = props => {
 
    let { 
        value,
        style, 
        onPress,
        icon,
        disabled
    } = props;

    return ( 

        <View style={[
            stextStyle.container, 
            style,
            disabled ? stextStyle.containerDisabled : {} ]}>

            <TouchableWithoutFeedback 
                onPress={ () => { !disabled && onPress() }}
                disabled={ disabled }>

                <View style={stextStyle.touchable}>
                    <Text style={[ 
                        stextStyle.text,
                        disabled ? stextStyle.textDisabled : {} ]}>
                        {value}
                    </Text> 
                </View>

            </TouchableWithoutFeedback>

            <View style={stextStyle.icon}>
                { icon }
            </View>

        </View>

    )
}