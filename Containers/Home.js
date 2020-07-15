import React from 'react';
import PaytabsSdk from 'react-native-paytabs-sdk';

import {
  View,
  Text,

  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';



class Home extends React.Component {
  constructor(props) {
    super(props);
  
  }

  state = {
name:'',
amount:0.0

  }
  onPay = () => {
    console.log(PaytabsSdk)
    console.log("PaytabsSdk")
    
    PaytabsSdk.openPaytab({
      merchant_email: 'ahmedkamel89@gmail.com',
      secret_key: 'KPHatZKrUOStz9vu3G3eWNPGseWrKp1ufIFIHpaBd25MbAhfgktc8iTAxQ2hg3LvMqdtQn53qaQCK7R1sleAE7bbXdseheJ3FXxv',
      language: 'en',
      transaction_title: 'Test Paytabs library',
      product_name: 'Product 1, Product 2',
      order_id: '123456',
      amount: {amount},
      currency_code: 'BHD',
      phone_number: '009733',
      customer_email: 'customer-email@example.com',
      address_billing: 'Flat 1,Building 123, Road 2345',
      city_billing: 'Manama',
      state_billing: 'Manama',
      country_billing: 'BHR',
      postal_code_billing: '00973',
      address_shipping: 'Flat 1,Building 123, Road 2345',
      city_shipping: 'Manama',
      state_shipping: 'Manama',
      country_shipping: 'BHR',
      postal_code_shipping: '00973',
      pay_button_color: '#2474bc'
    }, (data) => {
      console.log(data);
    })
  };
  

   render() {
    // This will render the Home PlayList
  
    return (
      <View>
        <Text style={styles.header}>Please fill the following inormation</Text>
      <View style={{borderColor:'black',borderBottomWidth:1,borderTopWidth:1,paddingBottom:14,marginBottom:20}}>
        <Text style={styles.Labels}>Product name:</Text>
 <TextInput style={styles.textInput} placeholder="Type Here..." />
 <Text style={styles.Labels}>Phone Number:</Text>
 <TextInput style={styles.textInput} placeholder="Type Here..." />
 <Text style={styles.Labels}>Amount:</Text>
 <TextInput style={styles.textInput} placeholder="Type Here..." />
 <Text style={styles.Labels}>Currency:</Text>
 <TextInput style={styles.textInput} placeholder="Type Here..." />
 
 </View>
 <Button
            onPress={() => this.onPay()}
            title="Pay now"
            color="green"
          />
      </View>
    );
  }



  }


  
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{

    fontWeight: 'light',
    padding:15

  },

  Labels:{

    fontWeight: 'bold',
    padding:10

  },
  textInput: {
    color: 'green',
    borderColor:'blue',
    borderBottomWidth:1,
    borderTopWidth:1,
    padding:5,
    height:40
   }

});
