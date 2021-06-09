import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminHome = ({navigation}) => {
	const _logout = async() => {
        await AsyncStorage.clear();
        navigation.replace('Login');
    }
  return (
    <View style={styles.container}>
		<View style={{width: 300, flex: 1}}>
			<View style={{flexDirection: 'row'}}>
				<View>
					<View style={{marginTop: 32}}>
						<Text>Hello</Text>
						<Text style={{fontWeight: 'bold', fontSize: 24}}>Admin!</Text>
					</View>
					</View>

					<View>
					<View style={{alignItems: 'center', justifyContent: 'center', marginTop: 45, marginLeft: 110}}>	
						<TouchableOpacity style={styles.btnLogout} onPress={() => _logout()}>
							<Image
								source={require('../../assets/iconLogout.png')} style={{width: 18, height: 18}} 
							/>
							<Text style={{fontSize: 13, marginLeft: 4.5, color: 'white' }}>Keluar Akun</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>				

			<View style={{marginTop: 20, width: 300,}}>
				<View>
					<Text style={{fontWeight: 'bold'}}>Pesanan Baru Masuk</Text>
				</View>

				<View style={{alignItems: 'center', }}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile2}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile2}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<View style={styles.contentFotoProfile2}>
					<TouchableOpacity style={{}} onPress={() => navigation.navigate('AdminPesananBaruMasuk')}>
						<View style={{marginTop: 19, alignItems: 'center'}}>
							<Image
							source={require('../../assets/back.png')} style={{width: 25, height: 25,}}
							/>
						</View>
						<View style={{marginTop: 15	}}>
							<Text style={{fontSize: 12}}>Konfirmasi</Text>
						</View>
					</TouchableOpacity>
				</View>
				</View>
				</View>
				</View>
			</View>

			<View style={{marginTop: 20, width: 300,}}>
				<View>
					<Text style={{fontWeight: 'bold'}}>Pesanan Terkonfirmasi</Text>
				</View>

				<View style={{}}>
				<View style={{flexDirection: 'row', marginLeft: 5}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile2}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile2}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{alignItems: 'center', marginLeft: 8, marginTop: -0.7}}>
				<View style={styles.contentFotoProfile2}>
					<TouchableOpacity style={{}} onPress={() => navigation.navigate('AdminPesanKonfirmasi')}>
						<View style={{marginTop: 19, alignItems: 'center'}}>
							<Image
							source={require('../../assets/back.png')} style={{width: 25, height: 25,}}
							/>
						</View>
						<View style={{marginTop: 15	}}>
							<Text style={{fontSize: 12}}>Lainnya</Text>
						</View>
					</TouchableOpacity>
				</View>
				</View>
				</View>
				</View>
			</View>

			<View style={{marginTop: 20, width: 300,}}>
				<View>
					<Text style={{fontWeight: 'bold'}}>Pengguna</Text>
				</View>

				<View style={{}}>
				<View style={{flexDirection: 'row', marginLeft: 5}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile2}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.contentFotoProfile2}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</View>
				</View>

				<View style={{alignItems: 'center', marginLeft: 8, marginTop: -0.7}}>
				<View style={styles.contentFotoProfile2}>
					<TouchableOpacity style={{}} onPress={() => navigation.navigate('AdminPengguna')}>
						<View style={{marginTop: 19, alignItems: 'center'}}>
							<Image
							source={require('../../assets/back.png')} style={{width: 25, height: 25,}}
							/>
						</View>
						<View style={{marginTop: 15	}}>
							<Text style={{fontSize: 12}}>Lainnya</Text>
						</View>
					</TouchableOpacity>
				</View>
				</View>
				</View>
				</View>
			</View>

			<View style={{marginTop: 20, width: 300,}}>
				<View>
					<Text style={{fontWeight: 'bold'}}>Pengguna</Text>
				</View>
				<TouchableOpacity style={styles.tambahMateri}>
					<Image
						source={require('../../assets/iconTambahMateri.png')}
					/>
					<Text style={{color: '#A9A9A9', fontStyle: 'italic', marginTop: 5}}>Tambah Materi</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.btnLihatMateri} onPress={() => navigation.navigate('AdminMateri')}>
				<Text style={{fontStyle: 'italic', color: 'white'}}>Lihat Materi..</Text>
			</TouchableOpacity>			


		</View>

  </View>
  
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
    width: 60 ,
    height: 55,
    borderWidth: 1,
	borderColor: '#F3F3F3',
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
  back: {
	alignItems: 'center',
	justifyContent: 'center'
  }, 
  btnLogout: {
	justifyContent: 'center',
	alignItems: 'center',
	width: 114,
	height: 27,
	backgroundColor: '#FC5D04',
	borderRadius: 7,
	flexDirection: 'row'
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
  btnLihatMateri: {
	  width: 300,
	  height: 30,
	  backgroundColor: '#3A6F27',
	  borderRadius: 10,
	  marginTop: 40,
	  alignItems: 'center',
	  justifyContent: 'center'
  }    
});

export default AdminHome;
