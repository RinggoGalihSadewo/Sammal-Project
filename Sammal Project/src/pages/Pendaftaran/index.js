import { StatusBar } from 'react-native';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'

const Pendaftaran = ({navigation}) =>  {
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailVerified, setEmailVerified] = useState('');
  const [role, setRole] = useState('user');
  const [kecamatan, setKecamatan] = useState('');
  

  const register = async() => {
    await fetch("https://sammal.herokuapp.com/api/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              'user_name' : user_name,
              'password' : password,
              'email' : email,
              'email_verified_at' : emailVerified,
              'kecamatan' : kecamatan,
              'role': role
            })
        }).then(res => res.json())
        .then(resData => {
            alert(resData.message + " Silakan Login...");
            navigation.replace('Login');
        })
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: -165}}>        
        <View style={styles.header}>
            <Text style={{fontSize: 36, fontWeight: 'bold',color: '#3A6F27'}}>Pendaftaran</Text>
        </View>
      
      <View style={{marginTop: 100}}>
        <View style={styles.formUsername}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Username</Text>
          <TextInput style={styles.input}
          onChangeText={(user_name) => setUserName(user_name) } value={user_name}/>
        </View>

        <View style={styles.formEmail}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Email</Text>
          <TextInput style={styles.input}
          onChangeText={(email) => setEmail(email) } value={email}/>
        </View>

        <View style={styles.formPassword}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kata Sandi</Text>
          <TextInput style={styles.input} secureTextEntry={true}
          onChangeText={(password) => setPassword(password) } value={password}/>
        </View>

        <View style={{marginTop: 5}}>
        <Text>Email terverifikasi pada tanggal</Text>
        <DatePicker
            style={{width: 200,marginTop: 5,}}
            date={emailVerified}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-05-01"
            maxDate="2030-12-30"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
            }}
            onDateChange={(emailVerified) => {setEmailVerified(emailVerified)}}
        />
        </View>

        {/* <View style={styles.formConfirmPassword}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Waktu Verifikasi Email</Text>
          <TextInput style={styles.input}
          onChangeText={(emailVerified) => setEmailVerified(emailVerified) } value={emailVerified}/>
        </View> */}

        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kecamatan</Text>
          <TextInput style={styles.input}
          onChangeText={(kecamatan) => setKecamatan(kecamatan) } value={kecamatan}/>
        </View>

        <View style={styles.btnDaftar}>
          <Button
            title="DAFTAR"
            color="#3A6F27"
            onPress={() => register()}
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