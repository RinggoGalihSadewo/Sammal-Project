import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('LandingPage1')
    }, 4000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/LogoSammal.png')} style={{width: 88.1, height: 100.9}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#3A6F27',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },
  content: {
    position: 'relative',
  }
});

export default SplashScreen;