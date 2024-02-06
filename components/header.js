import { StyleSheet, Text, Image, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookOpenReader, faCartShopping, faHouse, faMagnifyingGlass, faMapLocation, faUser } from '@fortawesome/free-solid-svg-icons'
// import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import { TextInput } from 'react-native-gesture-handler';
// import { Image } from 'react-native-svg';
export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Image source={{}} style={styles.logoimg} />
            </View>
            <View style={styles.search}>
                <TextInput placeholder='Search' placeholderTextColor='black' height={40}/>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={20}/>
            </Views>
            <FontAwesomeIcon icon={faUser} size={25} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        // height: 40,
        backgroundColor: '#5159D4',
        flexDirection: 'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    logoimg:{
        width:40,
        height:40,
        backgroundColor:'white',
        borderRadius:20
    },
    search:{
        width:200,
        height:30,
        borderRadius:30,
        padding:5,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icon:{
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:10,
    }

})