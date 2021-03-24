import { SAVE_ACTUAL_RECIPE, SAVE_RECOMMENDATIONS } from '../actions/details';

const INITIAL_STATE = {
  actualRecipe: {},
  recommendations: [],
};

export default function detailsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SAVE_ACTUAL_RECIPE:
    return { ...state, actualRecipe: payload.actualRecipe };
  case SAVE_RECOMMENDATIONS:
    return { ...state, recommendations: payload.recommendations };
  default:
    return state;
  }
}
