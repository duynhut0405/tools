import Action from './actions';

const initialState = {
  listNewsByCategory: {}
};

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.FILL_NEWS_BY_CATEGORY_RESPONSE:
      return {
        ...state,
        listNewsByCategory: action.data
      };

    default:
      return state;
  }
};

export default newReducer;
