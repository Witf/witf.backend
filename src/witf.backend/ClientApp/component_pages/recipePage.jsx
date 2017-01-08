import * as React from "react";
import { provide } from "redux-typed";
import { recipeDetailsActions } from "../store/actions/recipeDetailsActions";
class RecipePageClass extends React.Component {
    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.id);
    }
    render() {
        const id = this.props.params.id;
        if (!!this.props.details[id]) {
            const detailsMeta = this.props.details[id];
            if (!!detailsMeta && !!detailsMeta.data) {
                return <div className="page" style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", padding: 20, marginTop: "25%", height: 400, backgroundColor: "white" }}>
                    <h5>Loaded details data for {id}:</h5>
                    {JSON.stringify(detailsMeta)}
                </div>;
            }
        }
        return <div></div>;
    }
}
const provider = provide((state) => {
    return {
        details: state.recipeDetails
    };
}, recipeDetailsActions).withExternalProps();
export const RecipePage = provider.connect(RecipePageClass);
//# sourceMappingURL=recipePage.jsx.map