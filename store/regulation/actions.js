const Actions = {
  GET_REGULATION_PAGINATION_REQUEST: 'GET_REGULATION_PAGINATION_REQUEST',
  GET_REGULATION_PAGINATION_RESPONSE: 'GET_REGULATION_PAGINATION_RESPONSE',

  getRegulation: (types, year, number, page) => ({
    type: Actions.GET_REGULATION_PAGINATION_REQUEST,
    types,
    year,
    number,
    page
  }),

  GET_TYPE_REGULATION_REQUEST: 'GET_TYPE_REGULATION_REQUEST',
  GET_TYPE_REGULATION_RESPONSE: 'GET_TYPE_REGULATION_RESPONSE',

  getTypeRegulationAction: () => ({
    type: Actions.GET_TYPE_REGULATION_REQUEST
  }),

  SEARCH_REGULATION_REQUEST: 'SEARCH_REGULATION_REQUEST',
  SEARCH_REGULATION_RESPONSE: 'SEARCH_REGULATION_RESPONSE',

  searchRegulationAction: data => ({
    type: Actions.SEARCH_REGULATION_REQUEST,
    data
  }),

  GET_URL_VIDEO_REQUEST: 'GET_URL_VIDEO_REQUEST',
  GET_URL_VIDEO_RESPONSE: 'GET_URL_VIDEO_RESPONSE',

  getUrlVideo: data => ({
    type: Actions.GET_URL_VIDEO_REQUEST,
    data
  }),

  GET_REGULATION_BY_YEAR_REQUEST: 'GET_REGULATION_BY_YEAR_REQUEST',
  GET_REGULATION_BY_YEAR_RESPONSE: 'GET_REGULATION_BY_YEAR_RESPONSE',

  getRegulationByYear: (types, detailTypeId, number, page, year) => ({
    type: Actions.GET_REGULATION_BY_YEAR_REQUEST,
    types,
    detailTypeId,
    number,
    page,
    year
  }),

  GET_TYPE_REGULATION_BY_ID_REQUEST: 'GET_TYPE_REGULATION_BY_ID_REQUEST',
  GET_TYPE_REGULATION_BY_ID_RESPONSE: 'GET_TYPE_REGULATION_BY_ID_RESPONSE',

  getTypeRegulationByIDAction: id => ({
    type: Actions.GET_TYPE_REGULATION_BY_ID_REQUEST,
    id
  }),

  SEARCH_REGULATION_BY_TYPE_REQUEST: 'SEARCH_REGULATION_BY_TYPE_REQUEST',
  SEARCH_REGULATION_BY_TYPE_RESPONSE: 'SEARCH_REGULATION_BY_TYPE_RESPONSE',

  searchRegulationByTypeAction: data => ({
    type: Actions.SEARCH_REGULATION_BY_TYPE_REQUEST,
    data
  })
};

export default Actions;
