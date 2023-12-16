// BottomNavigation.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Img } from '../Image/image';

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={Img.home} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={Img.heart} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={Img.user} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={Img.history} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    // borderTopWidth: 1,
    // borderTopColor: '#ccc',
    // paddingBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomNavigation;
