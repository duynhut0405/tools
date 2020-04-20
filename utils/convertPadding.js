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

export const convertTitle = id => {
  let title = '';
  if (id === 1) {
    title = 'Báo cáo tài chính';
  } else if (id === 2) {
    title = 'Đại hội cổ đông';
  } else if (id === 3) {
    title = 'Điều lệ';
  } else if (id === 4) {
    title = 'Báo cáo thường niên';
  } else if (id === 5) {
    title = 'Tài liệu  biểu mẫu';
  } else if (id === 6) {
    title = 'Tài liệu nhà đầu tư';
  } else if (id === 7) {
    title = 'Giao dục & nghề nghiệp';
  } else if (id === 8) {
    title = 'Công bố thông tin khác';
  } else if (id === 9) {
    title = 'Hỏi Đáp';
  } else {
    title = '';
  }
  return title;
};
