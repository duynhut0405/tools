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
          VAY TẠI ACB
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          Đăng ký 100% online
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          Không cần chứng minh thu nhập
        </h1>
        <div className="mt-8">
          <a
            href="#block-sale"
            className=" w-max rounded-md border border-transparent bg-[#002395] px-10 py-3 text-base font-medium text-white hover:bg-[#29b6f6]"
          >
            Xem tại đây
          </a>
        </div>
      </div>
    </div>
  );
}
