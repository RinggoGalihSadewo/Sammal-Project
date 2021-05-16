import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, CheckBox } from 'react-native';

const Sidebar = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={{marginTop: 32}}>
            <Text style={{fontStyle: 'italic'}}>Sampah Amal</Text>
        </View>
        <TouchableOpacity style={styles.btnHome} onPress={() => navigation.goBack()}>
			  <Image
				  source={require('../../assets/btnBack.png')} style={{width: 20, height: 20}} 
			  />
		  </TouchableOpacity>           
      <View style={{height: 560, justifyContent: 'center'}}>
        <View style={styles.logo}>
            <Image
              source={require('../../assets/LogoSammal.png')} style={{width: 88.1, height: 100.9}} 
            />
        </View>
      </View>   

      <Text style={{fontStyle: 'italic'}}>Created by : </Text>
	  <View style={{marginTop: 5}}>        
		<Text>Agung 118140083</Text>
		<Text>Dewa 118140068</Text>
		<Text>Ringgo 118140076</Text>
		<Text>Bagus 118140070</Text> 
      </View>
	  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  btnHome: {
    marginTop: -20,
    marginLeft: -320
  },
  sidebar: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  }  
});

export default Sidebar;
