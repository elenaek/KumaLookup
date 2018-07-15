import React, { Component } from 'react';

//Connect component to Redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Import redux actions for the actioncreatorimport
import {updateLookupValue} from './actions';

//Styling imports for react-native and native-base
import {StyleSheet, View, TextInput} from 'react-native';
import {Container, Button, Text, Content, Form, Item, Input} from 'native-base';

const LookupBar = ({lookup_input_value,updateLookupValue}) => (
        <View style={styles.lookupBarStyle}>
        <Content style={styles.numberInput}>
                <Text>{lookup_input_value}</Text>
                <Form>
                    <Item>
                        <Input placeholder="Enter phone number" keyboardType="numeric" onChangeText={updateLookupValue} value={lookup_input_value}/>
                    </Item>
                </Form>
        </Content>
        <Content>
            <Button style={styles.buttonGroup}>
                <Text>Submit Number</Text>
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
        lookup_input_value: state.lookup.lookup_input_value
      });

      const mapDispatchToProps = (dispatch) => bindActionCreators({updateLookupValue}, dispatch);
  
export default connect(mapStateToProps,mapDispatchToProps)(LookupBar);