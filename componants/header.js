import React, { useState } from "react";
import { Text, View,Alert, Modal, Image, TextInput,StyleSheet,Pressable, TouchableOpacity, Linking } from "react-native";
import usericone from "../assets/usericone.png";

const Header = () => {
 
  
  return (
    <View
      style={{
        flex: 0.03,
        // marginTop:0,
        backgroundColor: "#594F4F",
        width: 360,
        height: 190,
        marginBottom: 35,
      }}
    >  
        

      <View style={styles.container}>
        <Text
          style={{
            color: "#F1F398",
            fontSize: 35,
            marginTop:35,
            marginBottom: 15,
          }}
        >
          DEVENTCE
        </Text>
        <TextInput
          style={styles.input} placeholder='recherche...'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    
  },
  input:{
    backgroundColor: "white",
    width: 300,
    height: 40,
    display: "flex",
    justifyContent: "center",
    padding:10,
  },


  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },

 
});

export default Header;
