/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: 'ACB ĐẠT CHỨNG NHẬN PCI DSS ',
    href:
      'https://www.acb.com.vn/wps/portal/?1dmy&page=acb.news.detail&urile=wcm:path:ACBWebsiteNews/news-vn/about/tin-tuc/giai-thuong/acb-dat-chung-nhan-pci-dss',
    category: { name: 'Giải thưởng', href: '#' },
    description:
      'ACB được Hiệp hội PCI (PCI Standards Council) cấp chứng nhận bảo mật PCI DSS - level 1, phiên bản mới nhất và cấp độ cao nhất về bảo mật dữ liệu thẻ thanh toán',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://www.acb.com.vn/wps/wcm/connect/83ee51ff-acb2-4528-b392-67cc668b7af6/462x385.jpg?MOD=AJPERES&CACHEID=83ee51ff-acb2-4528-b392-67cc668b7af6',
    readingTime: '6 min',
    author: {
      name: 'Hiệp hội PCI',
      href: 'https://www.pcisecuritystandards.org/',
      imageUrl:
        'https://e7.pngegg.com/pngimages/1001/763/png-clipart-payment-card-industry-data-security-standard-payment-card-industry-security-standards-council-audit-qualified-security-assessor-others-company-text.png'
    }
  },
  {
    title: 'ACB đã vinh dự nhận được giải thưởng “Nơi làm việc tốt nhất Châu Á 2021” ',
    href:
      'https://www.acb.com.vn/vn/about/tin-tuc/giai-thuong/acb-thuoc-top-50-dn-niem-yet-tot-nhat-vn-13-12-2021',
    category: { name: 'Giải thưởn', href: '#' },
    description:
      'Đây là giải thưởng thường niên lớn nhất do HR Asia – tạp chí hàng đầu về Nhân sự khu vực Châu Á – nghiên cứu, đánh giá và tổ chức vinh danh. Năm nay là năm thứ ba liên tiếp ACB nhận được giải thưởng “Nơi làm việc tốt nhất châu Á” của HR Asia.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl: 'https://media.vneconomy.vn/w800/images/upload/2021/10/08/hr-asia-2021.jpg',
    readingTime: '4 min',
    author: {
      name: 'HR Asia',
      href: 'https://hr.asia/',
      imageUrl: 'https://hrasiamedia.com/2017/wp-content/uploads/2015/10/logo-300x74.png'
    }
  },
  {
    title: '50 công ty niêm yết tốt nhất Việt Nam',
    href:
      'https://www.acb.com.vn/vn/about/tin-tuc/giai-thuong/acb-dc-vinh-danh-la-noi-lam-viec-tot-nhat-chau-a-2021',
    category: { name: 'Case Study', href: '#' },
    description:
      'Đây là lần thứ 6 ACB được Forbes Việt Nam bình chọn và có tên trong danh sách Top 50 công ty niêm yết tốt nhất Việt Nam.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://www.acb.com.vn/wps/wcm/connect/b74af44c-99e2-400b-8fdc-db9191ac61d0/1/800x.jpg?MOD=AJPERES&CACHEID=b74af44c-99e2-400b-8fdc-db9191ac61d0/1',
    readingTime: '11 min',
    author: {
      name: 'Tạp chí Forbes',
      href:
        'https://forbes.vn/dat-bao/?utm_source=Google&utm_medium=Search&utm_campaign=Subscription_Sep_2022&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKJv85JNoPwft5brv0GOmM62bbb9ElH1E--jnuYGL_pwD9TlLf_ie2kaAt2OEALw_wcB',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/forbes-2.svg'
    }
  }
];

export default function Example() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ACB</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            ACB hiện là một trong những ngân hàng có sự hài hòa nhất về sự phát triển ổn định, khả
            năng sinh lời và chất lượng tài sản.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map(post => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
