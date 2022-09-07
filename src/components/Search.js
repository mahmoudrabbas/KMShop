import { StyleSheet, Text, TextInput, View } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
const Search = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name='search' size={20} color="#333" />
            <TextInput placeholder='Search...' style={styles.searchInput} placeholderTextColor={"#311b6b"} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        backgroundColor:"#ccc",
        margin:10,
        borderRadius:20,
        shadowOffset:{width:5, height:5},
        shadowColor:"#311b6b",
        shadowOpacity:0.3,
        elevation:10
    },
    searchInput: {
        width:"95%",
        padding:5
    }
})