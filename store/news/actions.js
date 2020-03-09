const Actions = {
  FILL_NEWS_BY_CATEGORY_REQUEST: 'FILL_NEWS_BY_CATEGORY_REQUEST',
  FILL_NEWS_BY_CATEGORY_RESPONSE: 'FILL_NEWS_BY_CATEGORY_RESPONSE',

  fillNesByCategoryAction: (id, page, year) => ({
    type: Actions.FILL_NEWS_BY_CATEGORY_REQUEST,
    id,
    page,
    year
  })
};

export default Actions;
