const Actions = {
  FILL_NEWS_BY_CATEGORY_REQUEST: 'FILL_NEWS_BY_CATEGORY_REQUEST',
  FILL_NEWS_BY_CATEGORY_RESPONSE: 'FILL_NEWS_BY_CATEGORY_RESPONSE',

  fillNesByCategoryAction: (id, page, number, year) => ({
    type: Actions.FILL_NEWS_BY_CATEGORY_REQUEST,
    id,
    page,
    number,
    year
  }),

  GET_NEW_BY_CATEGORY_SLUG_REQUEST: 'GET_NEW_BY_CATEGORY_SLUG_REQUEST',
  GET_NEW_BY_CATEGORY_SLUG_RESPONSE: 'GET_NEW_BY_CATEGORY_SLUG_RESPONSE',

  getNewByCategorySlugAction: (slug, data) => ({
    type: Actions.GET_NEW_BY_CATEGORY_SLUG_REQUEST,
    slug,
    data
  })
};

export default Actions;
