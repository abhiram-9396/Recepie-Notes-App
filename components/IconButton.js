import { Button, Pressable, StyleSheet } from "react-native";
// import {Ionicons} from '@expo/vector-icons';

export default function IconButton({title,onPress})
{
    return (<Pressable  style={({pressed})=> pressed && styles.pressed }>
        {/* <Ionicons name={icon} size={24} color={color}/> */}
        <Button title={title} onPress={onPress}/>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
});