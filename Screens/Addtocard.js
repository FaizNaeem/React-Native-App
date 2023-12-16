import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Img } from './Image/image'

export default function Addtocard() {
    return (
        <>
            <View>
                <View style={styles.container}>
                    <View >
                     <Image source={Img.card2} style={styles.image}/>
                     <Text style={styles.cardtext}>Veggie tomato mix</Text>
                     <Text style={styles.cardPrice}>N1,900</Text>
                    </View>
                    <View>
                    
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        alignItems: "center",
        position:"relative",
        width:"80%",
        left:50

    },
    image: {
        borderRadius:500,
        height:200,
        width:200


    },
    cardtext:{
textAlign:"center",
    color:"black",
    fontWeight:"bold",
    fontSize:25
},
cardPrice:{
        textAlign:"center",
            color:"#FA4A0C",
            fontWeight:"bold",
            fontSize:25

    }
})
