import React from "react";
import { View, Text, SafeAreaView, Image, ImageBackground, Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInput, Button, Card, Snackbar } from 'react-native-paper';
import LogoImg from '../../../assets/img/logo.png';
import PatronCacaoImg from '../../../assets/img/patron-cacao.jpeg';
import { LinearGradient } from 'expo-linear-gradient';
import api from "../../utils/axios";


const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

const LoginScreen = ({navigation} : any): JSX.Element => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [hasError, setHasError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    const login = () => {
        api.post('/login', {
            email: email,
            password: password
        }).then(async (response) => {
            console.log(response.data);
            // Save user data in local storage
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
            navigation.navigate('home');
        }).catch((error) => {
            console.log(error.response.data);
            setErrorMsg(error.response.data.message);
            setHasError(true);
        })
    }
    return (
        <SafeAreaView>
            <ImageBackground source={PatronCacaoImg} resizeMode="repeat" style={{ height: screenHeight }}>
                <LinearGradient colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.7)']} style={{ height: screenHeight }}
                    end={{ x: 2, y: 2}}
                >
                    <View style={{ alignItems: 'center', marginTop: 100 }}>
                        <Image source={LogoImg} style={{ width: 120, height: 120 }} resizeMode="contain" />
                        <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold' }}>Registro de pesaje</Text>
                    </View>
                    <View style={{ padding: 30, marginTop: 50 }}>
                        <Card>
                            <Card.Content >
                                <TextInput
                                    mode="outlined"
                                    label="Email"
                                    keyboardType="email-address"
                                    value={email}
                                    onChangeText={val => setEmail(val)}
                                />
                                <TextInput
                                    style={{ marginTop: 15 }}
                                    mode="outlined"
                                    label="Contraseña"
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={val => setPassword(val)}
                                />
                                <Button style={{ marginTop: 10 }} mode="contained" onPress={login}>
                                    Ingresar
                                </Button>
                            </Card.Content>
                        </Card>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <Snackbar
                visible={hasError}
                onDismiss={() => {setErrorMsg(""); setHasError(false)}}
            >
                {errorMsg}
            </Snackbar>
        </SafeAreaView>
    )
}

export default LoginScreen;