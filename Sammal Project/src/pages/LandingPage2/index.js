import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import header1 from '../../assets/LogoSammal2.png';

const LandingPage2 = ({navigation}) =>  {
  return (
    <View style={styles.container}>
            
      <View style={styles.header}>
        <Image
          source={header1} style={{width: 94, height: 20}}
        />              
      </View>
      
      <View style={styles.imgHero}>
        <Image
          source={require('../../assets/Landing2.png')} style={{width: 170, height: 170}}
        />        
      
      </View>
      
      <View style={{position: 'absolute', marginTop: 400, alignItems: 'center'}}>
        <Text style={{marginTop: 4, fontSize: 14}}>
          Cara Mudah Membuang Sampah
        </Text>
        <Text style={{fontSize: 14}}>
          Secara Digital.
        </Text>
      </View>

      {/* <View style={styles.slider}>
        <View style={{height:8, width: 75, backgroundColor: '#DCDCDC', borderRadius: 15}}>
        </View>       
        <View style={{height:8, width: 31, backgroundColor: '#3A6F27', borderRadius: 15, marginLeft: 13}}>
        </View>
      </View> */}

      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('Login')}>
		<Text style={{color: 'white', fontSize: 18}}>Masuk</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      position: 'relative',
      alignItems: 'center',
      flex: 1
  },
  header: {
    height: 20,
    width: 94,
    position: 'absolute',
    marginTop: 70
  },
  imgHero: {
    height: 220,
    width: 200,
    position: 'absolute',
    marginTop: 210,
    alignItems: 'center'
  },
  slider: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 540
  },
  btnBack: {
    backgroundColor: '#3A6F27',
    width: 118,
    height: 38,
    position: 'absolute',
    marginTop: 600,
    borderRadius: 130,
	justifyContent: 'center',
	alignItems: 'center'
  }    
});

export default LandingPage2;
