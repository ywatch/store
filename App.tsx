/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  useColorScheme,Image
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './src/screens/auth/SPLASH';
import Signup from './src/screens/auth/Signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Signin from './src/screens/auth/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Settings from './src/screens/app/Settings';
import Profile from './src/screens/app/Profile';
import Favorites from './src/screens/app/Favorites';
import ProductDetails from './src/screens/app/ProductDetails';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = () => {
  return(
    <Stack.Navigator>
       <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
       <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
       <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}} />
       <Stack.Screen name="MyListings" component={MyListings} options={{headerShown: false}} />
    </Stack.Navigator> 
  )
}
const Tabs = () =>{
  return(
  <Tab.Navigator initialRouteName="Feed"
  screenOptions={({route})=>({
    tabBarIcon: ({focused,color,size}) =>{
      let icon;
      if (route.name==='Home'){
        icon=focused ? require('./src/assets/tabs/home_active.png') : require('./src/assets/tabs/home.png');
      }else if (route.name==='profileStack'){
        icon=focused ? require('./src/assets/tabs/profile_active.png') : require('./src/assets/tabs/profile.png');
      }else if (route.name==='Favorites'){
        icon=focused ? require('./src/assets/tabs/bookmark_active.png') : require('./src/assets/tabs/bookmark.png');
      }
      return <Image style={{width:24,height:24}} source={icon}></Image>
    },headerShown: false,tabBarShowLabel:false,tabBarStyle:{borderColor:'grey'}
  })} >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="profileStack" component={ProfileStack}/>
      <Tab.Screen name="Favorites" component={Favorites}/>

    </Tab.Navigator>);
}
const WEB_CLIENT_ID = '71500186007-m0u9jdgfa73bqaot1uokot2af3io3irt.apps.googleusercontent.com'
function App(): JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  },[])
  return (
    <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
                  <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                  <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
                  <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                  <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                  <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}} />
</Stack.Navigator>  
            </NavigationContainer>
      </SafeAreaProvider>
  );
}



export default App;
