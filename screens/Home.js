import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import NasaInfo from '../components/NasaInfo';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <NasaInfo />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
});
