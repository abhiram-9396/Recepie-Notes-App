import { useLayoutEffect } from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverView({ route, navigation }) 
//just like navigation prop we get the route prop for the cunction which is registered as the screen.
// we can use useRoute prop for the alternative of route object destructuring. 
{
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >=0;
    });

    useLayoutEffect(() => {
        //instead of using useEffect we have used the useLayouteffect for smooth rendering of title
        const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    },[catId,navigation]);
    
    return <MealsList items={displayMeals}/>
    
}

export default MealsOverView;