import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

const HomeMateri = () =>  {
  return (
	<ScrollView>
    <View style={styles.container}>
		<View style={{width: 300}}>
			<View style={{}}>
				<TouchableOpacity style={styles.btnBack}>
				<Image
					source={require('../../assets/btnBack.png')} style={{width: 20, height: 20}} 
				/>
				</TouchableOpacity>
				<View style={{alignItems: 'center'}}>
					<Text style={{fontWeight: 'bold', fontSize: 24, marginLeft: 0, marginTop: -33, marginBottom: 10}}>Materi</Text>
				</View>
			</View>
		</View>

		<TouchableOpacity style={styles.tambahMateri}>
			<Image
				source={require('../../assets/iconTambahMateri.png')}
			/>
			<Text style={{color: '#A9A9A9', fontStyle: 'italic', marginTop: 5}}>Tambah Materi</Text>
		</TouchableOpacity>

		<View style={styles.materi}>
		
		</View>
		
		<View style={styles.materi}>
		
		</View>	

		<View style={styles.materi}>
		
		</View>	

		<View style={styles.materi}>
		
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
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },  
  contentFotoProfile: {
    alignItems: 'center',
    height: 80,
	justifyContent: 'center',
	marginTop: 5
  },
  contentFotoProfile2: {
    alignItems: 'center',
    height: 80,
	justifyContent: 'center',
	marginTop: 5,
	marginLeft: 17,
  },  
  tambahMateri: {
	width: 300,
	height: 95,
	backgroundColor: '#F3F3F3',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 10,
	marginTop: 5
  },
  materi: {
	  width: 300,
	  height: 169,
	  backgroundColor: '#F3F3F3',
	  borderRadius: 10,
	  marginTop: 10
  } 
 
});

export default HomeMateri;