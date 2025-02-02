import { useContext } from "react"
import MealsList from "../components/MealsList/MealsList"
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context"
import { StyleSheet,Text,View } from "react-native";

export default function FavouriteScreen()
{
    const favMealctx =  useContext(FavouritesContext);

    const FavouriteMeals = MEALS.filter( 
        meal => favMealctx.ids.includes(meal.id) //returning the ids which are included in the fav meals array.
    );

    if(FavouriteMeals.length === 0)
    {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You Have No Favourite Meals Yet.</Text>
        </View>
    }

    return <MealsList items={FavouriteMeals}/>
}

const styles = StyleSheet.create({
    rootContainer:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:
    {
        fontSize:18,
        fontWeight:'bold',
        color:'white',

    }
});


//Below is redux code





// // import { useContext } from "react"
// import MealsList from "../components/MealsList/MealsList"
// import { MEALS } from "../data/dummy-data";
// // import { FavouritesContext } from "../store/context/favourites-context"
// import { StyleSheet,Text,View } from "react-native";
// import { useSelector } from "react-redux";

// export default function FavouriteScreen()
// {
//     // const favMealctx =  useContext(FavouritesContext);
//     const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

//     const FavouriteMeals = MEALS.filter( 
//         (meal) => favouriteMealIds.includes(meal.id) //returning the ids which are included in the fav meals array.
//     );

//     if(FavouriteMeals.length === 0)
//     {
//         return <View style={styles.rootContainer}>
//             <Text style={styles.text}>You Have No Favourite Meals Yet.</Text>
//         </View>
//     }

//     return <MealsList items={FavouriteMeals}/>
// }

// const styles = StyleSheet.create({
//     rootContainer:
//     {
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     text:
//     {
//         fontSize:18,
//         fontWeight:'bold',
//         color:'white',

//     }
// });