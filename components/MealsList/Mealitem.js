import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import {useNavigation} from '@react-navigation/native';
import MealDetails from "../MealDetails";
//we are using useNavigation hook to use the navigation effect btwn screens

function Mealitem({id, title, imageUrl, duration, complexity, affordability})
{
    const navigation = useNavigation();

    function selectmealItemhandler()
    {
        navigation.navigate('MealDetail',{
            mealId: id,
        });
    }
    
    return(
        <View style={styles.mealitem}>
            <Pressable 
            android_ripple={{color:'#ccc'}}
            style={ ({pressed}) => pressed ? styles.buttonPressed : null}
            onPress={selectmealItemhandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                    duration={duration} 
                    affordability={affordability} 
                    complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image:
    {
        width:'100%',
        height:200,
    },
    title:
    {
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    innerContainer:
    {
        borderRadius:8,
        overflow:'hidden',
    },
    mealitem:
    {
        margin:16,
        borderRadius:8,
        backgroundColor:'white',
        elevation:4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible'
    },
    buttonPressed:
    {
        opacity: 0.5,
    },
});

export default Mealitem;