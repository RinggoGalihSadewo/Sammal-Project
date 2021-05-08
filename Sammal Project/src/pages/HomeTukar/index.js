import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Touchable } from 'react-native';

const HomeTukar = ({navigation}) =>  {

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
          style={styles.tukarSaldo}   
        >
        <Image
          source={require('../../assets/iconTukarSaldoActivated.png')} style={{width: 20, height: 18}}
        />  
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.info} onPress={() => navigation.navigate('HomeGuide')}  
        >
        <Image
          source={require('../../assets/iconGuideDisabled.png')} style={{width: 20, height: 18}}
        />  
        </TouchableOpacity>

      </View>
    

    <View style={{flexDirection: 'row', width: 300}}>
      <View style={styles.imageTukar}>
		<View style={{width: 50, flexDirection: 'row', marginLeft: 154, marginTop: 45}}>
			<TouchableOpacity style={{width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/min.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, borderRadius: 3, height: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{color: '#3A6F27', fontSize: 11}}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/plus.png')}
				/>
			</TouchableOpacity>						
		</View>
      </View>

      <View style={{height: 67, marginTop: 17, width: 84, marginLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              source={require('../../assets/iconDollarTukar.png')} style={{width: 20, height: 20}}
            />
            <Text style={{color: '#E7A705', marginLeft: 3, fontWeight: 'bold', fontSize: 17, marginTop: -2}}>200</Text>        
        </View>

        <View>
            <TouchableOpacity style={styles.btnTukar}>
              <Text style={{color: 'white', fontStyle: 'italic'}}>TUKAR</Text>
            </TouchableOpacity>
        </View> 
      </View>      
    </View>

    <View style={{flexDirection: 'row', marginTop: 10, width: 300}}>
      <View style={styles.imageTukar}>
	  <View style={{width: 50, flexDirection: 'row', marginLeft: 154, marginTop: 45}}>
			<TouchableOpacity style={{width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/min.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, borderRadius: 3, height: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{color: '#3A6F27', fontSize: 11}}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/plus.png')}
				/>
			</TouchableOpacity>						
		</View>
      </View>

      <View style={{height: 67, marginTop: 17, width: 84, marginLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              source={require('../../assets/iconDollarTukar.png')} style={{width: 20, height: 20}}
            />
            <Text style={{color: '#E7A705', marginLeft: 3, fontWeight: 'bold', fontSize: 17, marginTop: -2}}>200</Text>        
        </View>

        <View>
            <TouchableOpacity style={styles.btnTukar}>
              <Text style={{color: 'white', fontStyle: 'italic'}}>TUKAR</Text>
            </TouchableOpacity>
        </View> 
      </View>      
    </View>

    <View style={{flexDirection: 'row', marginTop: 10, width: 300}}>
      <View style={styles.imageTukar}>
	  <View style={{width: 50, flexDirection: 'row', marginLeft: 154, marginTop: 45}}>
			<TouchableOpacity style={{width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/min.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, borderRadius: 3, height: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{color: '#3A6F27', fontSize: 11}}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/plus.png')}
				/>
			</TouchableOpacity>						
		</View>
      </View>

      <View style={{height: 67, marginTop: 17, width: 84, marginLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              source={require('../../assets/iconDollarTukar.png')} style={{width: 20, height: 20}}
            />
            <Text style={{color: '#E7A705', marginLeft: 3, fontWeight: 'bold', fontSize: 17, marginTop: -2}}>200</Text>        
        </View>

        <View>
            <TouchableOpacity style={styles.btnTukar}>
              <Text style={{color: 'white', fontStyle: 'italic'}}>TUKAR</Text>
            </TouchableOpacity>
        </View> 
      </View>      
    </View>

    <View style={{flexDirection: 'row', marginTop: 10, width: 300 }}>
      <View style={styles.imageTukar}>
	  <View style={{width: 50, flexDirection: 'row', marginLeft: 154, marginTop: 45}}>
			<TouchableOpacity style={{width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/min.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, borderRadius: 3, height: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{color: '#3A6F27', fontSize: 11}}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/plus.png')}
				/>
			</TouchableOpacity>						
		</View>
      </View>

      <View style={{height: 67, marginTop: 17, width: 84, marginLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              source={require('../../assets/iconDollarTukar.png')} style={{width: 20, height: 20}}
            />
            <Text style={{color: '#E7A705', marginLeft: 3, fontWeight: 'bold', fontSize: 17, marginTop: -2}}>200</Text>        
        </View>

        <View>
            <TouchableOpacity style={styles.btnTukar}>
              <Text style={{color: 'white', fontStyle: 'italic'}}>TUKAR</Text>
            </TouchableOpacity>
        </View> 
      </View>      
    </View>

    <View style={{flexDirection: 'row', marginTop: 10, width: 300}}>
      <View style={styles.imageTukar}>
	  <View style={{width: 50, flexDirection: 'row', marginLeft: 154, marginTop: 45}}>
			<TouchableOpacity style={{width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/min.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, borderRadius: 3, height: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{color: '#3A6F27', fontSize: 11}}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{marginLeft: 3, width: 15, height: 15, borderRadius: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={require('../../assets/plus.png')}
				/>
			</TouchableOpacity>						
		</View>
      </View>

      <View style={{height: 67, marginTop: 17, width: 84, marginLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              source={require('../../assets/iconDollarTukar.png')} style={{width: 20, height: 20}}
            />
            <Text style={{color: '#E7A705', marginLeft: 3, fontWeight: 'bold', fontSize: 17, marginTop: -2}}>200</Text>        
        </View>

        <View>
            <TouchableOpacity style={styles.btnTukar}>
              <Text style={{color: 'white', fontStyle: 'italic'}}>TUKAR</Text>
            </TouchableOpacity>
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
  },
  header: {
    height: 60,
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
    backgroundColor: '#3A6F27',   
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  info: {
    width: 100,
    height: 40,   
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
  btnTukar: {
    width: 67,
    height: 29,
    backgroundColor: '#E7A705',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 3.5
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

export default HomeTukar;
