import request from '../utils/request';

const searchService = query => {
  return request({
    url: `/common/search`,
    method: 'GET',
    params: query
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getSttForm = query => {
  return request({
    url: `common/search-user-id`,
    method: 'POST',
    params: { idForm: query, year: 2020 }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getItemForm = query => {
  return request({
    url: `common/search-user`,
    method: 'GET',
    params: { locale: 'vi', search: query }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const updateForm = (data, idForm) => {
  return request({
    url: `forms/send`,
    method: 'POST',
    params: { idForm: idForm, local: 'vi' },
    data
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export { searchService, getSttForm, getItemForm, updateForm };
