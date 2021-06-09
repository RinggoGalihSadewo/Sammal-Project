import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UbahProfile = ({navigation}) =>  {

  	const [nameSession, sessionNama]        =  useState('');
    const [idSession, setIDSession]         =  useState('');
    const [dataKendaraan, setDataKendaraan] =  useState([]);
    
    const [username, setUsername] = useState('');
    const [passwordBaru, setPasswordBaru] = useState('');
    const [newkecamatan, setNewKecamatan] = useState('');
    const [userId, setUserId] = useState('');

    const update = async() => {
      await fetch("https://sammal.herokuapp.com/api/user/update", {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify({
                'user_name' : username,
                'password' : passwordBaru,
                'kecamatan' : newkecamatan,
                'user_id': userId
              })
          }).then(res => res.json())
          .then(resData => {
              alert(resData.message + " Data Berhasil di ubah, silahkan login kembali " );
              navigation.replace('Profile');
          })
    }

    useEffect(() => {
		AsyncStorage.getItem('sessionNama').then((user_name) => {
            if (user_name) {
                sessionNama(user_name);
            }
        });
		AsyncStorage.getItem('sessionID').then((id) => {
            if(id){
              setUserId(id);
            }
        });  
    });

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/btnBack.png')} style={{width: 20, height: 20}} 
      />
    </TouchableOpacity>

    <View style={styles.contentFotoProfile}>
      <View style={styles.fotoProfile}>
        <Image
          source={require('../../assets/superman.png')} style={{width: 95, height: 95}}
        />
      </View>
      <TouchableOpacity style={{marginTop: -100, marginLeft: 78}}>
          <Image
            source={require('../../assets/iconUbah.png')} style={{width: 15, height: 15}}          
          />
      </TouchableOpacity>
    </View> 

    <View style={{alignItems: 'center', marginTop: 20}}>
      
        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Username</Text>
          <TextInput style={styles.input}
            // placeholder="Agungzefi"
            onChangeText={(username) => setUsername(username) } value={username}
          />
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}} secureTextEntry={true}>Password Baru</Text>
          <TextInput style={styles.input}
          onChangeText={(passwordBaru) => setPasswordBaru(passwordBaru) } value={passwordBaru}
          secureTextEntry={true}
          />
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kecamatan</Text>
          <TextInput style={styles.input}
            // placeholder="Kemiling"
            onChangeText={(newkecamatan) => setNewKecamatan(newkecamatan) } value={newkecamatan}
          />
        </View>

        <View style={styles.btnDaftar}>
          <Button
            title="SIMPAN"
            color="#3A6F27"
            onPress={() => update()}
          />  
        </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      flex: 1,
  },
  btnBack: {
    width: 34,
    height: 34,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 32,
    marginLeft: 32,
  },
  fotoProfile: {
    width: 104,
    height: 104,
    borderWidth: 1,
		borderColor: '#F3F3F3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },  
  contentFotoProfile: {
    alignItems: 'center',
    height: 104
  },
  forms: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    height: 32,
    width: 242, 
    marginTop: 5,
    borderColor: '#E2E2E2',
    color: 'black',
    padding: 2,
    paddingLeft: 10,
  },
  btnDaftar: {
    marginTop: 20,
    width: 242,
  }  
});

export default UbahProfile;
