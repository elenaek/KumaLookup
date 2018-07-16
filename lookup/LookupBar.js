import React, { Component } from 'react';

//Connect component to Redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Import redux actions for the actioncreatorimport
import {updateLookupValue, getLookupInfo} from './actions';

//Styling imports for react-native and native-base
import {StyleSheet, View, TextInput} from 'react-native';
import {Container, Button, Text, Content, Form, Item, Input} from 'native-base';

const LookupBar = ({lookup_input_value,updateLookupValue,lookup_info,getLookupInfo}) => (
        <View style={styles.lookupBarStyle}>
        <Content style={styles.numberInput}>
                {<Text>{lookup_info}</Text> }
                <Text>{lookup_input_value}</Text>
                <Form>
                    <Item>
                        <Input placeholder="Enter phone number" keyboardType="numeric" onChangeText={updateLookupValue} value={lookup_input_value}/>
                    </Item>
                </Form>
        </Content>
        <Content>
            <Button style={styles.buttonGroup} onPress={() => {getLookupInfo(lookup_input_value)}}>
                <Text>Lookup Number</Text>
            </Button>
        </Content>
        </View>
    );

    const styles = StyleSheet.create({
        lookupBarStyle: {
          flex: 1,
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
        },
        buttonGroup:{
            backgroundColor: "#6E2C00",
            padding: 0
        },
        numberInput:{
            width:"85%"
        }
      });

      const mapStateToProps = (state) => ({
        lookup_input_value: state.lookup.lookup_input_value,
        lookup_info: state.lookup.lookup_info
      });

      const mapDispatchToProps = (dispatch) => (
          bindActionCreators({updateLookupValue,getLookupInfo}, dispatch)
      );
  
export default connect(mapStateToProps,mapDispatchToProps)(LookupBar);