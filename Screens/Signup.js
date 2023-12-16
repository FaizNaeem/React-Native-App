import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }) => {
  const [firstN, setfirstN] = useState('');
  const [lastN, setLastN] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    Alert("hello")
    console.log(`Login ${title} - Username: ${username}, Password: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.form}>
    <View style={{display:"flex", flexDirection:"row" , borderBottomWidth:1,borderBottomColor:"lightgray"}}>
    <Text style={styles.title}>Signup</Text>
    <Text style={styles.singup} onPress={()=>navigation.goBack()}>Login</Text>
    </View>
        <TextInput
          style={styles.input}
          placeholder="FirsName"
          placeholderTextColor="black"
          value={firstN}
          onChangeText={(text) => setfirstN(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="black"
          value={lastN}
          onChangeText={(text) => setLastN(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="black"
          value={password}
          keyboardType='default'
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={{ color: 'black', fontWeight: 'bold', textAlign:"center" }}>Signup</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
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
    color:"black"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    color:"black",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  singup:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"black",
    marginLeft:150
  }
});

export default Signup;
