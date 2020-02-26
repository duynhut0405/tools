import Actions from './actions';

const initialState = {
  homedata: {},
  silder: [],
  middle: [],
  listPages: []
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_HOME_RESPONSE:
      return {
        ...state,
        homedata: action.data,
        silder: action.silder
      };
    case Actions.GET_PAGES_BY_ID_RESPONSE:
      return {
        ...state,
        listPages: action.data
      };
    default:
      return state;
  }
};

export default pageReducer;
