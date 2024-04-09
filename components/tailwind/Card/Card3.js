import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Modal from '../Modal';
import Modal2 from '../Modal2';
import Modal3 from '../Modal3';
import Noti from '../Noti';
import { Tools } from '../../block';

const tabsData = [
  {
    name: 'Vay mua nhà đất',
    type: '1',
    desc:
      'Lựa chọn sản phẩm Vay Mua Nhà lý tưởng nhất, và biến dự định sở hữu ngồi nhà mơ ước của bạn thành hiện thực. Thỏa sức tận hưởng các dịch vụ đẳng cấp, ưu đâĩ đặc quyền từ Mango. Tìm hiểu ngay!',
    textSale: '2.000.000',
    list: [
      'Ưu đãi mua nhà chiết khấu từ 10%',
      'Thời hạn trả góp dài',
      'Hoàn tối đa 3,6 triệu đồng / năm',
      'Tặng loa bluetooth Sony hoặc Hoàn 100% phí thường niên'
    ]
  },
  {
    name: 'Vay vốn kinh doanh',
    type: '2',
    desc:
      'Bạn cần nguồn vốn lưu động để mở rộng quy mô công ty hay nâng cao năng lực kinh doanh? Nắm bắt ngay cơ hội với các lựa chọn Vay Kinh Doanh của Mango.',
    textSale: '1.000.000',
    list: [
      'Hoàn tiền đến 10% tất cả hóa đơn tại siêu thị và cửa hàng tiện lợi',
      'Hoàn tiền 0,5% mọi chi tiêu khác',
      'Hoàn tối đa 3,6 triệu đồng / năm',
      'Tặng loa bluetooth Sony hoặc Hoàn 100% phí thường niên'
    ]
  },
  {
    name: 'Vay tiêu dùng',
    type: '4',
    desc:
      'Giải quyết dễ dàng và nhanh chóng các nhu cầu chi tiêu cá nhân với sản phẩm Vay Tiêu Dùng, để vấn đề tài chính không còn là gánh nặng trong cuộc sống của bạn.',
    textSale: '5.000.000',
    list: [
      'Miễn phí rút tiền tại ATM và CN/PGD Mango',
      'Hoàn tiền 0,5% mọi chi tiêu khác',
      'Tặng thêm 2 đêm khi đặt phòng từ 2 đêm tại 20 khách sạn, resort cao cấp nhất Việt Nam',
      'Lãi suất 8% hấp dẫn'
    ]
  },
  {
    name: 'Vay mua ô tô',
    type: '5',
    desc:
      'Lãi suất vay mua xe ô tô Mango khá ưu đãi chỉ từ 6,5%/năm. Biên độ lãi suất sau ưu đãi = Lãi suất tiết kiệm 13 tháng + 2,5 - 4%. Mức lãi suất trên sẽ được điều chỉ mang tính chất tham khảo và được điều chỉnh theo chính sách cho vay của Mango trong từng thời kỳ.',
    textSale: '10.000.000',
    list: [
      'Lãi suất ưu đãi từ 6,5%',
      'Hoàn tiền 0,5%',
      'Hoàn tối đa 3,6 triệu đồng / năm',
      'Tặng loa bluetooth Sony hoặc Hoàn 100% phí thường niên'
    ]
  },
  {
    name: 'Vay du học',
    type: '7',
    desc:
      'Biên độ lãi suất sau ưu đãi được tính bằng lãi suất tiết kiệm 13 tháng + 2,5 - 4%. Mức lãi suất trên sẽ được điều chỉnh để phù hợp với từng đối tượng khách hàng. Khách hàng thân thiết của Mango (gửi tiết kiệm, trả lương qua ngân hàng Mango...), có tài sản đảm bảo có giá trị cao sẽ được ưu tiên cho vay với lãi suất ưu đãi.',
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
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#f0a71d] sm:text-4xl lg:text-5xl">
                CÁC SẢN PHẨM VAY TẠI MANGO
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Thỏa sức tận hưởng các dịch vụ đẳng cấp, ưu đãi đặc quyền. Tìm hiểu ngay!
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-3 items-center">
          <div className="flex gap-4 mt-3 bg-[#191919] items-center h-full p-2 rounded-[10px]">
            {tabsData.map((item, index) => {
              return (
                <p
                  onClick={() => setTab(index)}
                  className={`text-lg text-white cursor-pointer p-2 ${
                    index === tab ? 'font-bold bg-[#f0a71d] rounded-xl' : ''
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
            <div className="relative mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-[#f0a71d] sm:text-3xl sm:tracking-tight">
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
                            <CheckCircleIcon
                              className="h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg font-medium leading-6 text-[#f0a71d]">
                    Ưu đãi hàng năm lên đến
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-[#f0a71d]">
                    <span>{tabsData[tab].textSale}</span>
                    <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                      Đồng
                    </span>
                  </div>
                  <p className="mt-4 text-sm">
                    <button
                      onClick={() => {
                        setShowModal2(true);
                      }}
                      className="font-medium text-gray-500 underline"
                    >
                      Hướng dẫn
                    </button>
                  </p>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => {
                          setShowModal(true);
                        }}
                        className="w-full flex items-center justify-center rounded-md border border-transparent bg-[#f0a71d] px-5 py-3 text-base font-medium text-white hover:bg-[#191919]"
                      >
                        Đăng ký Vay
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 text-sm">
                    <button
                      onClick={() => {
                        setShowModal3(true);
                      }}
                      className="font-medium text-[#f0a71d]"
                    >
                      Hỗ trợ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={showModal} setOpen={setShowModal} setSuccess={setSuccess} />
        <Modal2 open={showModal2} setOpen={setShowModal2} />
        <Modal3 open={showModal3} setOpen={setShowModal3} />
        <Noti show={success} setShow={setSuccess} />
      </div>
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
          <div className="flex-1 bg-white px-6 py-8 lg:p-12">
            <Tools
              content={{
                optionWidth: '2',
                type: tabsData[tab].type,
                id: 1,
                interest_rate: 5,
                minValue: '1000000',
                maxValue: '10000000000'
              }}
              id={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}
