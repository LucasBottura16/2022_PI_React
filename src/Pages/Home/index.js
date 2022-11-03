import React from "react";
import {
        View,
        Text,
        TouchableOpacity
    } from "react-native"
import auth from '@react-native-firebase/auth'    

export default function Home(){
    return(
        <View>
            <Text>Tela de Home</Text>
            <TouchableOpacity style={{ height:40, width:'90%', backgroundColor:'green', marginTop:10, justifyContent:'center', alignItems:'center'}} onPress={() => auth().signOut()}>
                <Text style={{ color:'white'}}>sair</Text>
            </TouchableOpacity>
        </View>
    )
}