import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CustomAlert = ({ isVisible, message, onClose }) => (
  <Modal isVisible={isVisible}>
    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 5, height:100 }}>
      <Text>{message}</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={{  color: 'green', textAlign:"center",fontSize:20 }}>Login Success😍</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

export default CustomAlert;
