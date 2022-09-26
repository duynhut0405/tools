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
    name: 'Hoàn tiền 2% với tất cả thẻ ghi nợ ACB Visa',
    description: 'Hoàn tiền 2% đến 3,6 triệu / năm với tất cả dòng thẻ ghi nợ ACB thương hiệu Visa',
    icon: GlobeAltIcon
  },
  {
    id: 2,
    name: 'Hoàn tiền đến 10% với thẻ tín dụng ACB Visa Platinum',
    description: 'Hoàn tiền đến 10% đến 3,6 triệu / năm với thẻ tín dụng ACB Visa Platinum',
    icon: ScaleIcon
  },
  {
    id: 3,
    name: 'Hoàn tiền mọi giao dịch tại tất cả siêu thị và cửa hàng tiện lợi',
    description:
      'Hoàn tiền áp dụng cho mọi giao dịch tại tất cả siêu thị và cửa hàng tiện lợi (CHTL) đa dạng như Co-opmart, Vinmart, Lotte, BigC, Aeon Mall, Family Mart, Circle K, vv..',
    icon: BoltIcon
  }
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Ưu đãi nghỉ dưỡng xứng tầm',
    description:
      'Tận hưởng trọn vẹn kỳ nghỉ tuyệt vời tại 40 khách sạn, resort cao cấp nhất Việt Nam',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    id: 2,
    name: 'Đặc quyền dành riêng cho Chủ thẻ ACB Visa Signature',
    description: 'Tặng thêm 1 đêm nghỉ dưỡng cho Chủ thẻ ACB Visa Signature',
    icon: EnvelopeIcon
  },
  {
    id: 3,
    name: 'Thời gian áp dụng',
    description: 'Từ 01.07.2021 đến 30.09.2022',
    icon: BoltIcon
  }
];

const communicationFeatures2 = [
  {
    id: 1,
    name: 'Hoàn tiền khi mở thẻ cực hấp dẫn',
    description:
      'Hoàn 100% phí thường niên khi mở thẻ và chi tiêu thoả điều kiện trong vòng 30 ngày kể từ ngày mở thẻ',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    id: 2,
    name: 'Hoàn thêm đến 2,9 triệu đồng',
    description: 'Hoàn thêm khi chi tiêu thoả điều kiện trong vòng 30 ngày kể từ ngày mở thẻ',
    icon: EnvelopeIcon
  },
  {
    id: 3,
    name: 'Thời gian áp dụng',
    description: 'Từ 01.07.2021 đến 30.09.2022',
    icon: BoltIcon
  }
];

const communicationFeatures3 = [
  {
    id: 1,
    name: 'Thanh toán liền tay, hoàn tiền mê say  ',
    description:
      'Hoàn tiền 50% cho bất kỳ 01 giao dịch thanh toán trực truyến (e-commerce) đầu tiên tối đa 200.000VNĐ/thẻ/khách hàng từ nay đến hết 30/09/2022',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    id: 2,
    name: 'Cách thức tham gia',
    description:
      'Chỉ áp dụng cho khách hàng đăng kí tham gia bằng cách: soạn ACB_KMT_ECOM gửi 997 với "_" là khoảng trắng',
    icon: EnvelopeIcon
  },
  {
    id: 3,
    name: 'Thẻ áp dụng',
    description: 'Tất cả chủ thẻ ghi nợ và tín dụng quốc tế ACB Visa (trừ thẻ ACB Visa Digi)',
    icon: BoltIcon
  }
];
export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-[1536px] lg:px-8">
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
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-[#002395] sm:text-4xl">
            KHUYẾN MÃI THẺ
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Mua sắm - Làm đẹp. Sành điệu, nổi bật và tỏa sáng mỗi ngày với thẻ ACB · Ẩm thực - Giải
            trí. Trải nghiệm tinh hoa ẩm thực và tận hưởng thiên đường giải ...
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-[#002395] sm:text-3xl">
              ĐI SIÊU THỊ THANH TOÁN BẰNG THẺ ACB - LUÔN HOÀN TIỀN ĐẾN 10%
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Với tính năng hoàn tiền đến 10% cho thẻ tín dụng và hoàn 2% cho tất cả thẻ ghi nợ ACB
              Visa tại toàn bộ hệ thống siêu thị và cửa hàng tiện lợi trên cả nước, thẻ ACB tự tin
              là người bạn đồng hành đi siêu thị cùng mọi nhà!
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map(item => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#002395] text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-[#002395]">
                      {item.name}
                    </p>
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
              className="relative mx-auto object-contain"
              src="https://hdbankcareer.com/wp-content/uploads/2022/03/ngan-hang-acb-la-ngan-hang-gi.jpg"
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
              <h3 className="text-2xl font-bold tracking-tight text-[#002395] sm:text-3xl">
                Đặc quyền nghỉ dưỡng đẳng cấp
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Đặt phòng 2 đêm, tận hưởng đến 3 đêm tại 40 khách sạn cao cấp nhất Việt Nam, dành
                riêng cho chủ thẻ ACB Visa Signature
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map(item => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#002395] text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-[#002395]">
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
                className="relative mx-auto object-contain"
                src="https://datax-talent.basecdn.net/nganhangacb/pages/about-us-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-[#002395] sm:text-3xl">
              HOÀN TIỀN ĐẾN 2,9 TRIỆU VNĐ KHI MỞ THẺ TÍN DỤNG QUỐC TẾ ACB
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Bạn muốn sở hữu cho riêng mình chiếc thẻ tín dụng quốc tế ACB nhưng vẫn còn lăn tăn về
              phí thường niên? Đừng lo, đăng ký mở thẻ ngay để được hoàn 100% phí thường niên và
              hoàn thêm khi phát sinh giao dịch chi tiêu thoả điều kiện trong vòng 30 ngày kể từ
              ngày phát hành thẻ
            </p>

            <dl className="mt-10 space-y-10">
              {communicationFeatures2.map(item => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#002395] text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-[#002395]">
                      {item.name}
                    </p>
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
              className="relative mx-auto object-contain"
              src="https://cdn.vietnambiz.vn/171464876016439296/2020/6/1/lai-suat-ngan-hang-acb-moi-nhat-thang-062020-1590985218106227555989.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
