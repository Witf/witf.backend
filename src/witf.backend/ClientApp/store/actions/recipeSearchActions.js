var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { typeName, Action } from 'redux-typed';
import { fetch, addTask } from 'domain-task';
let QueryRecipesAction = class QueryRecipesAction extends Action {
    constructor(query) {
        super();
        this.query = query;
    }
};
QueryRecipesAction = __decorate([
    typeName("RecipeSearch_QUERY_RECIPES")
], QueryRecipesAction);
export { QueryRecipesAction };
let RecievedRecipiQueryAction = class RecievedRecipiQueryAction extends Action {
    constructor(query, recipies) {
        super();
        this.query = query;
        this.recipies = recipies;
    }
};
RecievedRecipiQueryAction = __decorate([
    typeName("RecipeSearch_RECIEVED_RECIPIES_QUERY")
], RecievedRecipiQueryAction);
export { RecievedRecipiQueryAction };
let QueryRecipeSearchSuggestionsAction = class QueryRecipeSearchSuggestionsAction extends Action {
    constructor(query) {
        super();
        this.query = query;
    }
};
QueryRecipeSearchSuggestionsAction = __decorate([
    typeName("RecipeSearch_QUERY_RECIPE_SEARCH_SUGGESTIONS")
], QueryRecipeSearchSuggestionsAction);
export { QueryRecipeSearchSuggestionsAction };
let RecievedRecipeSearchSuggestionsAction = class RecievedRecipeSearchSuggestionsAction extends Action {
    constructor(query, suggestions) {
        super();
        this.query = query;
        this.suggestions = suggestions;
    }
};
RecievedRecipeSearchSuggestionsAction = __decorate([
    typeName("RecipeSearch_RECIEVED_RECIPE_SEARCH_SUGGESTIONS")
], RecievedRecipeSearchSuggestionsAction);
export { RecievedRecipeSearchSuggestionsAction };
let ClearRecipeSearchSuggestionsAction = class ClearRecipeSearchSuggestionsAction extends Action {
    constructor() {
        super();
    }
};
ClearRecipeSearchSuggestionsAction = __decorate([
    typeName("RecipeSearch_CLEAR_RECIPE_SEARCH_SUGGESTIONS")
], ClearRecipeSearchSuggestionsAction);
export { ClearRecipeSearchSuggestionsAction };
export const recipeSearchActions = {
    queryRecipies: (q) => (dispatch, getState) => {
        let fetchTask = fetch(`/api/search/findRecipes?q=${q}`)
            .then(response => response.json())
            .then((data) => {
            dispatch(new RecievedRecipiQueryAction(q, data.recipes));
        });
        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch(new QueryRecipesAction(q));
    },
    querySuggestions: ({ value }) => (dispatch, getState) => {
        let fetchTask = fetch(`/api/search/autocomplete?w=${value}`)
            .then(response => response.json())
            .then((data) => {
            dispatch(new RecievedRecipeSearchSuggestionsAction(value, data));
        });
        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch(new QueryRecipeSearchSuggestionsAction(value));
    },
    clearSuggestions: () => (dispatch, getState) => {
        dispatch(new ClearRecipeSearchSuggestionsAction());
    }
};
//# sourceMappingURL=recipeSearchActions.js.map