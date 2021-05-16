import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';


const BuangSampah = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/btnBack.png')} style={{width: 20, height: 20}} 
        />
      </TouchableOpacity>

      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 14, marginLeft: 5}}>Kisaran Berat (Kg)</Text>
          <TextInput style={styles.input}
            placeholder="2"
          />
        </View>

        <View style={styles.forms}>
          <Text style={{fontSize: 14, marginLeft: 10}}>Lokasi</Text>
          <Image
            source={require('../../assets/gps.png')} style={{width: 280, height: 145, marginTop: 5}}
          />        
        </View>

        <View style={styles.forms}>
              <TextInput
                style={styles.input}
                placeholder="Masukan Alamat Lengkap"
              />
        </View>

        <View style={{width: 340, marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>  
          <View>
            <View style={{flexDirection: 'row'}}>
             <Text style={{marginLeft: 5}}>Jenis</Text>
             <Image
                source={require('../../assets/iconTanya.png')} style={{height: 15, width: 15, marginLeft: 2, marginTop: 3, marginLeft: 2}}
             />              
            </View>

            <View style={{width: 280, height: 200, backgroundColor: '#EFEFEF', marginTop: 5}}>
            
            </View>

                {/* <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox
                          style={{width: 26, height: 26}}
                        />
                        <Text style={{marginLeft: 5, marginTop: 3 }}>Organik</Text>
                        <CheckBox
                          style={{marginLeft: 20, width: 26, height: 26}}
                        />
                        <Text style={{marginLeft: 5, marginTop: 3}}>Unorganik</Text>
                    </View>                          
                </View>  */}

            <View style={styles.forms}>
              <TextInput
                style={styles.input}
                placeholder="Organik / Unorganik"
              />
            </View>    

          </View>                
        </View>

        <View style={styles.btnDaftar}>
          <Button
            title="MINTA JEMPUT"
            color="#3A6F27"
            onPress={() => navigation.navigate('DapatPenjemputan')}
          />  
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
  btnBack: {
    width: 34,
    height: 34,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 32,
    marginLeft: 32,
  },
  forms: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    height: 32,
    width: 280, 
    marginTop: 5,
    borderColor: '#E2E2E2',
    color: 'black',
    padding: 2,
    paddingLeft: 10,
  },
  btnDaftar: {
    marginTop: 22,
    width: 280,
  }  
});

export default BuangSampah;