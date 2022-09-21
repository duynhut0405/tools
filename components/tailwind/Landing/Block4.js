/* This example requires Tailwind CSS v2.0+ */
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

const transferFeatures = [
  {
    id: 1,
    name: 'CƠ HỘI ĐƯỢC THĂNG TIẾN',
    description:
      'Chính sách nhân sự của ACB ưu tiên đề bạt những nhân viên trẻ có năng lực, có lòng nhiệt huyết, và có thành tích tốt trong công việc lên các cấp quản lý cấp trung và cấp cao',
    icon: GlobeAltIcon
  },
  {
    id: 2,
    name: 'ĐÀO TẠO VÀ PHÁT TRIỂN',
    description:
      'Nhân viên hàng năm được tham gia các khóa đào tạo trong và ngoài ngân hàng để nâng cao kiến thức và trình độ chuyên môn nghiệp vụ. ',
    icon: ScaleIcon
  },
  {
    id: 3,
    name: 'PHÁT TRIỂN KHẢ NĂNG LÃNH ĐẠO',
    description:
      'Những ứng viên này sẽ được chúng tôi giao các thử thách khác nhau, từ dễ đến khó, từ quản lý một nhóm nhỏ đến lãnh đạo nhóm lớn hơn, gánh vác những công việc đơn giản đến nhận lãnh những công việc có trách nhiệm nặng nề hơn, giúp họ tự tin và phát huy tối đa tố chất lãnh đạo của mình.',
    icon: BoltIcon
  }
];
const communicationFeatures = [
  {
    id: 1,
    name: 'HÒA MÌNH VÀO MÔI TRƯỜNG VĂN HÓA ACB',
    description:
      'Người ACB luôn thực hành 5 giá trị cốt lõi: Chính Trực, Cẩn Trọng, Cách Tân, Hài Hòa, Hiệu Quả. Đến với ACB bạn sẽ cảm nhận được một nét văn hóa riêng sự đoàn kết giúp đỡ và chia sẻ lẫn nhau của mọi thành viên sẽ tạo nên cho bạn một gia đình thứ hai ngay tại ACB. ',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    id: 2,
    name: 'CHÚNG TÔI ĐẢM BẢO',
    description:
      'Sẽ đem đến cho bạn cái nhìn mới, trang bị cho bạn những kiến thức cần thiết, đào tạo bạn để bạn có thể trở thành người có khả năng lãnh đạo, và tạo cho bạn những cơ hội để bạn phát huy tối đa những khả năng, năng lực của mình.',
    icon: EnvelopeIcon
  }
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            CƠ HỘI NGHỀ NGHIỆP
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Đối tác sự nghiệp 2022 mở ra 1000++ cơ hội nghề nghiệp với các vị trí đá dạng. Khám phá
            ngay! (Nhấn vào từng vị trí để tìm hiểu chi tiết và ứng tuyển)
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Trở thành Đối tác sự nghiệp, chúng ta sẽ cùng nhau
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Gặt hái thành quả lớn hơn và làm chủ tham vọng sự nghiệp của bản thân, ACB sẽ có những
              thử thách và cơ hội phù hợp dành cho bạn.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map(item => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#002395] text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="https://datax-talent.basecdn.net/nganhangacb/partner/banner-partner.jpg"
              alt=""
            />
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Trần Hùng Huy - Chủ tịch HĐQT ACB
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                ACB cần những con người làm chủ sự phát triển của ngân hàng theo cách chủ động nhất
                với thời cuộc
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map(item => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#002395] text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="https://datax-talent.basecdn.net/nganhangacb/pages/about-us-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
