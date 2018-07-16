import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base';

const ConfusedBear = () => (
    <Container>
            <Image
                style={styles.bear}
                source={require('../icons/transparent_confusedbear.png')}
                resizeMode="cover"
            />
    </Container>
)

const styles = StyleSheet.create({
        bear:{
            flex:1,
            justifyContent: "center",
            marginTop: '10%',
        }
});

export default ConfusedBear;