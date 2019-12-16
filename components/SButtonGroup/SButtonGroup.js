import React, { 
    useState,
    useEffect
} from 'react';

import {
    View,
    Button,
    Text
  } from 'react-native';

import {
    btnGroupStyle
} from './style';

import {
    Theme
} from '../../constants'

const SButtonGroupItem = props => {
    let { 
        value,
        selectedItem,
        onSelected,
        isDisabled
    } = props;
    
    return (
        <View style={btnGroupStyle.button}>
            <Button
                disabled={ isDisabled }
                color={
                    value === selectedItem ? 
                        Theme.COLORS.PRIMARY : 
                        Theme.COLORS.UNSELECTED 
                }
                title={value}
                onPress={() => onSelected(value)} />
        </View>
    )
}

export const SButtonGroup = props => {

    let {
        onChange,
        buttons,
        label,
        selected,
        style,
        isDisabled
    } = props;

    return (
        <View style={[btnGroupStyle.container, style]}>

            { label && 
                <Text style={btnGroupStyle.text}> {label} </Text> }

            <View style={btnGroupStyle.buttonGroup}>
                { buttons.map( button =>
                    <SButtonGroupItem
                        key={button}
                        value={button} 
                        selectedItem={selected}
                        isDisabled={isDisabled}
                        onSelected={onChange} /> )}
            </View>

        </View>
    )
}