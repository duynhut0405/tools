import Actions from './actions';

const initialState = {
  listBranches: [],
  listProvince: [],
  listDistrict: []
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_BRANCHES_RESPONSE:
      return {
        ...state,
        listBranches: action.data
      };
    case Actions.GET_PROVINCE_RESPONSE:
      return {
        ...state,
        listProvince: action.data
      };
    case Actions.GET_DISTRICT_RESPONSE:
      return {
        ...state,
        listDistrict: action.data
      };
    default:
      return state;
  }
};

export default mapReducer;
