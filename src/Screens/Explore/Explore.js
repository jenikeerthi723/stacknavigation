import { View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';
import navigationStrings from '../../constants/navigationStrings';

const Explore=({navigation})=>{
 
  const goToscreen=()=>{
    navigation.popToTop()
  }


  return (
    <View style={styles.container}>
      <Text>Explore</Text>
      <Button 
      onPress={goToscreen}
      title="Go to Home"/>
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


export default Explore;