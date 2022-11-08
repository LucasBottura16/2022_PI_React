import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home'
import { Carrinho } from '../Pages/Home/Carrinho';
import { Pagamento } from '../Pages/Home/Pagamento';
import { Produtos } from '../Pages/Home/Produtos';

const Stacks = createStackNavigator();

export function NavigStacklog() {
  return (
    <Stacks.Navigator 
    screenOptions={{headerStyle:{backgroundColor:'#2460DA', borderBottomLeftRadius:15, borderBottomRightRadius:15, height:70}, headerTintColor:'white'}}
    >
      <Stacks.Screen 
      name="Home" 
      component={Home} 
      />
      <Stacks.Screen 
      name="Produtos" 
      component={Produtos} 
      />
      <Stacks.Screen 
      name="Carrinho" 
      component={Carrinho} 
      />
      <Stacks.Screen 
      name="Pagamento" 
      component={Pagamento} 
      />
    </Stacks.Navigator>
  );
}