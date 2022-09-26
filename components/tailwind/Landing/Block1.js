/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-[#002395] shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">ACB ONE BIZ</span>
                <span className="block">Công Cụ Tài Chính Đắc Lực Cho Doanh Nghiệp</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Phiên bản mới ACB ONE BIZ ngoài việc sở hữu đầy đủ tính năng của một ngân hàng
                truyền thống đáp ứng nhu cầu của Khách hàng mọi lúc mọi nơi trên cả hai giao diện
                website và app điện thoại, thì còn cập nhật các chức năng mới nổi bật cho phép người
                dùng tiết kiệm thời gian thao tác khi chuyển tiền bằng mã QR.
              </p>
              <a
                href="https://www.acb.com.vn/wps/portal/?1dmy&page=acb.news.detail&urile=wcm:path:ACBWebsiteNews/news-vn/about/tin-tuc/thong-cao-bao-chi/acb-one-biz-cong-cu-tc-dac-luc-dong-hanh-cung-khach-hang-dn-vua-va-nho"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
              >
                XEM TẠI ĐÂY
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://www.acb.com.vn/wps/wcm/connect/0b952f35-350c-4b35-abef-0c583689a59a/banner+web-921x540.png?MOD=AJPERES&CACHEID=0b952f35-350c-4b35-abef-0c583689a59a"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
