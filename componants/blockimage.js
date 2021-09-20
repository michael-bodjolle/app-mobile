import React from "react";
import { StyleSheet,  Text, View, Image, TouchableOpacity, } from "react-native";
import imageone from "../assets/imageone.jpeg";

const Blockimage = () => {
  return (
    
    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
        },
      ]}
    >
     <TouchableOpacity>
     <Image
        source={imageone}
        style={{ width: 150, height: 150,marginTop:15  }}
      />
     </TouchableOpacity>
      <Text style={{ flex: 1,backgroundColor:"white",width:200,marginTop:15,  height:150, padding:10 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non morbi et,
        ultricies in odio libero hendrerit mauris. pour en savoir plus cliquer
      </Text>
      
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
  },
});

export default Blockimage;
