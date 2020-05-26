import Action from './actions';

const initialState = {
  listData: [],
  data: [],
  type: [],
  listTypeByID: [],
  urlVideo: {},
  listDataByYear: []
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
    case Action.GET_REGULATION_BY_YEAR_RESPONSE:
      return {
        ...state,
        listDataByYear: action.data
      };
    case Action.GET_TYPE_REGULATION_BY_ID_RESPONSE: {
      return {
        ...state,
        listTypeByID: action.data
      };
    }
    case Action.SEARCH_REGULATION_BY_TYPE_RESPONSE: {
      console.log('action.data:', action.data);

      return {
        ...state,
        listData: action.data
      };
    }
    default:
      return state;
  }
};

export default regulationReducer;
