
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
                <Header style={styles.statusBar}>
                    <Left />
                    <Body>
                        <Title>Kuma Lookup</Title>
                    </Body>
                    <Right />
                </Header>
);

const styles = StyleSheet.create({
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