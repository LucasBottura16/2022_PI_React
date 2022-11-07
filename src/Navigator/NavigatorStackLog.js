import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home'

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

    </Stacks.Navigator>
  );
}