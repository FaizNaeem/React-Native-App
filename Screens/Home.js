import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity,FlatList } from 'react-native';
import { Img } from './Image/image';
import BottomNavigation from './Components/Bottumbar';

function Home() {
  const [selectTab, setSelectedTab] = useState("Food");

  const ChangeColAndBorder = (e) => {
    setSelectedTab(e);
  }

  const data = [
    { id: '1', title: 'Veggie tomato mix',card : `${Img.card2}` ,price: 'N1,900'},
    { id: '2', title: 'Spicy fish sauce', card : `${Img.card1}`,price: 'N2,300.99' },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
    <Image source={item.card} style={styles.cardimg}/>
    <View>
    <Text style={styles.cardtext}>{item.title}</Text>
    <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> Delicious</Text>
        <Text style={styles.text1}>food for you</Text>
        <View style={styles.input}>
          <Image source={Img.search} style={styles.search} />
          <TextInput style={styles.input1} placeholderTextColor="black" placeholder='Search' />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
          <TouchableOpacity onPress={() => ChangeColAndBorder("Food")} style={styles.tab}>
            <Text style={[selectTab == "Food" ? styles.selectTabBarText : styles.tabText]}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ChangeColAndBorder("drinks")} style={styles.tab}>
            <Text style={[selectTab == "drinks" ? styles.selectTabBarText : styles.tabText]}>Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ChangeColAndBorder("snake")} style={styles.tab}>
            <Text style={[selectTab == "snake" ? styles.selectTabBarText : styles.tabText]}>Snake</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ChangeColAndBorder("souces")} style={styles.tab}>
            <Text style={[selectTab == "souces" ? styles.selectTabBarText : styles.tabText]}>Souces</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: "black",
    fontSize: 34,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  text1: {
    color: "black",
    fontSize: 34,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    borderRadius: 30,
    position: "relative",
    backgroundColor: "#F5F5F5",
    padding: 5,
  },
  input1: {
    flex: 1,
    color: "black",
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 20
  },
  tabBar: {
    marginBottom: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  tabText: {
    color: 'gray',
    fontSize: 17
  },
  selectTabBarText: {
    color: '#FA4A0C',
    fontSize: 17,
    borderBottomColor: "#FA4A0C",
    borderBottomWidth: 3
  },
  content: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: "#F5F5F5",
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
    marginTop:40,
    marginLeft:30,
    marginRight: 10,
    width: 180,
    height:220,
    zIndex:1
  },
  cardimg:{
    width:"110%",
    position:"absolute",
    borderRadius:200,
    height:150,
    top:-40,
    left:13
  }, 
  cardtext:{
position:"relative",
top:100,
color:"#000",
fontWeight:"bold",
fontSize:18,
textAlign:"center"
},
cardPrice:{
    position:"relative",
    top:100,
    color:"#FA4A0C",
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center"

  }
});

export default Home;
