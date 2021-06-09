import { StatusBar, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
// import { NavigationHelpersContext } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
      const _validationLogin = async () => {
        const truthLogin = await AsyncStorage.getItem('sessionLogin');
        const roles = await AsyncStorage.getItem('sessionRole');

        if (truthLogin && roles == 'user') {
              return navigation.replace('HomeBeranda')
          } else if (truthLogin && roles == 'admin') {
              return navigation.replace('AdminHome');
          }
      }

      _validationLogin();
  }, [isLogin])

  const loginSystem = async () => {
    // if (!email.trim() && !password.trim()) {
    //     setValidation(true);
    //     setLogin(false);
    // } else {
    //     setValidation(false);
    //     setLogin(true);

          try {
              await fetch("https://sammal.herokuapp.com/api/login", {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      'email': email,
                      'password': password,
                  })
              }).then(
                  res => res.json()
              ).then(resData => {
                    AsyncStorage.setItem('sessionLogin', "true");
                    AsyncStorage.setItem('sessionID', resData.data.user.id.toString());
                    AsyncStorage.setItem('sessionNama', resData.data.user.user_name);
                    AsyncStorage.setItem('sessionEmail', resData.data.user.email);
                    AsyncStorage.setItem('sessionKecamatan', resData.data.user.kecamatan);
                    AsyncStorage.setItem('sessionRole', resData.data.user.role);
                    // AsyncStorage.setItem('sessionNoTelfon', resData.data.user.noTelfon.toString());
                    AsyncStorage.setItem('sessionToken', resData.data.token);

                    Alert.alert(
                      'Status',
                      resData.message,
                    );
                  
                  if (resData.data.user.role == 'user') {
                    return navigation.replace('HomeBeranda')
                  } else if (resData.data.user.role == 'admin') {
                    return navigation.replace('AdminHome');
                  }
              })
          } catch (error) {
              Alert.alert(
                  'Gagal',
                  "Username dan Password Tidak Terdaftar",
              );
              // setLogin(false);
          }
      // }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.hLogin}>Masuk</Text>
        </View>
      
      <View style={{marginTop: 100}}>
        <View style={styles.forms}>
          <Text style={{marginLeft: 5}}>Email</Text>
          <TextInput
            style={styles.input} 
            onChangeText={(email) => setEmail(email) } value={email}
          />
          <Text style={{marginLeft: 5, marginTop: 10}}>Kata Sandi</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password) } value={password}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Masuk"
            color="#3A6F27"
            // onPress={() => navigation.navigate('HomeBeranda')}
            onPress={ () => loginSystem() }
          />
        </View>
    </View>

        <View style={styles.signUp}>
          <Text>Belum punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Pendaftaran')}>
            <Text style={{color: '#3A6F27', fontStyle: 'italic', marginLeft: 3, fontWeight: 'bold'}}>Daftar</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('AdminHome')}>
            <Text style={{color: '#3A6F27', fontStyle: 'italic', marginLeft: 3, fontWeight: 'bold'}}>Admin</Text>
          </TouchableOpacity> */}
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