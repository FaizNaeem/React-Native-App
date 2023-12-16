import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Img, img } from '../Image/image';

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor:"#F5F5F5", height:100, alignItems:"center" }}>
      <TouchableOpacity onPress={() => console.log('Navigate')} style={{marginLeft:30}}>
      <Image source={Img.navicon} alt="" />
      </TouchableOpacity>

      <Text style={{ color: 'gray', fontSize: 18 }}>Home</Text>

      <TouchableOpacity onPress={() => console.log('Add to Cart')} style={{marginRight:20}}>
      <Image source={Img.shopping} alt="" />

      </TouchableOpacity>
    </View>
  );
};

export default Header;
