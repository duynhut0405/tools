const Actions = {
  GET_NEW_INVESTOR_REQUEST: 'GET_NEW_INVESTOR_REQUEST',
  GET_NEW_INVESTOR_RESPONSE: 'GET_NEW_INVESTOR_RESPONSE',

  getNewInvestorAction: id => ({
    type: Actions.GET_NEW_INVESTOR_REQUEST,
    id
  }),

  GET_NEW_INVESTOR_NOTIFICATION_REQUEST: 'GET_NEW_INVESTOR_NOTIFICATION_REQUEST',
  GET_NEW_INVESTOR_NOTIFICATION_RESPONSE: 'GET_NEW_INVESTOR_NOTIFICATION_RESPONSE',

  getNotificationAction: id => ({
    type: Actions.GET_NEW_INVESTOR_NOTIFICATION_REQUEST,
    id
  })
};

export default Actions;
