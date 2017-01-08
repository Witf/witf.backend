var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { typeName, Action } from 'redux-typed';
import { fetch, addTask } from 'domain-task';
let LoadingRecipeDetailsAction = class LoadingRecipeDetailsAction extends Action {
    constructor(id) {
        super();
        this.id = id;
    }
};
LoadingRecipeDetailsAction = __decorate([
    typeName("recipeDetails_LoadingRecipeDetailsAction")
], LoadingRecipeDetailsAction);
export { LoadingRecipeDetailsAction };
let RecievedRecipeDetailsAction = class RecievedRecipeDetailsAction extends Action {
    constructor(id, recipie) {
        super();
        this.id = id;
        this.recipie = recipie;
    }
};
RecievedRecipeDetailsAction = __decorate([
    typeName("recipeDetails_LoadedRecipeDetailsAction")
], RecievedRecipeDetailsAction);
export { RecievedRecipeDetailsAction };
let ErrorLoadingRecipeDetailsAction = class ErrorLoadingRecipeDetailsAction extends Action {
    constructor(id) {
        super();
        this.id = id;
    }
};
ErrorLoadingRecipeDetailsAction = __decorate([
    typeName("recipeDetails_ErrorLoadingRecipeDetailsAction")
], ErrorLoadingRecipeDetailsAction);
export { ErrorLoadingRecipeDetailsAction };
export const recipeDetailsActions = {
    loadRecipeDetails: (id) => (dispatch, getState) => {
        dispatch(new LoadingRecipeDetailsAction(id));
        const fetchTask = fetch(`/api/search/recipe/${encodeURIComponent(id)}`)
            .then(response => response.json())
            .then((recipie) => {
            dispatch(new RecievedRecipeDetailsAction(id, recipie));
        });
        addTask(fetchTask);
    }
};
//# sourceMappingURL=recipeDetailsActions.js.map