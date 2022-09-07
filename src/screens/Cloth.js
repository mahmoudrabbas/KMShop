
import { Image, StyleSheet, Text, View, Pressable,TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Header from '../components/Header';
import { useReducer, useState } from 'react';
import {} from 'react-native-gesture-handler';


const initalCart = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return (state + action.payload);
        case "DECREMENT":
            return state-action.payload;
        default:
            return state;
    }
}


const Cloth = ({route}) => {
    const {product} = route.params;
    const [cart, dispatch] = useReducer(reducer, initalCart);
    const [count, setCount] = useState(0);
    const addToCart = () => {
        dispatch({ type:"INCREMENT", payload:count });
        setCount(0);
    }
    return (
        <View>
            <Header page="cloth" cart={cart} />
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:10}}>
                <View style={{flexDirection:"row", alignItems:"center", paddingVertical:10}}>
                    <FontAwesome name='star' size={20} color="gold" />
                    <Text>{product.rating}</Text>
                </View>
                <Text style={{color:"#311b6b", fontSize:18, fontWeight:"bold"}}>{product.price} .LE</Text>
            </View>
            <Image source={product.url} style={{width:"100%", height:420}} />
            <View style={styles.btns}>
                <Pressable style={[styles.btn]} onPress={() => setCount(prev => prev-1)}>
                    <Text style={styles.text}>-</Text>
                </Pressable>
                <TextInput keyboardType="numeric" style={styles.input} placeholder='Count' value={String(count)} onChangeText={(num) => setCount(parseInt(num)) } />
                <Pressable style={styles.btn} onPress={() => setCount(prev => prev+1)}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
            </View>
            <View style={styles.cancelContainer}>
                <Pressable onPress={addToCart} style={styles.cancel}>
                    <Text style={{textAlign:"center", color:"white"}}>Add to cart</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cloth

const styles = StyleSheet.create({
    btns: {
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:10,
        alignItems:"center"
    },
    btn:{
        backgroundColor:"#311b6b",
        padding:5,
        borderRadius:2,
        width:"15%",
    },
    input: {
        width:"30%",
        borderWidth:1,
        borderColor:"#ccc",
        padding:5,
        textAlign:"center"
    },
    text:{
        color:"white", 
        textAlign:"center",
        fontSize:20
    },
    cancelContainer: {
        paddingHorizontal:10,
        alignItems:"center",
        marginVertical:5
    },
    cancel: {
        backgroundColor:"brown",
        padding:10,
        width:"60%",
        borderRadius:2
    }
    
})