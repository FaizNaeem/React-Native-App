import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import CustomAlert from './CustomAlert'; // Import your custom alert component
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('faiznaeem192022@gmail.com');
  const [password, setPassword] = useState('1234567');
  const [isAlertVisible, setAlertVisible] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:100/user");
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching data:' , error);
  //   }
  // };
  
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const handleLogin = () => {
   navigation.navigate("home")
  };

  const hideAlert = () => {
    setAlertVisible(false);
    navigation.navigate('Signup')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={{ display: "flex", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}>Signup</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="black"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Custom alert */}
      <CustomAlert
        isVisible={isAlertVisible}
        onClose={hideAlert}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "black"
  },
  signup: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "black",
    marginLeft: 150
  },
  input: {
    height: 50,
    borderColor: 'gray',
    color: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default Login;
