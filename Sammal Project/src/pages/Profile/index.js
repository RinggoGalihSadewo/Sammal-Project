import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({navigation}) =>  {

	const _logout = async() => {
        await AsyncStorage.clear();
        navigation.replace('Login');
    }

	const [nameSession, sessionNama]        =  useState('');
	const [emailSession, sessionEmail]        =  useState('');
	const [kecamatanSession, sessionKecamatan]        =  useState('');
    const [idSession, setIDSession]         =  useState('');
    const [dataKendaraan, setDataKendaraan] =  useState([]);    

    useEffect(() => {
		AsyncStorage.getItem('sessionNama').then((user_name) => {
            if (user_name) {
                sessionNama(user_name);
            }
        });
		AsyncStorage.getItem('sessionEmail').then((email) => {
            if (email) {
                sessionEmail(email);
            }
        });
		AsyncStorage.getItem('sessionKecamatan').then((kecamatan) => {
            if (kecamatan) {
                sessionKecamatan(kecamatan);
            }
        });
		AsyncStorage.getItem('sessionID').then((id) => {
            if(id){
                setIDSession(id);
            }
        });  
    }, [nameSession, emailSession, kecamatanSession]);

  return (
    <View style={styles.container}>
		<TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate('HomeBeranda')}>
			<Image
				source={require('../../assets/iconHome.png')} style={{width: 20, height: 20}} 
			/>
		</TouchableOpacity>

		<View style={styles.contentFotoProfile}>
			<View style={styles.fotoProfile}>
				<Image
					source={require('../../assets/superman.png')} style={{width: 95, height: 95}}
				/>
			</View>
			<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>{nameSession}</Text>
		</View>

		<View style={styles.email}>
				<Text>Email</Text>
				<Text style={{fontSize: 12, color: '#868686', marginTop: 4}}>{emailSession}</Text>
		</View>

		<View style={styles.kecamatan}>
				<Text>kecamatan</Text>
				<Text style={{fontSize: 12, color: '#868686', marginTop: 4}}>{kecamatanSession}</Text>
		</View>

		<View style={{alignItems: 'center', justifyContent: 'center'}}>
			<TouchableOpacity style={styles.contentUbahLogout} onPress={() => navigation.navigate('UbahProfile')}>
				<Image
					source={require('../../assets/iconUbah.png')}
				/>
				<Text style={{fontSize: 13, color: '#777777', marginLeft: 7.76}}>Ubah</Text>
			</TouchableOpacity>
		</View>

	<View style={{alignItems: 'center', justifyContent: 'center', marginTop: 167}}>	
		<TouchableOpacity style={styles.btnLogout} onPress={() => _logout()}>
			<Image
				source={require('../../assets/iconLogout.png')} style={{width: 18, height: 18}} 
			/>
			<Text style={{fontSize: 13, marginLeft: 4.5, color: 'white' }}>Keluar Akun</Text>
		</TouchableOpacity>
	</View>		
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      flex: 1,
  },
  btnHome: {
	  width: 34,
	  height: 34,
	  justifyContent: 'center', 
	  alignItems: 'center',
	  marginTop: 32,
	  marginLeft: 32
  },
  contentFotoProfile: {
	  alignItems: 'center',  
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
  email: {
	marginLeft: 68,
	marginTop: 25,
  },
  kecamatan: {
	marginLeft: 68,
	marginTop: 25,
  },
  contentUbahLogout: {	 
	width: 45,
	height: 15,
	flexDirection: 'row',
	marginTop: 40 ,
  },
  btnLogout: {
	justifyContent: 'center',
	alignItems: 'center',
	width: 114,
	height: 40,
	backgroundColor: '#FC5D04',
	borderRadius: 7,
	flexDirection: 'row'
  }    
});

export default Profile;
