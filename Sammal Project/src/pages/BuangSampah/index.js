import { StatusBar, Touchable, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-datepicker'


const BuangSampah = ({navigation}) =>  {

  const [kisaranBerat, setKisaranBerat] = useState('');
  const [lokasi, setLokasi] = useState('Jl. Tirtayasa No 54');
  const [jenis, setJenis] = useState('');
  const [waktuPenjemputan, setWaktuPenjemputan] = useState('');
  const [userId, setUserId] = useState('');
  const [errorValidation, setValidation] = useState();

  const buangSampah = async() => {

    if(!kisaranBerat.trim() || !lokasi.trim() || !jenis.trim() || !waktuPenjemputan.trim()){
      setValidation(true);
    }

    else{

      setValidation(false);

          await fetch("https://sammal.herokuapp.com/api/buang_sampah", {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type' : 'application/json'
                  },
                  body: JSON.stringify({
                    'waktu_jemput' : waktuPenjemputan,
                    'lokasi_jemput' : lokasi,
                    'estimasi_berat_sampah' : kisaranBerat,
                    'kategori_sampah' : jenis,
                    'user_id' : userId

                  })
              }).then(res => res.json())
              .then(resData => {
                  alert(" Berhasil memesan penjemputan");
                  navigation.replace('DapatPenjemputan');
              })
          
            
    }
  
  useEffect(() => {
		AsyncStorage.getItem('sessionID').then((id) => {
            if(id){
              setUserId(id);
            }
        });  
    });

  }
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
            onChangeText={(kisaranBerat) => setKisaranBerat(kisaranBerat) } value={kisaranBerat}
          />
        </View>
                 
        <View style={styles.forms}>
            <Text style={{fontSize: 14, marginLeft: 10}}>Lokasi</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukan Alamat Lengkap"
                onChangeText={(lokasi) => setLokasi(lokasi) } value={lokasi}
              />
        </View>

        <View style={{width: 340, marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>  
          <View>
            <View style={{flexDirection: 'row'}}>
             <Text style={{marginLeft: 5}}>Jenis</Text>         
            </View>

            <View style={{width: 280, height: 200, marginTop: 5}}>
              <Image
                source={require('../../assets/panduan.png')} style={{width: 280, height: 200}}
              />
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
                onChangeText={(jenis) => setJenis(jenis) } value={jenis}
              />
            </View>

            <View style={styles.forms}>
            
                <View>
                  <Text>Tanggal penjemputan</Text>
                  <DatePicker
                  style={{width: 200,marginTop: 5,}}
                  date={waktuPenjemputan}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2019-05-01"
                  maxDate="2030-12-30"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                      dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                      },
                      dateInput: {
                          marginLeft: 36
                      }
                  }}
                  onDateChange={(waktuPenjemputan) => {setWaktuPenjemputan(waktuPenjemputan)}}
              />
              </View>

             {/* <Text style={{fontSize: 14, marginLeft: 10}}>Waktu penjemputan</Text>
              <TextInput
                style={styles.input}
                onChangeText={(waktuPenjemputan) => setWaktuPenjemputan(waktuPenjemputan) } value={waktuPenjemputan}
              /> */}
            </View> 
                

          </View>                
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', color: 'red', fontSize: 15}}> {errorValidation == true ? "* Silakan Isi Formnya" : ""} </Text>
        </View>
        
        <View style={styles.btnDaftar}>
          <Button
            title="MINTA JEMPUT"
            color="#3A6F27"
            onPress={() => buangSampah()}
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
    marginTop: 100,
    width: 280,
  }  
});


export default BuangSampah;