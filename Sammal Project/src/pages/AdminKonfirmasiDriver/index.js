import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

const AdminKonfirmasiDriver = ({navigation}) => {
  return (
  <ScrollView>
    <View style={styles.container}>
    <View style={{width: 300}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/btnBack.png')} style={{width: 20, height: 20}} 
        />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 24, marginLeft: 13, marginTop: 32}}>Konfirmasi Driver</Text>
      </View>

      <View style={{marginTop: 20, flexDirection: 'row', width: 300}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.contentFotoProfile}>
          <View>
            <View style={styles.fotoProfile}>
              <Image
              source={require('../../assets/superman.png')} style={{width: 58, height: 58,}}
              />
            </View>
            <Text style={{fontSize: 18, marginTop: 3}}>agungzefi</Text>
          </View>
        </View>
        </View>
        <View style={{backgroundColor: '#F5F5F5', width: 215, paddingLeft: 8, marginLeft: 7, borderRadius: 10}}>
          <View style={{marginTop:11}}>
            <Text style={{fontSize: 12}}>Berat : 2 Kg</Text>
            <Text style={{fontSize: 12}}>Jenis : Organik</Text>
            <Text style={{fontSize: 12}}>Alamat : Jl. Purnawirawan, No. 89, Gunung Terang</Text>
          </View>
          <View>
            <Text style={{fontSize: 12, marginTop: 4}}>Waktu : 2021/05/01 12:30 WIB</Text>
          </View>

        </View>
      </View>

    </View>

      <View style={{marginTop: 216, width: 300}}>
        <View style={styles.forms}>
          <Text style={{marginLeft: 5}}>ID Driver</Text>
          <TextInput
            style={styles.input}
          />
          <Text style={{marginLeft: 5, marginTop: 10}}>Nama Driver</Text>
          <TextInput
            style={styles.input}
          />
          <Text style={{marginLeft: 5, marginTop: 10}}>Nomor Plat Kendaraan</Text>
          <TextInput
            style={styles.input}
          />       
        </View>
        <View style={styles.btn}>
          <Button
            title="Kirim Konfirmasi ke Driver"
            color="#3A6F27"
            onPress={() => navigation.navigate('AdminPesananBaruMasuk')}
          />
        </View>
    </View>    

  </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      flex: 1,
    alignItems: 'center'
  },
  btnBack: {
    width: 34,
    height: 34,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 32,
  },
  fotoProfile: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },  
  contentFotoProfile: {
    alignItems: 'center',
    height: 104,
    justifyContent: 'center'
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
});

export default AdminKonfirmasiDriver;