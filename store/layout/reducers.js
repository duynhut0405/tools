import Action from './actions';

const initialState = {
  settingFooter: {},
  socialLink: {}
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_SETTING_FOOTER_RESPONSE:
      return {
        ...state,
        settingFooter: action.data
      };
    case Action.GET_SOCIALINK_RESPONSE:
      return {
        ...state,
        socialLink: action.data
      };
    default:
      return state;
  }
};

export default layoutReducer;
