import {  
    StyleSheet
} from 'react-native';

import { 
    Theme 
} from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    addBtnStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        padding:10,
        backgroundColor: '#555',
        width:'100%'        
    },
    Btntext:{
        fontSize: 20,
        textAlign: "center",
        color:'#fff'        
    },
    RoundBtn:{
        position: "absolute",
        right: 15,
        bottom: 15,
        padding: 2
    }

});

