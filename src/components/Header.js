import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

const Header = ({page, cart}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>KMShop</Text>
            {page==="home"?(
                <TouchableOpacity onPress={() => navigation.navigate('Signin')} style={styles.btn}>
                    <Text style={{color:"white"}}>Sign In</Text>
                </TouchableOpacity>
            ): (
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
                    <FontAwesome name='cart-arrow-down' color="white" size={23} />
                    <Text style={{color:"white", fontSize:17, marginLeft:3}}>{cart}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingTop:30,
        backgroundColor:"#311b6b",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    logo: {
        color:"white",
        fontSize:18,
        fontWeight:"700",
    },
    btn: {
        borderWidth:1,
        borderColor:"#666",
        padding:10,
        marginVertical:5,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center"
    }
})