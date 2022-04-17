import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';


const Home=({navigation})=> {

  const goToscreen=()=>{
    navigation.navigate(navigationStrings. PROFILE, { title: "Subscribe My Channel" })
  }

  return (
    <View style={styles.container}>
      
      <Text>This is Home Screen</Text>
      <Button onPress={goToscreen}
        title="Go to Profile"/>
        
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      //backgroundColor:"yellow"
  }
})



export default Home;


  