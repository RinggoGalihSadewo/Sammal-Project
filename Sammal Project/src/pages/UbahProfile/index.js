import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const UbahProfile = ({navigation}) =>  {
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
            placeholder="Agungzefi"
          />
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kata Sandi Lama</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kata Sandi Baru</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Konfirmasi Kata Sandi Baru</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kecamatan</Text>
          <TextInput style={styles.input}
            placeholder="Kemiling"
          />
        </View>

        <View style={styles.btnDaftar}>
          <Button
            title="SIMPAN"
            color="#3A6F27"
            onPress={() => navigation.navigate('Profile')}
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
