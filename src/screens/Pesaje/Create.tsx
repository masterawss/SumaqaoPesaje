import { ScrollView } from "react-native"
import { Appbar } from "react-native-paper"
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import { useEffect, useState } from "react";

const Create = ({navigation}: any) => {
    const [connectedList ,setConnectedList] = useState<any>();
    useEffect(() => {
        getConnectedDevices()
    }, [])

    const getConnectedDevices = async () => {
        try {
            const connected = await RNBluetoothClassic.getConnectedDevices();
            console.log('connected', connected)
            setConnectedList(connected);
        } catch (err) {
            // Error if Bluetooth is not enabled
            // Or there are any issues requesting paired devices
            console.log("ERORRRRR", err);
        }
    }

    return (
        <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <Appbar.Content title="Registro de pesaje" />
            </Appbar.Header>
        </ScrollView>
    )
}

export default Create