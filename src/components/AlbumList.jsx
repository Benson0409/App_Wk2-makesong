import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          {/* <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          /> */}
          <View style={styles.headerContentStyle}>
           
              <Text style={{fontWeight:"bold",fontSize:18,align:"center"}}>{albumData[0].title}</Text>
            
            {/* <View>
              <Text style={{align:"center",}}>{albumData[0].artist}</Text>
            </View> */}
            
          </View>
        
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          {/* <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image
            }}
          /> */}
          <View style={styles.headerContentStyle}>
            <Text style={{fontWeight:"bold",fontSize:18,align:"center"}}>{albumData[1].title}</Text>
            {/* <Text>{albumData[1].artist}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          {/* <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image
            }}
          /> */}
          <View style={styles.headerContentStyle}>
            <Text style={{fontWeight:"bold",fontSize:18,align:"center"}}>{albumData[2].title}</Text>
            {/* <Text>{albumData[2].artist}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          {/* <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image
            }}
          /> */}
          <View style={styles.headerContentStyle}>
            <Text style={{fontWeight:"bold",fontSize:18,align:"center"}}>{albumData[3].title}</Text>
            {/* <Text>{albumData[3].artist}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          {/* <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image
            }}
          /> */}
          <View style={styles.headerContentStyle}>
            <Text style={{fontWeight:"bold",fontSize:24,align:"center"}}>{albumData[4].title}</Text>
            {/* <Text>{albumData[4].artist}</Text> */}
          </View>
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
    
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    textAlign:"center",
    
  },
  cardContainerStyle: {
    // borderWidth: 2,
    // borderRadius: 5,
    // borderColor: "black",
    // shadowColor: "#000",
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#f0d4ad",
    borderColor: "white",
    // borderWidth: 5,
    // borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: 300,
    marginLeft:"15%",

  }
});

export default Albumlist;