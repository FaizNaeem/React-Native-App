import React, { Component, useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Img, img } from './Image/image'

function  Splash ({ navigation }){
  const GetStart = () =>{
navigation.navigate("Login")

  }
   useEffect(()=>{
   setTimeout(()=>{
   GetStart()
   },2000)
   },[])
    return (
        <View style={Styles.main}>
        <View style={Styles.view}>
        <Image source={Img.logo} style={Styles.img} />
        </View>
        <Text style={Styles.heading}>Food For EveryOne</Text>
      
        <Image source={Img.banner} style={Styles.banner}/>
        <TouchableOpacity>
        <Text style={Styles.btn} >Get Started</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Splash
const Styles = StyleSheet.create({
  main:{
backgroundColor: "#FF4B3A",
height:"100%"
  },
  view:{
backgroundColor:"white",
width: 70,
height: 70,
display:'flex',
borderRadius:40,
marginLeft:50,
marginTop:50
  }
  ,
  img:{
    alignSelf:"center",
    marginTop:10
  },
  heading:{
    fontSize:50,
    color:"white",
    fontWeight:"900",
    marginLeft:50,
  },
  banner:{
height:450,

// marginTop:10,

width:"100%",
// borderColor:"black",
// borderWidth:1
  },
  btn:{
    alignSelf:"center",
    width:200,
    color:"#FF460A",
    fontSize:17,
    position:"relative",
    bottom:60,
    padding:17,
    textAlign:"center",
    borderRadius:30,
    backgroundColor:"#FFF"
  }
})