import Action from './actions';

const initialState = {
  settingFooter: {}
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_SETTING_FOOTER_RESPONSE:
      return {
        ...state,
        settingFooter: action.data
      };
    default:
      return state;
  }
};

export default layoutReducer;
