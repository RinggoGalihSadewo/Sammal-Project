import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

const AdminPengguna = ({navigation}) =>{
  return (
	<ScrollView>
    <View style={styles.container}>
		<View style={{width: 300}}>
			<View style={{}}>
				<TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
				<Image
					source={require('../../assets/btnBack.png')} style={{width: 20, height: 20}} 
				/>
				</TouchableOpacity>
				<View style={{alignItems: 'center'}}>
					<Text style={{fontWeight: 'bold', fontSize: 24, marginLeft: 13, marginTop: -33, marginBottom: 10}}>Pengguna</Text>
				</View>
			</View>
		</View>

		<View style={{width: 300}}>
			<View style={{marginTop: 20, width: 300}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			</View>

			<View style={{marginTop: 20, width: 300}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			</View>	

			<View style={{marginTop: 20, width: 300}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			</View>	

			<View style={{marginTop: 20, width: 300}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			</View>	

			<View style={{marginTop: 20, width: 300}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			</View>

			<View style={{marginTop: 20, width: 300}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			</View>

			<View style={{marginTop: 20, width: 300, marginBottom: 32}}>

				<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{alignItems: 'center', marginTop: -0.5}}>
				<TouchableOpacity style={styles.contentFotoProfile2} onPress={() => navigation.navigate('AdminDataPengguna')}>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<View style={styles.fotoProfile}>
							<Image
							source={require('../../assets/superman.png')} style={{width: 42, height: 47,}}
							/>
						</View>
						<Text style={{fontSize: 12, marginTop: 3}}>agungzefi</Text>
					</View>
				</TouchableOpacity>
				</View>
				</View>
				</View>
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
    width: 60,
    height: 60,
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
});

export default AdminPengguna;
