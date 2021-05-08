import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeGuide = ({navigation}) =>  {

  return (
    <ScrollView style={styles.container}>
    
    <View>
		<View style ={{alignItems: 'center'}}>
		<View style={styles.header}>
			
			<TouchableOpacity 
				style={styles.sidebar} onPress = {() => navigation.navigate('Sidebar')}
			>
				<Image
					source={require('../../assets/iconSidebar.png')} style={{width: 20, height: 20 }}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.fotoProfile} onPress={() => navigation.navigate('Profile')}>
				<Image
					source={require('../../assets/superman.png')} style={{width: 25, height: 34, position: 'absolute', bottom: 0}}
				/>
			</TouchableOpacity>

		</View>
		</View>

		<View style={{alignItems: 'center'}}>
		<View style={styles.name}>
			<Text style={{color: '#767676'}}>Hallo</Text>
			<Text style={{fontSize: 20, fontWeight: 'bold'}}>Agung!</Text>
		</View>
		
		<View style={styles.saldo}>
			<Text>Kamu Punya</Text>
			<View style={styles.jumlahSaldo}>
				<Image
					source={require('../../assets/iconDollar.png')}
				/>
				<Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}> 2000</Text>
			</View>
		</View>
		</View>
		</View>

    <View style={{alignItems: 'center'}}>
      <View style={styles.navbar}>
        
        <TouchableOpacity
          style={styles.beranda} onPress={() => navigation.navigate('HomeBeranda')}
        >
        <Image
          source={require('../../assets/iconBerandaDisabled.png')} style={{width: 20, height: 18}}
        />  
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.tukarSaldo} onPress={() => navigation.navigate('HomeTukar')}  
        >
        <Image
          source={require('../../assets/iconTukarSaldoDisabled.png')} style={{width: 20, height: 18}}
        />  
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.info}   
        >
        <Image
          source={require('../../assets/iconGuideActivated.png')} style={{width: 20, height: 18}}
        />  
        </TouchableOpacity>

      </View>
    
      <View style={styles.imageGuide}>

      </View>

      <View style={styles.imageGuide}>

      </View>

      <View style={styles.imageGuide}>

      </View>

      <View style={styles.imageGuide}>

      </View>

      <View style={styles.imageGuide}>

      </View>                        
    
    </View>                
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
    flex: 1,
  },
	header: {
		height: 60,
		width: 300,
		marginTop: 10,
		flexDirection: 'row',
	},
	sidebar: {	
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: 'black',
		marginTop: 12,
		width: 34,
		height: 34,
		borderRadius: 7
	},
  fotoProfile: {
    backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#F3F3F3',
    borderRadius: 7,
    width: 40,
    height: 40, 
    marginTop: 12,
    marginLeft: 225,
    alignItems: 'center',
    position: 'relative'  
  },
  name: {
		width: 65,
		height: 41,
		marginTop: 15,
		width: 300
  },
  saldo: {
    marginTop: -40,
    alignItems: 'center',
    marginLeft: 164
  },
  jumlahSaldo: {
    width: 130,
    height: 46,
    backgroundColor: '#F8B301',
    borderRadius: 25,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
    
  },
  navbar: {
    width: 300,
    height: 40,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginTop: 17,
    flexDirection: 'row'
    
  },
  beranda: {
    width: 100,
    height: 40,   
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tukarSaldo: {
    width: 100,
    height: 40,   
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  info: {
    width: 100,
    height: 40,
    backgroundColor: '#3A6F27',       
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'    
  },
  imageTukar: {
    width: 216,
    height: 67,
    backgroundColor: '#E7E7E7',
    marginTop: 17,
    borderRadius: 10,
  },
  imageGuide: {
    width: 300,
    height: 130,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginTop: 17
  },
  btnTrash: {
    width: 96,
    height: 53,
    backgroundColor: '#3A6F27',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginTop: -24,
    marginLeft: 228
  },
});

export default HomeGuide;