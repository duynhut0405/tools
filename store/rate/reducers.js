import Actions from './actions';

const initialstate = {
  data: {}
};

const rateReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Actions.GET_RATE_RESPONSE:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
};

export default rateReducer;
