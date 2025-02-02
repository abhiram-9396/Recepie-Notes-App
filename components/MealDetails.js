import {View,Text,StyleSheet} from 'react-native';
export default function MealDetails({duration, complexity, affordability, style, textstyle})
{
    return <View style={[styles.details, style]}>
    <Text style={[styles.detailItem,textstyle]}>{duration}m</Text>
    <Text style={[styles.detailItem,textstyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItem,textstyle]}>{affordability.toUpperCase()}</Text>
    </View>
}

const styles = StyleSheet.create({
    details:
    {
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailItem:
    {
        marginHorizontal: 4,
        fontSize:12,
    },
});