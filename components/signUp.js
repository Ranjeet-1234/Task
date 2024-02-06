import { Text, StyleSheet, View, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default function SignUp() {
    return (
        <View style={styles.main}>
            <View style={styles.logo}>
                <Image source={{}} style={styles.logoimg} />
            </View>
            <Text style={styles.Text}>Create Account</Text>
            <View style={styles.border}>
                <View style={styles.container}>
                    <TextInput style={styles.inp} placeholder="Name" placeholderTextColor='black' />
                    <TextInput style={styles.inp} placeholder="Username" placeholderTextColor='black' />
                    <TextInput style={styles.inp} placeholder="Email" placeholderTextColor='black' />
                    <TextInput style={styles.inp} placeholder="Password" placeholderTextColor='black' />
                    <TextInput style={styles.inp} placeholder="Confirm Password" placeholderTextColor='black' />
                </View>
            </View>
            <View style={styles.btn}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>SignUp</Text>
            </View>
            <Text style={{ color: 'blue', fontSize: 17, marginTop: 10 }}>Login</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: 'center',
        paddingTop: 20
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        padding: 5
    },
    logoimg: {
        width: "100%",
        height: '100%',
        borderRadius: 200,
        resizeMode: 'cover',
        backgroundColor: 'red'
    },
    Text: {
        fontSize: 20,
        padding: 5,
        marginTop: 10,
        borderRadius: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    border:{
        borderWidth:5,
        borderColor:'white',
        padding:7,
        borderRadius:40

    },
    container: {
        // borderWidth: 2,
        borderRadius: 30,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
        backgroundColor: 'white'
    },
    inp: {
        borderWidth: 2,
        borderRadius: 30,
        paddingLeft: 25,
        width: 200,
        backgroundColor: 'white',
    },
    btn: {
        marginTop: 20,
        borderWidth: 2,
        padding: 10,
        borderRadius: 30,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
})