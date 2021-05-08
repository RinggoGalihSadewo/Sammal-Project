import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const EmailVerifi = ({navigation}) => {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={{fontSize: 36, fontWeight: 'bold',color: '#3A6F27'}}>Pendaftaran</Text>
        </View>    

        <View>
          <Image
            source={require('../../assets/emailLogo.png')} style={{width: 140, height: 140, marginTop: 90}}
          />
        </View>

        <View style={styles.textHero}>          
          <Text>Kami telah mengirimkan kode verifikasi</Text>
          <Text style={{color: 'black'}}>ke alamat E-Mail anda, silahkan cek</Text>
          <Text>dan isikan pada kolom dibawah.</Text>
        </View>

        <View style={{marginTop: 50, width: 250}}>
          <Text style={{marginLeft: 5}}>Masukkan Kode</Text>
          <TextInput style={styles.input}
          />
        </View>

        <View style={styles.btnDaftar}>
          <Button
            title="Konfirmasi Email"
            color="#3A6F27"
            onPress={() => navigation.navigate('EmailTerdaftar')}
          />
        </View>


        <View style={styles.login}>
          <Text>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#3A6F27', fontStyle: 'italic', marginLeft: 3, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flex: 1
  },
  header: {
    marginTop: 58
  },
  textHero: {
    alignItems: 'center',
    marginTop: 20   
  },
  input: {
    borderWidth: 1,
    height: 32,
    marginTop: 5,
    borderColor: '#E2E2E2',
    color: 'black',
    padding: 2,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  btnDaftar: {
    width: 250,
    marginTop: 30,
  },
  login: {
    width: 243,
    marginTop: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },        
});

export default EmailVerifi;