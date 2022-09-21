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
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-3xl bg-[#002395] py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">ĐĂNG KÝ ỨNG TUYỂN</h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Hãy trở thành đối tác sự nghiệp để cùng ACB khẳng định vị thế của chính bạn và tổ chức
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
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
