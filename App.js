
import { useState } from 'react';
import { StyleSheet, View ,Button ,Text } from 'react-native';

export default function App() {

  const[counter , setCounter] = useState(0)


  return (
    <View >
     <Button 
      onPress={()=>{
        setCounter(counter+1)
      }}
    title='artır'
     />
        <Button 
      onPress={()=>{
        setCounter(counter-1)
      }}
    title='azalt'
     />
     <Text >Sayı: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
