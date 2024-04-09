/* This example requires Tailwind CSS v2.0+ */

export default function Example() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="/banner-1.jpg"
          alt=""
          style={{ height: 500 }}
        />
      </div>
      <div className="relative mx-auto max-w-[1536px] py-24 px-4 sm:py-32 sm:px-6 lg:px-8 lg:w-[1536px]">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          Click mở tài khoản
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
          đón vạn đặc quyền
        </h1>
        <div className="mt-8">
          <a
            href="#block-sale"
            className=" w-max rounded-md border border-transparent bg-[#f0a71d] px-10 py-3 text-base font-medium text-white hover:bg-[#191919]"
          >
            Xem tại đây
          </a>
        </div>
      </div>
    </div>
  );
}
