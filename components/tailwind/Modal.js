/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Noti from './Noti';
export default function Example({ open, setOpen, setSuccess }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
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
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#29b6f6] sm:mx-0 sm:h-10 sm:w-10">
                    <CheckIcon className="h-6 w-6 text-[#002395]" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Đăng ký Vay
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Nhập thông tin để đăng ký mở thẻ</p>
                      <form
                        action="#"
                        onSubmit={e => {
                          e.preventDefault();
                          if (
                            !email.match(
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            )
                          ) {
                            setErrEmail(true);
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                              event: 'FormemailerrorLoans'
                            });
                            setTimeout(() => {
                              setErrEmail(false);
                            }, 5000);
                            return;
                          }

                          if (phone?.length < 10) {
                            setErrPhone(true);
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                              event: 'FormphoneerrorLoans'
                            });
                            setTimeout(() => {
                              setErrPhone(false);
                            }, 5000);
                            return;
                          }
                          fetch('/api/form', {
                            method: 'post',
                            body: JSON.stringify({
                              email,
                              phone,
                              name
                            })
                          })
                            .then(response => response.json())
                            .then(data => {
                              setOpen(false);
                              setSuccess(true);
                              window.dataLayer = window.dataLayer || [];
                              window.dataLayer.push({
                                event: 'SubmitFormLoans'
                              });
                              setTimeout(() => {
                                setSuccess(false);
                              }, 5000);
                            });
                        }}
                        method="POST"
                        className="mt-6 grid grid-cols-1"
                      >
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-warm-gray-900"
                          >
                            Họ và tên
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="first-name"
                              required
                              onChange={e => setName(e.target.value)}
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full border-[2px] mb-2 rounded-md py-3 px-4 text-warm-gray-900 shadow-sm focus:border-[#002395] focus:ring-[#002395]"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-warm-gray-900"
                          >
                            Email
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              onChange={e => setEmail(e.target.value)}
                              required
                              autoComplete="email"
                              className="block w-full border-[2px] mb-2 rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-[#002395] focus:ring-[#002395]"
                            />
                          </div>
                          {errEmail && (
                            <p className="mt-2 mb-3 text-sm text-red-600" id="email-error">
                              Email không đúng định dạng
                            </p>
                          )}
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-warm-gray-900"
                            >
                              Phone
                            </label>
                            <span id="phone-optional" className="text-sm text-warm-gray-500">
                              Optional
                            </span>
                          </div>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="phone"
                              id="phone"
                              onChange={e => setPhone(e.target.value)}
                              required
                              autoComplete="tel"
                              className="block w-full border-[2px] mb-2 rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-[#002395] focus:ring-[#002395]"
                              aria-describedby="phone-optional"
                            />
                          </div>
                          {errPhone && (
                            <p className="mt-2 mb-3 text-sm text-red-600" id="email-error">
                              Phone không đúng định dạng
                            </p>
                          )}
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#002395] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#29b6f6] focus:outline-none focus:ring-2 focus:ring-[#29b6f6] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Gởi
                          </button>
                          <button
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={() => setOpen(false)}
                          >
                            Thoát
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
