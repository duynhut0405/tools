/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { Success } from '..';
export default function Example() {
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1536px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-3xl bg-[#29b6f6] py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">Đăng ký tư vấn vay</h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Quý khách hàng đăng ký email để nhận thông tin các gói ưu đãi vay hiện hành tại ACB.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form
              className="sm:flex"
              onSubmit={e => {
                e.preventDefault();
                if (
                  !email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
                ) {
                  window.dataLayer.push({
                    event: 'Formemailerror'
                  });
                  setErrEmail(true);
                  setTimeout(() => {
                    setErrEmail(false);
                  }, 5000);
                  return;
                }
                fetch('/api/form', {
                  method: 'post',
                  body: JSON.stringify({
                    email
                  })
                })
                  .then(response => response.json())
                  .then(data => {
                    setSuccess(true);
                    setTimeout(() => {
                      setSuccess(false);
                    }, 5000);
                    window.dataLayer.push({
                      event: 'SubmitForm'
                    });
                  });
              }}
              method="POST"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                autocomplete="home email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                placeholder="Nhập email của bạn"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-[#002395] px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Gởi
              </button>
            </form>
            {errEmail && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                Email không đúng định dạng
              </p>
            )}
            {success && (
              <div className="mt-3">
                <Success />
              </div>
            )}
            <p className="mt-3 text-sm text-indigo-100">
              Chúng tôi quan tâm đến việc bảo vệ dữ liệu của bạn. Đọc{' '}
              <a
                href="https://www.acb.com.vn/wps/wcm/connect/1862d32b-d6e0-4110-9eb6-1d7d98c74478/QF+-+15+-+NHSO_Dieu+khoan+va+dieu+kien+chung+su+dung+dich+vu+ngan+hang+so_07.07.22.pdf?MOD=AJPERES"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline"
              >
                Chính sách bảo mật .
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
