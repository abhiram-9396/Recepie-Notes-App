import {View,FlatList,StyleSheet} from 'react-native';
import Mealitem from './Mealitem';

export default function MealsList({items})
{
    function renderMealitem(itemData)
    {
        const item = itemData.item;
        const Mealitemprops =
        {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };
        return <Mealitem {...Mealitemprops}/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={items} 
            keyExtractor={(item)=> item.id} 
            renderItem={renderMealitem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        padding:16,
    }
});