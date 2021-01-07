import React from "react";
import {  createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const appStack=createStackNavigator();
import Incidents from "./pages/incedents";
import Detail from "./pages/detail";

export default function Routes() {
   return(
       <NavigationContainer>
           <appStack.Navigator screenOptions={{ headerShown:false}}>
               <appStack.Screen name="Casos" component={Incidents}></appStack.Screen>
               <appStack.Screen name="Detalhes" component={Detail}></appStack.Screen>
           </appStack.Navigator>
       </NavigationContainer>
   ); 
}