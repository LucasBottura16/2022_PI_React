import React from "react";
import {
        View,
        Text,
        TouchableOpacity,
        Image, 
        Alert
    } from "react-native"  
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'   

export default function Acessos(){

    const navigation = useNavigation();

    function saiba(){
        Alert.alert('Quem Somos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.')
    }

    return(
        <View style={{backgroundColor:'#F7FCFB', flex:1, justifyContent:'flex-end', paddingBottom:20}}>
             <Text style={{fontWeight:'bold', fontSize:23, paddingHorizontal:5, textAlign:'center', color:'#2460DA'}}> Aplicativo de Revenda de Produtos! {'\n'} MARKET VENDAS</Text>
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
            <TouchableOpacity style={{alignItems:'center', marginTop:10}} onPress={saiba}>
                <Text>saiba mais!</Text>
            </TouchableOpacity>
        </View>
    )
}