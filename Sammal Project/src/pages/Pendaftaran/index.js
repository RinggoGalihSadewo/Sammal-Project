import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const Pendaftaran = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <View style={{marginTop: -165}}>        
        <View style={styles.header}>
            <Text style={{fontSize: 36, fontWeight: 'bold',color: '#3A6F27'}}>Pendaftaran</Text>
        </View>
      
      <View style={{marginTop: 100}}>
        <View style={styles.formUsername}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Username</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.formEmail}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Email</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.formPassword}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kata Sandi</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.formConfirmPassword}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Konfirmasi Kata Sandi</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.formConfirmPassword}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kecamatan</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.btnDaftar}>
          <Button
            title="DAFTAR"
            color="#3A6F27"
            onPress={() => navigation.navigate('EmailVerifi')}
          />  
        </View>
      </View>      

        <View style={styles.login}>
          <Text>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#3A6F27', fontStyle: 'italic', marginLeft: 3, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>  
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  header:{
    alignItems: 'center',
    marginTop: 100,
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
  btnDaftar: {
    width: 243,
    marginTop: 10,
  },
  login: {
    width: 243,
    marginTop: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },        
});

export default Pendaftaran;