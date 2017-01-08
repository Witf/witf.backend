import * as React from "react";
import "./recipesSearchResultList.scss";
import { RecipeCard } from "../recipeCard/recipeCard";
export function RecipesSearchResultList(props) {
    const noResults = !!props.query && props.recipies.length < 1;
    if (noResults && !props.searching) {
        return <h5 style={{ color: "#FFF", width: "100%" }}>Søk etter '{props.query}' gav ingen treff</h5>;
    }
    if (props.recipies.length > 0) {
        return (<div className="recipesSearchResultList">
                {props.recipies.map((recipe, i) => <RecipeCard recipe={recipe} key={i}/>)}
            </div>);
    }
    return null;
}
//# sourceMappingURL=recipesSearchResultList.jsx.map