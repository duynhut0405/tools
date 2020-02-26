const Actions = {
  GET_HOME_REQUEST: 'GET_HOME_REQUEST',
  GET_HOME_RESPONSE: 'GET_HOME_RESPONSE',

  getHomeAction: name => ({
    type: Actions.GET_HOME_REQUEST,
    name
  }),

  GET_PAGES_BY_ID_REQUEST: 'GET_PAGES_BY_ID_REQUEST',
  GET_PAGES_BY_ID_RESPONSE: 'GET_PAGES_BY_ID_RESPONSE',

  getPagesById: data => ({
    type: Actions.GET_PAGES_BY_ID_REQUEST,
    data
  })
};

export default Actions;
