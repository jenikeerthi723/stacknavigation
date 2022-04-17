import {Text, View,StyleSheet,Button,SafeAreaView} from 'react-native';
import React from 'react';
//import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';


const Profile=({navigation,route})=>{
  const {title} =route.params

  const goToscreen=()=>{
    navigation.navigate(navigationStrings.EXPLORE, { title: "Subscribe My Channel" })
  }

  return (
    <View style={styles.container}> 
     

      <SafeAreaView>
        {/* <HeaderComp 
        //goBack={()=>navigation.goBack()}
        Text="Profile Screen"/>  */}
      
      <Text>Profile</Text>
      <Text>This is Params Data:{title}</Text>
      <Button 
       onPress={goToscreen}
       title="Go to Explore"/>
      <Button 
      onPress={()=>navigation.goBack()}
      title="Go to Back"/>
      </SafeAreaView> 
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

export default Profile;