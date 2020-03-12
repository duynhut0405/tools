import Action from './actions';

const initialState = {
  listNewsByCategory: {},
  listNewsByCategorySlug: {}
};

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.FILL_NEWS_BY_CATEGORY_RESPONSE:
      return {
        ...state,
        listNewsByCategory: action.data
      };
    case Action.GET_NEW_BY_CATEGORY_SLUG_RESPONSE:
      return {
        ...state,
        listNewsByCategorySlug: action.data
      };

    default:
      return state;
  }
};

export default newReducer;
