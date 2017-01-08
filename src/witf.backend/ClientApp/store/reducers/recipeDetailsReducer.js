import { isActionType } from 'redux-typed';
import * as Actions from "../actions/recipeDetailsActions";
const unloadedState = {};
function init(id, state) {
    if (!!state[id]) {
        state[id] = { data: null, error: false, loading: false };
        return Object.assign({}, state);
    }
    return state;
}
function update(id, state, newObject) {
    init(id, state);
    state[id] = Object.assign({}, state[id], newObject);
    return Object.assign({}, state);
}
export const recipeDetailsReducer = (state, action) => {
    if (isActionType(action, Actions.LoadingRecipeDetailsAction)) {
        state = update(action.id, state, { loading: true });
        return state;
    }
    if (isActionType(action, Actions.ErrorLoadingRecipeDetailsAction)) {
        state = update(action.id, state, { loading: false });
        return state;
    }
    if (isActionType(action, Actions.RecievedRecipeDetailsAction)) {
        state = update(action.id, state, { data: action.recipie, loading: false });
        return state;
    }
    return state || unloadedState;
};
//# sourceMappingURL=recipeDetailsReducer.js.map