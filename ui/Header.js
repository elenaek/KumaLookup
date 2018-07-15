
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
    Container
} from 'native-base';

const Head = () => (
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
);

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

export default Head