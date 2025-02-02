import { View , Text, StyleSheet} from "react-native";
export default function List({data})
{
    return data.map((datapoint) => (
    <View key={datapoint} style={styles.listitem}>
        <Text style={styles.itemtext}>{datapoint}</Text>
    </View>
    ));
}

const styles = StyleSheet.create({
    listitem:
    {
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:4,
        backgroundColor: '#e2b497',
    },
    itemtext:
    {
        color:'#351401',
        textAlign:'center',
    },
});
