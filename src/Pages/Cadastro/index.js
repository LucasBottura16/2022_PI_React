import React, {useState} from "react";
import {    
        View,
        Text, 
        TextInput,
        TouchableOpacity,
        Alert
        } from "react-native";
import auth from '@react-native-firebase/auth'

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logon(){
        if( email === '' || password === ''){
            Alert.alert('Algo deu errado', 'Preencha todos os campos')
            return;
        };

        auth().createUserWithEmailAndPassword(email, password)
        .catch(error => (
            Alert.alert(error.code, error.message)
        ));
    }

    function login(){
        if( email === '' || password === ''){
            Alert.alert('Algo deu errado', 'Preencha todos os campos')
            return;
        };

        auth().signInWithEmailAndPassword(email, password)
        .catch(error => (
            Alert.alert(error.code, error.message)
        ));
    }

    return(
        <View style={{ alignItems:'center', flex:1, justifyContent:'center'}}>
            <Text>Tela de cadastro</Text>
            <TextInput 
                value={email}
                onChangeText={value => setEmail(value)}
                style={{ borderWidth:1, height:40, width:'90%', marginTop:35, paddingLeft:10, borderRadius:5}}
                placeholder='Email'
                placeholderTextColor={'green'}
            />
            <TextInput 
                value={password}
                onChangeText={value => setPassword(value)}
                style={{ borderWidth:1, height:40, width:'90%', marginTop:10, paddingLeft:10, borderRadius:5}}
                placeholder='Senha'
                placeholderTextColor={'green'}
            />
            <TouchableOpacity style={{ height:40, width:'90%', backgroundColor:'green', marginTop:10, justifyContent:'center', alignItems:'center', borderRadius:5}} onPress={logon}>
                <Text style={{ color:'white'}}>Criar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:40, width:'90%', backgroundColor:'blue', marginTop:5, justifyContent:'center', alignItems:'center', borderRadius:5}} onPress={login}>
                <Text style={{ color:'white'}}>Entrar no App</Text>
            </TouchableOpacity>
        </View>
    )
}