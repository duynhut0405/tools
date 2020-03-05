import Action from './actions';

const initialState = {
  listData: [],
  data: [],
  type: [],
  urlVideo: {}
};

const regulationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_REGULATION_PAGINATION_RESPONSE:
      return {
        ...state,
        listData: action.data
      };
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
    case Action.GET_URL_VIDEO_RESPONSE:
      return {
        ...state,
        urlVideo: action.data
      };
    default:
      return state;
  }
};

export default regulationReducer;
