import Actions from './actions';

const initialState = {
  homedata: {},
  silder: [],
  middle: []
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_HOME_RESPONSE:
      return {
        ...state,
        homedata: action.data,
        silder: action.silder
      };

    default:
      return state;
  }
};

export default pageReducer;
