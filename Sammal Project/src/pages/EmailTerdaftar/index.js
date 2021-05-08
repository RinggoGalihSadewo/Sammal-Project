import { StatusBar } from 'expo-status-bar';
import React, {useEffect}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

const EmailTerdaftar = ({navigation}) =>  {
  
  useEffect(() => {
	setTimeout(() => {
		navigation.navigate('HomeBeranda')
	}, 2000);
  });  

  return (
    <View style={styles.container} >
		<Image
			source={require('../../assets/checklistEmail.png')} style={{width:182, height:182}}
		/>
		<Text style={{marginTop: 19}}>Akun Anda berhasil dibuat!</Text>
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
	    backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

});

export default EmailTerdaftar;
