import * as React from "react";
import { provide } from "redux-typed";
import { RecipeSearchBox } from "../components/recipeSearchBox/recipeSearchBox";
import "./homePage.scss";
import { RecipesSearchResultList } from "../components/recipesSearchResultList/recipesSearchResultList";
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="page_home">
                <div className="page">
                    <RecipeSearchBox location={this.props.location}/>
                    <RecipesSearchResultList searching={this.props.isLoading} query={this.props.currentQuery} recipies={this.props.queryResults}/>
                </div>
            </div>);
    }
}
const provider = provide((state) => state.recipeSearchsState, {}).withExternalProps();
export const HomePage = provider.connect(Home);
//# sourceMappingURL=homePage.jsx.map