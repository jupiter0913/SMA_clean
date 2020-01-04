import React, { useState } from 'react';
import Modal from 'react-native-modals';
import DatePicker from 'react-native-datepicker'
import { View, Button, Text, TextInput } from 'react-native';
import { styles } from './style';
import { SText, STextInput } from '../../components'
import cloneDeep from 'lodash/cloneDeep'

const ModalDialog = props => {

    const handleCloseButton = () => {
        props.closeEvent();
    }

    const [getDate, setDate] = useState("1:00");
    const [getDate1, setDate1] = useState("2:00");
    const [getAddress, setAddress] = useState("4504 Celiton ave, Los Angeles, CA");
    const [getAddress1, setAddress1] = useState("21 Palm st, Culver City, CA");

    const handleChangeDate = (date) => {
        setDate(date);
    }

    const handleChangeDate1 = (date) => {
        setDate1(date);
    }
    const handleChangeAddress = (address) => {
        setAddress(address);
    }
    const handleChangeAddress1 = (address) => {
        setAddress1(address);
    }


    return (
        <Modal
            animationType={"fade"}
            transparent={false}
            visible={props.isVisible}
            onRequestClose={() => { console.log("Modal has been closed.") }}>
            {/*All views of Modal*/}
            <View style={styles.modal}>
                <View style={styles.modalTimePicker}>
                    <View>
                        <Text style={{ marginTop: 20, marginLeft: 10 }}>start time</Text>
                        <DatePicker
                            style={{ padding: 5, width: 180 }}
                            date={getDate}
                            mode="time"
                            placeholder="select date"
                            format="HH:mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: 5,
                                    top: 4,
                                    marginRight: 10
                                },
                                dateInput: {
                                    marginRight: 10
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={handleChangeDate}
                        />
                    </View>
                    <View>
                        <Text style={{ marginTop: 20, marginLeft: 10 }}>end time</Text>
                        <DatePicker
                            style={{ padding: 5, width: 180 }}
                            date={getDate1}
                            mode="time"
                            placeholder="select date"
                            format="HH:mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: 5,
                                    top: 4,
                                    marginRight: 10
                                },
                                dateInput: {
                                    marginRight: 10
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={handleChangeDate1}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ marginTop: 20, marginLeft: 10 }}>address</Text>
                    <TextInput style={{ margin: 15, height: 40, borderColor: '#505050', padding: 5, backgroundColor: '#a9a9a9', borderWidth: 1 }}
                        value={getAddress}
                        underlineColorAndroid="transparent"
                        placeholder="Location"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={handleChangeAddress} />

                    <TextInput style={{ margin: 15, height: 40, borderColor: '#505050', padding: 5, backgroundColor: '#a9a9a9', borderWidth: 1 }}
                        value={getAddress1}
                        underlineColorAndroid="transparent"
                        placeholder="Location"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={handleChangeAddress1} />
                </View>
                <View style={styles.modalBtn}>
                    <Button color="#505050" title="DONE" onPress={handleCloseButton} />
                </View>
            </View>
        </Modal>
    );
};

export default ModalDialog;
