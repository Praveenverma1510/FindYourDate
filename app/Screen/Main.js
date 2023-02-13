import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors } from '../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons } from '../Assets/Images';

export default function Main() {
  {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Main hai 
        </Text>
      </View>
      // <View style={{
      //   display: 'flex', flexDirection: 'row', backgroundColor: '#F5FCFF',
      // }}>
      //   <FastImage source={Icons.IcBackArrow} style={{ width: 41, height: 41 }} />
      //   <Text style={{ fontSize: 20, color: Colors.bgBlack, textAlign: 'center' }}>

      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: Colors.bgBlack
  }
});