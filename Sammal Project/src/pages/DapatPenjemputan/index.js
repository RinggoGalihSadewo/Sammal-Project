import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, CheckBox } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.konfirmasi}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/konfirmasiDriver.png')} style={{width: 23, height: 23}} 
            />         
            <Text style={{fontStyle: 'italic', marginLeft: 3}}>Berhasil Mendapatkan Driver!</Text> 
          </View>
          <View style={styles.content}>
            <Image
              source={require('../../assets/superman.png')} style={{width: 45, height: 45}}
            />
            <View style={{marginLeft: 10, marginTop: -4}}>
            <Text style={{fontWeight: 'bold', fontSize: 24}}>Pak Ojan</Text>
            <Text style={{fontStyle: 'italic'}}>BE 2896 EF</Text> 
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#3A6F27', width: 62, height: 28, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 140}} onPress={() => navigation.navigate('HomeBeranda')}>
            <Text style={{color: 'white', fontWeight: 'bold'}} onPress={() => navigation.navigate('HomeBeranda')}>OK</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  konfirmasi: {
    width: 360,
    height: 640,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginLeft: -60,
    flexDirection: 'row',
    marginTop: 15
  },
  header: {
    flexDirection: 'row',
  }
});
