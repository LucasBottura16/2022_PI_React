import React from "react";
import {
        View,
        Text,
        TouchableOpacity,
        Image
    } from "react-native"  
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'   

export default function Acessos(){

    const navigation = useNavigation();

    return(
        <View style={{backgroundColor:'#F7FCFB', flex:1, justifyContent:'flex-end', paddingBottom:20}}>
             <Text style={{fontWeight:'bold', fontSize:23, paddingHorizontal:5, textAlign:'center', color:'#2460DA'}}>Market Vendas: {'\n'} Aplicativo de Revenda de Produtos!</Text>
            <Image 
            source={require('../../Assets/Acessos.png')}
            style={{marginTop:120}}
            />
            <TouchableOpacity style={{backgroundColor:'#2460DA', width:'45%', marginTop:50, borderTopRightRadius:10, borderBottomRightRadius:10,height:61, justifyContent:'center'}} onPress={() => navigation.navigate('Login')}>
                <Text style={{color:'white', fontWeight:'300', fontSize:16, paddingLeft:35}}>FAZER LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#2460DA', width:'80%', marginTop:10, borderTopRightRadius:10, borderBottomRightRadius:10,height:61, justifyContent:'center'}} onPress={() => navigation.navigate('Empresa')}>
                <Text style={{color:'white', fontWeight:'300', fontSize:16, paddingLeft:35}}>ME CADASTRAR COMO EMPRESA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#2460DA', width:'90%', marginTop:10, borderTopRightRadius:10, borderBottomRightRadius:10,height:61, justifyContent:'center'}} onPress={() => navigation.navigate('Revendedor')}>
                <Text style={{color:'white', fontWeight:'300', fontSize:16, paddingLeft:35}}>ME CADASTRAR COMO REVENDEDOR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center', marginTop:10}} onPress={() => auth().signOut()}>
                <Text>saiba mais!</Text>
            </TouchableOpacity>
        </View>
    )
}