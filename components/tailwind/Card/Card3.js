/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const tabsData = [
  {
    name: 'Thẻ tín dụng',
    desc:
      'Khẳng định phong cách sống hiện đại cùng tính năng chi tiêu trước, thanh toán sau với 45 đến 55 ngày miễn lãi của Thẻ Tín Dụng ACB. Thỏa sức tận hưởng các dịch vụ đẳng cấp, ưu đâĩ đặc quyền cho chủ thẻ Tín Dụng ACB theo đúng sở thích tại Việt Nam và khắp thế giới. Tìm hiểu ngay!',
    textSale: '2.000.000',
    list: [
      'Hoàn tiền đến 10% tất cả hóa đơn tại siêu thị và cửa hàng tiện lợi',
      'Hoàn tiền 0,5% mọi chi tiêu khác',
      'Hoàn tối đa 3,6 triệu đồng / năm',
      'Tặng loa bluetooth Sony hoặc Hoàn 100% phí thường niên'
    ]
  },
  {
    name: 'Thẻ trả trước',
    desc:
      'Quản lý chi tiêu an toàn, bảo mật và tiện lợi bằng Thẻ Ghi Nợ kết nối trực tiếp với tài khoản tiền gửi. Hoàn toàn chủ động trong việc chi tiêu cá nhân từ thanh toán khi mua sắm, ăn uống, giải trí hay rút tiền ATM. Tìm hiểu ngay!',
    textSale: '1.000.000',
    list: [
      '200.000 VNĐ = 6 điểm ACB Blue Rewards',
      'Linh hoạt đổi điểm sử dụng tại hơn 200+ thương hiệu như Phúc Long, Bách Hóa Xanh, FPT, Got It,..',
      'Hoàn tối đa 3,6 triệu đồng / năm',
      'Tặng loa bluetooth Sony hoặc Hoàn 100% phí thường niên'
    ]
  },
  {
    name: 'Thẻ ghi nợ',
    desc:
      'Chỉ cần nạp tiền vào Thẻ Trả Trước, có ngay giải pháp chi tiêu an toàn với phương tiện thanh toán không liên kết trực tiếp với tài khoản ngân hàng. Linh hoạt, dễ sử dụng tại các điểm chấp nhận trong và ngoài nước, thuận tiện mọi lúc, mọi nơi từ việc mua sắm trực tiếp đến du lịch hay du học. Tìm hiểu ngay!',
    textSale: '5.000.000',
    list: [
      'Miễn phí rút tiền tại ATM và CN/PGD ACB',
      'Hoàn tiền 0,5% mọi chi tiêu khác',
      'Tặng thêm 2 đêm khi đặt phòng từ 2 đêm tại 20 khách sạn, resort cao cấp nhất Việt Nam',
      'Lãi suất 25% hấp dẫn'
    ]
  },
  {
    name: 'Ưu đãi đặc quyền',
    desc:
      'Khẳng định phong cách sống, thỏa đam mê & tận hưởng hàng trăm ưu đãi đặc quyền cho chủ thẻ ACB tại các ngành hàng tại các ngành hàng ẩm thực, giải trí, mua sắm, du lịch, giáo dục, sức khỏe… dành cho chủ thẻ ACB. Khám phá ngay!',
    textSale: '10.000.000',
    list: [
      'Hoàn tiền đến 10% tất cả hóa đơn tại siêu thị và cửa hàng tiện lợi',
      'Hoàn tiền 0,5% mọi chi tiêu khác',
      'Hoàn tối đa 3,6 triệu đồng / năm',
      'Tặng loa bluetooth Sony hoặc Hoàn 100% phí thường niên'
    ]
  },
  {
    name: 'Dịch vụ thẻ',
    desc:
      'Với phương châm không ngừng nâng cao chất lượng dịch vụ thẻ, ACB mang đến cho bạn trải nghiệm dịch vụ tiện ích, thuận lợi và đẳng cấp khi sử dụng các sản phẩm thẻ tại ngân hàng. Tìm hiểu ngay!',
    textSale: '7.000.000',
    list: [
      'Hoàn tiền đến 10% mọi chi tiêu, tối đa 6 triệu đồng / năm',
      'Tặng thêm 1 đêm khi đặt phòng từ 2 đêm tại 20 khách sạn, resort cao cấp nhất Việt Nam',
      'Tặng một lượt phòng chờ sân bay mỗi Quý',
      'Tặng voucher 2.5 triệu cho tất cả khách sạn từ 3 sao hoặc Hoàn 100% phí thường niên'
    ]
  }
];

export default function Example() {
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#002395] sm:text-4xl lg:text-5xl">
              KHÁM PHÁ THẾ GIỚI THẺ ACB
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Thỏa sức tận hưởng các dịch vụ đẳng cấp, ưu đâĩ đặc quyền cho chủ thẻ Tín Dụng ACB
              theo đúng sở thích tại Việt Nam và khắp thế giới. Tìm hiểu ngay!
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-3 items-center">
        <div className="flex gap-4 mt-3 bg-[#29b6f6] items-center h-full p-2 rounded-[10px]">
          {tabsData.map((item, index) => {
            return (
              <p
                onClick={() => setTab(index)}
                className={`text-lg text-white cursor-pointer p-2 ${
                  index === tab ? 'font-bold bg-[#002395] rounded-xl' : ''
                }`}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-[#002395] sm:text-3xl sm:tracking-tight">
                  {tabsData[tab].name}
                </h3>
                <p className="mt-6 text-base text-gray-500">{tabsData[tab].desc}</p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                      ƯU ĐÃI NỔI BẬT
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {tabsData[tab].list.map(feature => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-[#002395]">
                  Ưu đãi hàng năm lên đến
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-[#002395]">
                  <span>${tabsData[tab].textSale}</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                    Đồng
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.acb.com.vn/wps/portal?1dmy&page=acb.category.detail&urile=wcm:path:ACBWebsite/acb-vn/personal/the/the-tin-dung/acb-visa-infinite"
                    className="font-medium text-gray-500 underline"
                  >
                    Hướng dẫn
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="/recruit"
                      className="flex items-center justify-center rounded-md border border-transparent bg-[#002395] px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    >
                      Mở thẻ
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a
                    href="https://mail.acb.com.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#002395]"
                  >
                    Hỗ trợ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
