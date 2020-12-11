import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Scanscreen from './screens/Scanscreen';

export default function App() {
  return (
    <View>
     <Scanscreen/>
     <Image src = {require('./assets/barcode-scanner.jpg')}/>
    </View>
  );
}

