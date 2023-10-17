import { ScrollView } from "react-native"
import { Appbar } from "react-native-paper"

const Create = ({navigation}: any) => {
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