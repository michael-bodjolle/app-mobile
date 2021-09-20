import React from "react";
import { Text, View } from "react-native";
import Header from "./componants/header";

export default function Connexion() {
    return (
      
      <View style={styles.container}
      >
       
        <Header/>
        
        
        
        
      
    
    
      {/* <View style= {{ backgroundColor: "#594F4F", padding:10}}>
      <Footer />
      </View> */}
      </View>
     
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D0CDD8",
      alignItems: "center",
      marginTop: 40,
    },
  });