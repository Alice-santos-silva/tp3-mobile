import { createDrawerNavigator } from "@react-navigation/drawer";
import {Feather} from "@expo/vector-icons"

import  Login  from "../pages/Login";
import Registro from "../pages/Registro";
import List from "../pages/List";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="login" component={Login} options={{drawerIcon:() => <Feather name="log-in"/>}}/>
            <Drawer.Screen name="registro" component={Registro} options={{drawerIcon:() => <Feather name="grid"/>}}/>
            <Drawer.Screen name="list" component={List} options={{drawerIcon:() => <Feather name="book-open"/>}}/>
        </Drawer.Navigator>
    )
}