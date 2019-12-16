import React, { 
    useState,
    useEffect 
} from 'react';

import {
    View,
    TextInput
} from 'react-native';

import {
    textInputStyle,
} from './style';

export const STextInput = props => {
 
    let { 
        value,
        placeholder, 
        style, 
        onChangeText, 
        onFocus 
    } = props;

    const [_text, _onChangeText] = useState(value);   

    useEffect(() => {
        _onChangeText(value);
    }, [value]);

    return ( 
        <View style={[textInputStyle.container, style]}>
            <TextInput
                editable={!!value}
                style={[
                    textInputStyle.textInput,
                    !value ? textInputStyle.textInputDisabled : {}
                ]}
                onFocus={onFocus}
                placeholder={placeholder}
                value={_text} 
                onChangeText={ text => {
                    console.log(text);
                    _onChangeText(text);
                    onChangeText ? onChangeText(text) : null;
                }}/>
        </View>
    )
}