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
const incentives = [
  {
    name: 'Khẳng định vị thế cá nhân - vị thế tổ chức',
    imageSrc: 'https://datax-talent.basecdn.net/nganhangacb/images/acb-job-1.png',
    description:
      'Trên hành trình chinh phục mục tiêu trở thành ngân hàng bán lẻ hàng đầu tại Việt Nam'
  },
  {
    name: 'Thăng tiến, phát triển theo lộ trình rõ ràng',
    imageSrc: 'https://datax-talent.basecdn.net/nganhangacb/images/acb-job-2.png',
    description:
      'Eximbank mong muốn hợp tác với các Đối Tác Sự Nghiệp, đặc biệt các bạn nhân tài trong mảng kinh doanh, phát triển khách hàng.'
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://datax-talent.basecdn.net/nganhangacb/images/acb-job-3.png',
    description:
      'Nếu bạn khát khao thể hiện năng lực và kinh nghiệm, mong muốn gặt hái thành quả lớn hơn và làm chủ tham vọng sự nghiệp của bản thân, Eximbank sẽ có những thử thách và cơ hội phù hợp dành cho bạn.'
  }
];

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1536px] py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[#002395]">
                Kế hoạch hành động
              </h2>
              <p className="mt-4 text-gray-500">
                Eximbank bước vào giai đoạn 3 – Định vị hàng đầu trong chiến lược phát triển 5 năm
                của Ngân hàng. Trong bối cảnh cạnh tranh gay gắt, nhu cầu về chất lượng dịch vụ từ
                khách hàng liên tục thay đổi, Eximbank sẽ không ngừng tự hoàn thiện và đề ra hàng
                loạt chiến lược đột phá nhằm nâng cao vị thế trong ngành
              </p>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map(incentive => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-[#002395]">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
