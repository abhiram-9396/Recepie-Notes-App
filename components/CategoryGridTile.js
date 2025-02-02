import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native"; //useNavigation hook is used to provide the navigation object without using props to send it.

export default function CategoryGridTile({title, color, onPress})
{
    // const navigation = useNavigation(); //we can use that by executing here

    return(
        <View style={styles.griditem}>
            <Pressable android_ripple={{color:'#ccc'}} 
            style={ ({pressed}) => [styles.button , pressed ? styles.buttonPressed : null]}
            onPress={onPress}
            >
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    griditem:
    {
        flex:1,
        margin:16,
        height:150,
        backgroundColor:'white',
        borderRadius:8,
        elevation:4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible'
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        borderRadius:8,
    },
    button:
    {
        flex:1,
    },
    buttonPressed:
    {
        opacity: 0.5,
    },
    title:
    {
        fontWeight:'bold',
        fontSize:18,
    },
});