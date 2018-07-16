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
    Button,
    Icon,
    Body,
    Title,
    Right,
    Header,
    Container,
    Subtitle,
    Card,
    CardItem,
    Content,
    Image
} from 'native-base';
import BearShowYou from '../ui/BearShowYou';



import {toggleResults} from './actions';

//Connect component to Redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Import redux actions for the actioncreatorimport
const checkForLookupInfoForHeader = (lookup_info) => {
    if(lookup_info.caller_name){
        return `${lookup_info.caller_name.caller_name} (${lookup_info.phone_number})`;
    }
    return "No Lookup Defined"; 
}

const generateCallerInformationBody = (lookup_info) => {
    if(lookup_info.caller_name){
        return (
            <Container style={styles.infoContainer}>
                <Text><Text style={styles.infoCategories}>Caller Name:</Text> {lookup_info.caller_name.caller_name}</Text>
                <Text><Text style={styles.infoCategories}>Type Of Caller:</Text> {lookup_info.caller_name.caller_type}</Text>
                <Text><Text style={styles.infoCategories}>Country:</Text> {lookup_info.country_code}</Text>
                <Text><Text style={styles.infoCategories}>Phone Number:</Text> {lookup_info.phone_number}</Text>
            </Container>
        );
    }
    return (
        <Text>Loading...</Text>
    )
}

const generateCarrierInformationBody = (lookup_info) => {
    if(lookup_info.caller_name){
        return (
            <Container style={styles.infoContainer}>
                <Text><Text style={styles.infoCategories}>Carrier</Text>: {lookup_info.carrier.name}</Text>
                <Text><Text style={styles.infoCategories}>Line Type:</Text> {lookup_info.carrier.type}</Text>
                <Text><Text style={styles.infoCategories}>Mobile Country Code:</Text> {lookup_info.carrier.mobile_country_code}</Text>
                <Text><Text style={styles.infoCategories}>Mobile Network Code:</Text> {lookup_info.carrier.mobile_network_code}</Text>
            </Container>
        );
    }
    return (
        <Text>Loading...</Text>
    )
}


const ModalResults = ({resultsVisibility, toggleResults, lookup_info}) => {
    return (
    // <View>
        <Modal 
            animationType="slide" 
            transparent={false} 
            visible={resultsVisibility}
            onRequestClose={() => toggleResults()}
            presentationStyle="formSheet"
        >
        {/* <Container> */}
                {/* <View style={styles.head}> */}
                    <Header style={styles.statusBar}>
                        <Left>
                            <Button onPress={toggleResults} transparent>
                                <Icon name="arrow-back"/>
                            </Button>
                        </Left>
                        <Body>
                            <Subtitle style={styles.subtitle}>
                                {checkForLookupInfoForHeader(lookup_info)}
                            </Subtitle>
                        </Body>
                        <Right />
                    </Header>
                        <Content contentContainerStyle={styles.cardContent}>
                        <BearShowYou style={{height: '10%'}}/>
                        <Card style={styles.card}>
                            <CardItem header>
                                <Text style={styles.infoHeader}>Caller Information</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    {generateCallerInformationBody(lookup_info)}
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={styles.card}>
                            <CardItem header>
                                <Text style={styles.infoHeader}>Carrier Information</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    {generateCarrierInformationBody(lookup_info)}
                                </Body>
                            </CardItem>
                        </Card>
                        </Content>
                {/* </View> */}
         {/* </Container> */}
        </Modal>
    // </View>
)}

const styles = StyleSheet.create({
    head:{
        ...Platform.select({
            android:{
                flex:1,
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
    },
    subtitle:{
        ...Platform.select({
            android:{
                flexDirection: "column",
                width:"100%"
            },
            ios:{
    
            }
        }),
      },
      card:{
        ...Platform.select({
            android:{
                alignItems: "center",
                justifyContent:"center",
                width:"80%",
                height:"100%"
            },
            ios:{
    
            }
        }),
      },
      cardContent:{
        ...Platform.select({
            android:{
                alignItems: "center",
                justifyContent:"center",
            },
            ios:{
    
            }
        }),
      },
      infoHeader:{
        ...Platform.select({
            android:{
                fontSize: 17,
                fontWeight:"bold"
            },
            ios:{
    
            }
        }),
      },
      infoCategories:{
        ...Platform.select({
            android:{
                fontSize: 14,
                fontWeight:"bold"
            },
            ios:{
    
            }
        }),
      },
      infoContainer:{
        ...Platform.select({
            android:{
                height:"100%"
            },
            ios:{
    
            }
        }),
      }
    
});


const mapStateToProps = (state) => ({
    resultsVisibility: state.lookup.resultsVisibility,
    lookup_info: state.lookup.lookup_info
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleResults
}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(ModalResults);