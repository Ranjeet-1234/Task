import { Image, StyleSheet, Text, View } from "react-native"
export default function Login(){
    return(
        <View style={styles.main}>
            <View style={styles.logo}>
                <Image source={{}} style={styles.logoimg}/>
            </View>
            <Text style={styles.Text}>LogIn As</Text>
            <View style={styles.container}>
                <View style={styles.manglog}>
                    <Image source={{}} style={styles.img}/>
                    <Text style={[styles.Text,styles.magText]}>Manager</Text>
                </View>
                <Text style={[styles.Text,{width:50,alignSelf:'center'}]}>OR</Text>
                <View style={[styles.manglog,{alignSelf:'flex-end',textAlign:'center',alignItems:'flex-end'}]}>
                    <Image source={{}} style={styles.img}/>
                    <Text style={[styles.Text,styles.magText,{left:-20}]}>User</Text>
                </View>
                <View></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"lightblue",
        alignItems:'center',
        paddingTop:20
    },
    logo:{
        width:200,
        height:200,
        borderRadius:100,
        borderWidth:3,
        padding:5
    },
    logoimg:{
        width:"100%",
        height:'100%',
        borderRadius:200,
        resizeMode:'cover',
        backgroundColor:'red'
    },
    Text:{
        fontSize:25,
        borderWidth:2,
        padding:5,
        marginTop:10,
        borderRadius:10,
        color:'black',
        fontWeight:'bold'
    },
    container:{
        width:"100%",
        marginTop:20,
        padding:10,
    },
    manglog:{
        width:300,
        height:180,
    },
    img:{
        height:170,
        width:170,
        borderRadius:100,
        backgroundColor:'white'
    },
    magText:{
        textAlign:'center',
        position:'absolute',
        top:110,
        left:100,
        width:230,
        zIndex:-1
    }
})