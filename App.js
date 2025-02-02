import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreens';
import MealsOverView from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavouritesContextProvider from './store/context/favourites-context';

const Stack = createNativeStackNavigator(); //creating this constant for ease of usage below
const Drawer = createDrawerNavigator();

function Drawernavigator()
{
  return (<Drawer.Navigator 
    screenOptions={{
      headerStyle:{backgroundColor: '#3f2f25'},
      headerTintColor:'white',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25',
      },
      drawerContentStyle:{ backgroundColor: '#3f2f25' },
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1',
  }}>
    <Drawer.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{
        title:"All Categories",
        // drawerIcon:({color,size})=>(
        //   <Ionicons name='list' color={color} size={size}/>
        // ),
        }} 
      />
    <Drawer.Screen 
    name='Favourites' 
    component={FavouriteScreen} 
    // options={{
    //   drawerIcon:({color,size})=>(
    //     <Ionicons name='star' color={color} size={size}/>
    //   ),
    //   }} 
    />
  </Drawer.Navigator>);
}

export default function App() {
  return (
    <>
    <StatusBar style="light"/>
    <FavouritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle: {backgroundColor:'#3f2f25'}}}
          >

          <Stack.Screen 
          name="Drawer" 
          component = {Drawernavigator}
          options={{
            // title:'All categories',
            headerShown:false, //by applying this..the title will not be shown in the screen.
          }}
          />

          <Stack.Screen name="MealsOverview" 
          component={MealsOverView}
          // options={({route,navigation})=>{
          //   const catId = route.params.categoryId;
          //   return {
          //     title:catId,
          //   };
          // }}
          />
          <Stack.Screen 
          name="MealDetail" 
          component={MealDetailScreen} 
          // options={{
          //   headerRight: () => { //headerRight must return the standard react component
          //     return <Text>In the Header</Text>
          //   },
          // }}
          options={{
            title:'About the meal',
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesContextProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});


//above code is using context api and below code is using REDUX


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet,Text} from 'react-native';
// import {NavigationContainer, StackActions} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import CategoriesScreen from './screens/CategoriesScreens';
// import MealsOverView from './screens/MealsOverviewScreen';
// import MealDetailScreen from './screens/MealDetailScreen';
// import FavouriteScreen from './screens/FavouriteScreen';
// // import { Ionicons } from '@expo/vector-icons';
// // import FavouritesContextProvider from './store/context/favourites-context';
// import { store } from './store/redux/store';
// import { Provider } from 'react-redux';

// const Stack = createNativeStackNavigator(); //creating this constant for ease of usage below
// const Drawer = createDrawerNavigator();

// function Drawernavigator()
// {
//   return (<Drawer.Navigator 
//     screenOptions={{
//       headerStyle:{backgroundColor: '#3f2f25'},
//       headerTintColor:'white',
//       sceneContainerStyle: {
//         backgroundColor: '#3f2f25',
//       },
//       drawerContentStyle:{ backgroundColor: '#3f2f25' },
//       drawerInactiveTintColor:'white',
//       drawerActiveTintColor:'#351401',
//       drawerActiveBackgroundColor:'#e4baa1',
//   }}>
//     <Drawer.Screen 
//       name="Categories" 
//       component={CategoriesScreen} 
//       options={{
//         title:"All Categories",
//         // drawerIcon:({color,size})=>(
//         //   <Ionicons name='list' color={color} size={size}/>
//         // ),
//         }} 
//       />
//     <Drawer.Screen 
//     name='Favourites' 
//     component={FavouriteScreen} 
//     // options={{
//     //   drawerIcon:({color,size})=>(
//     //     <Ionicons name='star' color={color} size={size}/>
//     //   ),
//     //   }} 
//     />
//   </Drawer.Navigator>);
// }

// export default function App() {
//   return (
//     <>
//     <StatusBar style="light"/>
//       <Provider store={store}>
//         <NavigationContainer>
//           <Stack.Navigator 
//             screenOptions={{
//             headerStyle:{backgroundColor:'#351401'},
//             headerTintColor:'white',
//             contentStyle: {backgroundColor:'#3f2f25'}}}
//             >

//             <Stack.Screen 
//             name="Drawer" 
//             component = {Drawernavigator}
//             options={{
//               // title:'All categories',
//               headerShown:false, //by applying this..the title will not be shown in the screen.
//             }}
//             />

//             <Stack.Screen name="MealsOverview" 
//             component={MealsOverView}
//             // options={({route,navigation})=>{
//             //   const catId = route.params.categoryId;
//             //   return {
//             //     title:catId,
//             //   };
//             // }}
//             />
//             <Stack.Screen 
//             name="MealDetail" 
//             component={MealDetailScreen} 
//             // options={{
//             //   headerRight: () => { //headerRight must return the standard react component
//             //     return <Text>In the Header</Text>
//             //   },
//             // }}
//             options={{
//               title:'About the meal',
//             }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </Provider>
//     </>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
    
//   },
// });
