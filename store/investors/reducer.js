import Actions from './actions';

const intialState = {
  listNewInvestor: [],
  listNewNotification: []
};

const investorsReducer = (state = intialState, action) => {
  switch (action.type) {
    case Actions.GET_NEW_INVESTOR_RESPONSE:
      return {
        ...state,
        listNewInvestor: action.data
      };
    case Actions.GET_NEW_INVESTOR_NOTIFICATION_RESPONSE:
      return {
        ...state,
        listNewNotification: action.data
      };
    default:
      return state;
  }
};

export default investorsReducer;
