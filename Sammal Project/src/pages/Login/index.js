import { StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/core';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.hLogin}>Masuk</Text>
        </View>
      
      <View style={{marginTop: 100}}>
        <View style={styles.forms}>
          <Text style={{marginLeft: 5}}>Username / Email</Text>
          <TextInput
            style={styles.input}
          />
          <Text style={{marginLeft: 5, marginTop: 10}}>Kata Sandi</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Masuk"
            color="#3A6F27"
            onPress={() => navigation.navigate('HomeBeranda')}
          />
        </View>
    </View>

        <View style={styles.signUp}>
          <Text>Belum punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Pendaftaran')}>
            <Text style={{color: '#3A6F27', fontStyle: 'italic', marginLeft: 3, fontWeight: 'bold'}}>Daftar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdminHome')}>
            <Text style={{color: '#3A6F27', fontStyle: 'italic', marginLeft: 3, fontWeight: 'bold'}}>Admin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 'auto',
    width: 'auto',
    alignItems: 'center',
    marginTop: 10,
  },
  content: {
    width: 243,
    height: 600,
  },
  hLogin: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3A6F27',
  },
  forms: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    height: 32,
    marginTop: 5,
    borderColor: '#E2E2E2',
    color: 'black',
    padding: 2,
    paddingLeft: 10,
  },
  btn: {
    marginTop: 15,
  },
  signUp: {
    alignItems: 'center',
    marginTop: 190,
    flexDirection: 'row',
    justifyContent: 'center', 
  }
});

export default Login;