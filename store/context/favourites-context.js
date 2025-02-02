import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids:[],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});

function FavouritesContextProvider({children}){
    const [FavouriteMealIds, SetFavouriteMealIds] = useState([]);

    function addFavourite(id)
    {
        SetFavouriteMealIds((currentfavids) => [...currentfavids,id]);
    }

    function removeFavourite(id)
    {
        SetFavouriteMealIds((currentfavids) => currentfavids.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: FavouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    };

    return <FavouritesContext.Provider value={value} >{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;