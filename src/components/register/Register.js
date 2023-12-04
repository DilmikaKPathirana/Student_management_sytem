import { View,Text, StyleSheet,TextInput } from "react-native";
import * as React from 'react';
import { Avatar, Button, Card} from 'react-native-paper';
function Register(){
    const [inputValue, setInputValue] = useState('');
    const viewText=()=>{
        
        
        setInputValue('');
      }
    
  return(
    <View style={styles.aaa}>
    <Card style={styles.bbb}>
    
    <Card.Content>
      <Text style={styles.txt} variant="titleLarge">Student Register</Text>
      <TextInput
        style={styles.input}
      
        
        placeholder="Enter Student ID"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
      
        placeholder="Enter Student First Name"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputValue(text)}
    value={inputValue}
        placeholder="Enter Student Last Name"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
     
        placeholder="Enter Student Email"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        
        placeholder="Enter Student Password"
        keyboardType="text"
      />
    </Card.Content>
    <Card.Actions style={styles.action}>
      <Button onPress={viewText}>Register</Button>
      <Button>Go To Login</Button>
      
    </Card.Actions>
    
  </Card>
  
    </View>
  )
}
const styles=StyleSheet.create({
txt:{
  textAlign:'center',
  color:'black',
  fontSize:25,
  fontWeight:'bold',
  textDecorationLine:'underline',
},
aaa:{
  backgroundColor:'white',
  flex:1,
  
},
bbb:{
  backgroundColor:'white',
  borderWidth:1,
  top:50,
  height:350,
  backgroundColor:'lightblue',
  margin:4
},
input:{
  position:'relative',
  top:10,
  color:'black',
  borderColor:'black',
  borderWidth:1,
  borderRadius:5,
  borderTopWidth:0,
  borderLeftWidth:0,
  borderRightWidth:0,
  
},
action:{
  top:70
}


}
)
export default Register;