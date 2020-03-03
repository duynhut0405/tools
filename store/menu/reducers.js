import Actions from './actions';

const initialState = {
  header: [],
  nav: [],
  footerTop: [],
  footerMain: [],
  footerBottom: []
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_MENU_HEADER_RESPONSE:
      return {
        ...state,
        header: action.data
      };
    case Actions.GET_MENU_NAV_RESPONSE:
      return {
        ...state,
        nav: action.data
      };
    case Actions.GET_MENU_FOOTER_TOP_RESPONSE:
      return {
        ...state,
        footerTop: action.data
      };
    case Actions.GET_MENU_FOOTER_MAIN_RESPONSE:
      return {
        ...state,
        footerMain: action.data
      };
    case Actions.GET_MENU_FOOTER_BOTTOM_RESPONSE:
      return {
        ...state,
        footerBottom: action.data
      };
    default:
      return state;
  }
};

export default menuReducer;
