import React from 'react';
import {Login} from './app/screens/auth/login';
import {Register} from './app/screens/auth/register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from './app/screens/welcome/welcome';
import {AlarmType} from './app/screens/main/AlarmType';
import {AccountValue} from './app/screens/main/AccountValue';
import {StockPrice} from './app/screens/main/StockAlarm';
import {NewAlarm} from './app/screens/main/NewAlarm';
import {InfoButton} from './app/screens/main/InfoButton';
import {TopAlarms} from './app/screens/main/TopAlarms';
import {ProfitSimulator} from './app/screens/main/ProfitSimulator';
import {SettingsM} from './app/screens/settings/Settings';
import {Feedback} from './app/screens/settings/Feedback';

const Stack = createNativeStackNavigator();

export const StockAlarm = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Alarm Type" component={AlarmType} />
        <Stack.Screen name="Account Value" component={AccountValue} />
        <Stack.Screen name="Stock Price" component={StockPrice} />
        <Stack.Screen name="New Alarm" component={NewAlarm} />
        <Stack.Screen name="Info Button" component={InfoButton} />
        <Stack.Screen name="Top Alarms" component={TopAlarms} />
        <Stack.Screen name="Profit Simulator" component={ProfitSimulator} />
        <Stack.Screen name="Settings" component={SettingsM} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
