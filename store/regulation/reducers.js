import Action from './actions';

const initialState = {
  data: [],
  type: []
};

const regulationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SEARCH_REGULATION_RESPONSE:
      return {
        ...state,
        data: action.data
      };
    case Action.GET_TYPE_REGULATION_RESPONSE:
      return {
        ...state,
        type: action.data
      };
    default:
      return state;
  }
};

export default regulationReducer;
