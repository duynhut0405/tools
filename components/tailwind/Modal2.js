/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
const faqs = [
  {
    question: '1. Điều kiện',
    answer: `Bạn phải đáp ứng đủ 2 điều kiện để thực hiện mở tài khoản và sử dụng Mango online: Đủ 15 tuổi trở lên , có CMND/ thẻ căn cước hoặc hộ chiếu hợp lệ.`
  },
  {
    question: '2. Thủ tục đăng ký Mango online',
    answer: `Đầu tiên, bạn cần mang theo CMND/ thẻ căn cước hoặc hộ chiếu đến các chi nhánh, phòng giao dịch Mango gần nhất.`
  },
  {
    question: '2.1 Trình bày',
    answer: `Sau đó, nhân viên ngân hàng sẽ yêu cầu bạn tải ứng dụng Mango Mobile Banking và thực hiện thao tác cấp tên đăng nhập cũng như gửi mật khẩu vào số điện thoại bạn.`
  },
  {
    question: '3. Phí quản lý thẻ khi sử dụng Mango Online',
    answer: `Miễn phí`
  }
  // More questions...
];

export default function Example({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="bg-white">
                  <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                      <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                          Hỗ trợ trợ mở thẻ
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                          Mango online là dịch vụ ngân hàng điện tử do Ngân hàng Thương mại Cổ phần
                          Á Châu (ACB) cung cấp và vận hành. Thông qua dịch vụ này, bạn được phép
                          thực hiện các giao dịch đơn giản.
                        </p>
                      </div>
                      <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <dl className="space-y-12">
                          {faqs.map(faq => (
                            <div key={faq.question}>
                              <dt className="text-lg font-medium leading-6 text-gray-900">
                                {faq.question}
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Đóng
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
