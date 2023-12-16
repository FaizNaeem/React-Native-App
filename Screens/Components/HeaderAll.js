import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Img } from '../Image/image';

const HeaderAll = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#EEEEEE',height:100 , alignItems:"center"}}>
      {/* Left side - Navigation icon */}
      <TouchableOpacity onPress={() => console.log('Navigate')}>
      <Image source={Img.left}/>
      </TouchableOpacity>
      
      {/* Center - Title */}
      <Text style={{ color: 'black', fontSize: 18 }}></Text>
      
      {/* Right side - Add to Cart icon */}
      <TouchableOpacity onPress={() => console.log('Add to Cart') }>
      <Image source={Img.heart} style={style.heart}/>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderAll;

const style = StyleSheet.create({
heart:{
  width:20,
  height:20,
  color:"black",
  marginRight:20
}
})