import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SplashScreen, LandingPage1, AdminDataPengguna, AdminHome, AdminMateri, AdminPengguna, 
    AdminPesananBaruMasuk, AdminPesanKonfirmasi, BuangSampah, EmailTerdaftar, EmailVerifi, HomeBeranda, 
    HomeGuide, HomeMateri, HomeTukar, LandingPage2, Login, Pendaftaran, Profile, Sidebar, UbahProfile } from '../pages';


const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="LandingPage1" component={LandingPage1} options={{headerShown: false}}/>
            <Stack.Screen name="LandingPage2" component={LandingPage2} options={{headerShown: false}}/>
            <Stack.Screen name="AdminDataPengguna" component={AdminDataPengguna} options={{headerShown: false}}/>
            <Stack.Screen name="AdminHome" component={AdminHome} options={{headerShown: false}}/>
            <Stack.Screen name="AdminMateri" component={AdminMateri} options={{headerShown: false}}/>
            <Stack.Screen name="AdminPengguna" component={AdminPengguna} options={{headerShown: false}}/>
            <Stack.Screen name="AdminPesananBaruMasuk" component={AdminPesananBaruMasuk} options={{headerShown: false}}/>
            <Stack.Screen name="AdminPesanKonfirmasi" component={AdminPesanKonfirmasi} options={{headerShown: false}}/>
            <Stack.Screen name="BuangSampah" component={BuangSampah} options={{headerShown: false}}/>
            <Stack.Screen name="EmailTerdaftar" component={EmailTerdaftar} options={{headerShown: false}}/>
            <Stack.Screen name="EmailVerifi" component={EmailVerifi} options={{headerShown: false}}/>
            <Stack.Screen name="HomeBeranda" component={HomeBeranda} options={{headerShown: false}}/>
            <Stack.Screen name="HomeGuide" component={HomeGuide} options={{headerShown: false}}/>
            <Stack.Screen name="HomeMateri" component={HomeMateri} options={{headerShown: false}}/>
            <Stack.Screen name="HomeTukar" component={HomeTukar} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Pendaftaran" component={Pendaftaran} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="Sidebar" component={Sidebar} options={{headerShown: false}}/>
            <Stack.Screen name="UbahProfile" component={UbahProfile} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default Router;