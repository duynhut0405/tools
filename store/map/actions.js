const Actions = {
  SEARCH_BRANCHES_REQUEST: 'SEARCH_BRANCHES_REQUEST',
  SEARCH_BRANCHES_RESPONSE: 'SEARCH_BRANCHES_RESPONSE',

  searchBranchesAction: params => ({
    type: Actions.SEARCH_BRANCHES_REQUEST,
    params
  }),

  GET_PROVINCE_REQUEST: 'GET_PROVINCE_REQUEST',
  GET_PROVINCE_RESPONSE: 'GET_PROVINCE_RESPONSE',

  getProvinceAction: () => ({
    type: Actions.GET_PROVINCE_REQUEST
  }),

  GET_DISTRICT_REQUEST: 'GET_DISTRICT_REQUEST',
  GET_DISTRICT_RESPONSE: 'GET_DISTRICT_RESPONSE',

  getDistrictAction: id => ({
    type: Actions.GET_DISTRICT_REQUEST,
    id
  })
};

export default Actions;
