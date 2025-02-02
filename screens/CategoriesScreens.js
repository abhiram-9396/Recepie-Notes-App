import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({navigation}) //we use object destruscturing to use the navigation component(default)
{
    function renderCategoryItem(ItemData)
    {
        function PressHandler()
        {
            navigation.navigate('MealsOverview',{
                categoryId: ItemData.item.id,
            }); 
            //here the MealsOverview is the same name given to the Mealsoverview component
        }

        return <CategoryGridTile 
        title={ItemData.item.title} 
        color={ItemData.item.color}
        onPress={PressHandler}
        />;
    }

    return <FlatList  
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}/>
}

export default CategoriesScreen;