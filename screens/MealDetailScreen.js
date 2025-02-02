import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import IconButton from '../components/IconButton';
import {MEALS} from '../data/dummy-data';
import { useContext, useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import {FavouritesContext} from '../store/context/favourites-context';

function MealDetailScreen({route , navigation})
{
    const favouriteMealsctx = useContext(FavouritesContext);

    const mealId = route.params.mealId;

    const selectedMeal =  MEALS.find((meal) => meal.id === mealId);

    const mealIsFav = favouriteMealsctx.ids.includes(mealId);

    function ChangeFavouriteStatusHandler()
    {
        if(mealIsFav)
        {
            favouriteMealsctx.removeFavourite(mealId);
        }
        else
        {
            favouriteMealsctx.addFavourite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                title= { mealIsFav ? "Remove Fav" : "Add To Fav" } 
                onPress={ChangeFavouriteStatusHandler}/>
            }
        });
    }, [navigation,ChangeFavouriteStatusHandler]);

    return (<ScrollView style={styles.rootcontainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration} 
            affordability={selectedMeal.affordability} 
            complexity={selectedMeal.complexity}
            textstyle={styles.detailtext}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps!!</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootcontainer:
    {
        marginBottom:32,
    },
    image:
    {
        width:'100%',
        height:350,
    },
    title:
    {
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white',
    },
    detailtext:
    {
        color:'white',
    },
    listContainer:
    {
        width:'80%',
    },
    listOuterContainer:
    {
        alignItems:'center',
    }
});

export default MealDetailScreen;




//below code is for using redux and above is by using context api






// import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
// import IconButton from '../components/IconButton';
// import {MEALS} from '../data/dummy-data';
// import { useLayoutEffect } from 'react';
// import MealDetails from '../components/MealDetails';
// import Subtitle from '../components/MealDetail/Subtitle';
// import List from '../components/MealDetail/List';
// import { useDispatch, useSelector } from 'react-redux';
// import {addFavourite, removeFavourite} from '../store/redux/favourites';
// // import {FavouritesContext} from '../store/context/favourites-context';

// function MealDetailScreen({route , navigation})
// {
//     // const favouriteMealsctx = useContext(FavouritesContext);
//     const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
//     const dispatch = useDispatch();

//     const mealId = route.params.mealId;

//     const selectedMeal =  MEALS.find((meal) => meal.id === mealId);

//     const mealIsFav = favouriteMealIds.includes(mealId);

//     function ChangeFavouriteStatusHandler()
//     {
//         if(mealIsFav)
//         {
//             // favouriteMealsctx.removeFavourite(mealId);
//             dispatch(removeFavourite({ id : mealId }));
//         }
//         else
//         {
//             // favouriteMealsctx.addFavourite(mealId);
//             dispatch(addFavourite({ id : mealId }));
//         }
//     }

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerRight: () => {
//                 return <IconButton 
//                 title= { mealIsFav ? "Remove Fav" : "Add To Fav" } 
//                 onPress={ChangeFavouriteStatusHandler}/>
//             }
//         });
//     }, [navigation,ChangeFavouriteStatusHandler]);

//     return (<ScrollView style={styles.rootcontainer}>
//         <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
//         <Text style={styles.title}>{selectedMeal.title}</Text>
//         <MealDetails 
//             duration={selectedMeal.duration} 
//             affordability={selectedMeal.affordability} 
//             complexity={selectedMeal.complexity}
//             textstyle={styles.detailtext}
//         />
//         <View style={styles.listOuterContainer}>
//             <View style={styles.listContainer}>
//                 <Subtitle>Ingredients</Subtitle>
//                 <List data={selectedMeal.ingredients}/>
//                 <Subtitle>Steps!!</Subtitle>
//                 <List data={selectedMeal.steps}/>
//             </View>
//         </View>
//     </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     rootcontainer:
//     {
//         marginBottom:32,
//     },
//     image:
//     {
//         width:'100%',
//         height:350,
//     },
//     title:
//     {
//         fontWeight:'bold',
//         fontSize:24,
//         margin:8,
//         textAlign:'center',
//         color:'white',
//     },
//     detailtext:
//     {
//         color:'white',
//     },
//     listContainer:
//     {
//         width:'80%',
//     },
//     listOuterContainer:
//     {
//         alignItems:'center',
//     }
// });

// export default MealDetailScreen;