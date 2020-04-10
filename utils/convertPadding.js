export const getPadding = option => {
  let padding = '';
  if (option === '2') {
    padding = 'sec-tb';
  } else if (option === '3') {
    padding = 'sec-t';
  } else if (option === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return padding;
};
