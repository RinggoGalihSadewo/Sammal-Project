import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const Profile = ({navigation}) =>  {
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
			<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>agungzefi</Text>
		</View>

		<View style={styles.email}>
				<Text>Email</Text>
				<Text style={{fontSize: 12, color: '#868686', marginTop: 4}}>agungzefi@gmail.com</Text>
		</View>

		<View style={styles.kecamatan}>
				<Text>kecamatan</Text>
				<Text style={{fontSize: 12, color: '#868686', marginTop: 4}}>Kemiling</Text>
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
		<TouchableOpacity style={styles.btnLogout} onPress={() => navigation.navigate('Login')}>
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
