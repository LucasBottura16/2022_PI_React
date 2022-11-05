import React from "react";
import {
        View,
        Text,
        TouchableOpacity
    } from "react-native"  
import { useNavigation } from "@react-navigation/native";

export default function Acessos(){

    const navigation = useNavigation();

    return(
        <View>
            <Text>Tela de Acessos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>tela de login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Empresa')}>
                <Text>tela de Cadastro de Empresa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Revendedor')}>
                <Text>tela de Revendedor</Text>
            </TouchableOpacity>
        </View>
    )
}