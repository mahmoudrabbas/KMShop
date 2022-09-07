import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Category = ({item}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.txt}>{item.type}</Text>
                <TouchableOpacity>
                    <Text style={styles.txt}>See more</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList 
                data={item.clothes}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Cloth", {product: item})} style={styles.imgContainer}>
                            <View style={styles.imgContainer}>
                                <Image source={item.url} style={styles.img} />
                            </View>
                            <Text style={{color:"#333", fontWeight:"bold"}}>{item.price} LE</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.cId}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {

    },
    img: {
        width:110,
        height:140
    },
    imgContainer:{
        marginHorizontal:15,
        alignItems:"center"
    },
    txt: {
        fontSize:16, 
        fontWeight:"700", 
        marginHorizontal:10, 
        color: "#333", 
        marginVertical:10
    }
})