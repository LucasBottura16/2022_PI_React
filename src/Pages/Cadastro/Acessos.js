import React from "react";
import {
        View,
        Text,
        TouchableOpacity
    } from "react-native"  
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

export default function Acessos(){
    return(
        <View>
            <Text>Tela de Acessos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>tela de login</Text>
            </TouchableOpacity>
        </View>
    )
}