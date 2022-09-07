import { FlatList, StyleSheet,ScrollView, SafeAreaView, View } from 'react-native'
import React from 'react'
import Category from './Category';
import categories from '../shared/clothes';
const Categories = () => {
    return (
        <FlatList 
        data={categories}
        renderItem={({item}) => {
            return (
                <View style={styles.container}>
                    <Category item={item} />
                </View>
            )
        }}
        keyExtractor={(item) => item.id}
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        marginVertical:10
    }
})