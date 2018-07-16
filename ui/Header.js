
import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    Platform,
} from 'react-native';
import {
    Left,
    Body,
    Title,
    Right,
    Header,
    Container,
    Content
} from 'native-base';

const Head = () => (
    // <Content>
    //         <View style={styles.head}>
                <Header style={styles.statusBar}>
                    <Left />
                    <Body>
                        <Title>Kuma Lookup</Title>
                    </Body>
                    <Right />
                </Header>
    //         </View>
    // </Content>
);

const styles = StyleSheet.create({
    // head:{
    //     ...Platform.select({
    //         android:{
    //             marginTop: StatusBar.currentHeight,
    //             padding:0,
    //             margin: 0,
    //         },
    //         ios:{
    
    //         }
    //     }),
    //   },
    statusBar:{
        ...Platform.select({
            android:{
                marginTop: StatusBar.currentHeight,
                backgroundColor:"#6E2C00",
            },
            ios:{

            }
        }),
    }
    
});

export default Head