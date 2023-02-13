import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors } from '../Common/Colors';

export default function PersonalChat () {
  {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Personal Chat hai
        </Text>
      </View>
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
    color:Colors.bgBlack

  }
});