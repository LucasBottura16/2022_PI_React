import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Cadastro';
import Acessos from '../Pages/Cadastro/Acessos';
import CadEmpresa from '../Pages/Cadastro/Empresa';
import CadRevendedor from '../Pages/Cadastro/Revendedor';

const Stack = createStackNavigator();

export function NavigStack() {
  return (
    
    <Stack.Navigator>

      <Stack.Screen 
      name="Acessos" 
      component={Acessos} 
      />

      <Stack.Screen 
      name="Login" 
      component={Login} 
      />
      <Stack.Screen 
      name="Revendedor" 
      component={CadRevendedor} 
      />
      <Stack.Screen 
      name="Empresa" 
      component={CadEmpresa} 
      />

    </Stack.Navigator>
  );
}