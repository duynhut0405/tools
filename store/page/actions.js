const Actions = {
  GET_HOME_REQUEST: 'GET_HOME_REQUEST',
  GET_HOME_RESPONSE: 'GET_HOME_RESPONSE',

  getHomeAction: name => ({
    type: Actions.GET_HOME_REQUEST,
    name
  })
};

export default Actions;
