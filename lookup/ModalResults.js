import React, { Component } from 'react';
import { Text, 
        Modal, 
        TouchableHighlight, 
        View,
        StatusBar,
        Platform,
        StyleSheet
        } from 'react-native';
import {
    Left,
    Body,
    Title,
    Right,
    Header,
    Container
} from 'native-base';



import {toggleResults} from './actions';

//Connect component to Redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Import redux actions for the actioncreatorimport


const ModalResults = ({resultsVisibility, toggleResults}) => {
    console.log(resultsVisibility);
    return (
    <View>
        <Modal 
            animationType="slide" 
            transparent={false} 
            visible={resultsVisibility}
            onRequestClose={() => toggleResults()}
            presentationStyle="formSheet"
        >
        <Container>
                <View style={styles.head}>
                    <Header style={styles.statusBar}>
                        <Left />
                        <Body>
                            <Title>Kuma Lookup</Title>
                        </Body>
                        <Right />
                    </Header>
                </View>
         </Container>
        </Modal>
    </View>
)}

const styles = StyleSheet.create({
    head:{
        ...Platform.select({
            android:{
                marginTop: StatusBar.currentHeight
            },
            ios:{
    
            }
        }),
      },
    statusBar:{
        ...Platform.select({
            android:{
                backgroundColor:"#6E2C00"
            },
            ios:{

            }
        }),
    }
    
});


const mapStateToProps = (state) => ({
    resultsVisibility: state.lookup.resultsVisibility
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleResults
}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(ModalResults);