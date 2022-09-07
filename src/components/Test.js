import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = ({arr}) => {
    
    return (
        <View>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <FlatList 
            data={arr}
            renderItem={({item}) => {
            return (
                <Text style={{backgroundColor:"#ccc", color:"white", padding:10, marginHorizontal:5, width:200, height:200}}>{item}</Text>
            )
            }}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>100</Text>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({})