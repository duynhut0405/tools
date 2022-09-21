/* This example requires Tailwind CSS v2.0+ */

export default function Example() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://cdn-op.acb.com.vn/document/e-credit/banner/banner-1.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          Mở thẻ sành điệu, nhận quà hàng hiệu
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          Đăng ký 100% online
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          Không cần chứng minh thu nhập
        </h1>
        <a
          href="https://the.acb.com.vn/user-infos"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
        >
          XEM TẠI ĐÂY
        </a>
      </div>
    </div>
  );
}
