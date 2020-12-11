import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class Scanscreen extends React.Component{
constructor(){
    super();
    this.state = {
        hasCameraPermissions: null,
        scanned: false,
        scannedData: '',
        buttonState: 'normal'
    }
}
getCameraPermissions = async () =>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    
    this.setState({
      /*status === "granted" is true when user has granted permission
        status === "granted" is false when user has not granted the permission
      */
      hasCameraPermissions: status === "granted",
      buttonState: 'clicked',
      scanned: false
    });
  }

  handleBarCodeScanner = async({type, data})=>{
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: 'normal'
    });
  }

  render(){
      const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;
  
  if (buttonState==="clicked" && hasCameraPermissions){
  return(
    <BarCodeScanner
    BarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
  />
  );
  }
  else if (buttonState === "normal"){
  return(
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style = {styles.text1}>
         {hasCameraPermissions === true?this.state.scannedData:'Request Camera Permission'}
       </Text>
       <TouchableOpacity style = {styles.button1} onPress = {this.hasCameraPermissions}>
        <Text style = {styles.text1}>Scan QR Code</Text>
       </TouchableOpacity>
      
     </View>
  );
  }
  
  }
}

const styles = StyleSheet.create ({
  button1 :{
    width:100,
    height:50,
    borderWidth:2,
    backgroundColor:'#123456'
  },
  text1:{
    color:'white',
    fontWeight:'bold',
    margin: 5
  },
  image1:{
   height:100,
   width:100,
   marginTop:70
  }

})