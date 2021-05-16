import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const AdminDataPengguna = ({navigation}) => {
  return (
    <View style={styles.container}>
		<TouchableOpacity style={styles.btnHome} onPress={() => navigation.goBack()}>
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
			<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>agungzefi</Text>
		</View>

		<View style={{alignItems: 'center', marginTop: 20}}>
        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Username</Text>
          <TextInput style={styles.input}
            placeholder="Agungzefi"
          />
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kecamatan</Text>
          <TextInput style={styles.input}
		  	placeholder="Kemiling"
		  />
        </View>

		{/* <View style={{alignItems: 'center', width: 300}}>
        <View style={styles.btnDaftar}>
          <Button
            title="SIMPAN"
            color="#3A6F27"
          />  
        </View>
		</View> */}

		<View style={{alignItems: 'center', width: 300}}>
        <View style={styles.btnHapus}>
          <Button
            title="HAPUS AKUN"
            color="#FF0000"
            onPress={() => navigation.goBack()}
          />  
        </View>
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
  },
  btn: {
    marginTop: 15,
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
  },
  btnHapus: {
    marginTop: 180,
    width: 242,
  }    
});

export default AdminDataPengguna;
