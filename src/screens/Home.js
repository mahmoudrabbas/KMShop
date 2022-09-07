import { StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header';
import {StatusBar} from 'expo-status-bar';
import Search from '../components/Search';
import Categories from '../components/Categories';


const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Header page="home" />
            <Search />
            <Categories />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})