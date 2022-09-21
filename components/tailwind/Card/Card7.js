/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const actions = [
  {
    title: 'Mua sắm - Làm đẹp',
    desc: 'Sành điệu, nổi bật và tỏa sáng mỗi ngày với thẻ ACB',
    href: '/news',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50'
  },
  {
    title: 'Ẩm thực - Giải trí',
    desc:
      'Trải nghiệm tinh hoa ẩm thực và tận hưởng thiên đường giải trí với những niềm vui bất tận',
    href: '/news',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50'
  },
  {
    title: 'Khách sạn - Du lịch',
    desc: 'Xách ba lô lên khám phá những chân trời mới mà không phải lo lắng về chi phí du lịch',
    href: '/news',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50'
  },
  {
    title: 'Tài chính - Ô tô',
    desc: 'Những ưu đãi phí dịch vụ và trải nghiệm đặc quyền phục vụ',
    href: '/news',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50'
  },
  {
    title: 'Giáo dục - Sức khỏe',
    desc:
      'Cùng thiên thần bé nhỏ của bạn vun đầy kiến thức và an tâm với sức khỏe được chăm lo tận tình',
    href: '/news',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50'
  },
  {
    title: 'Điều kiện và điều khoản áp dụng',
    desc:
      'Một số ưu đãi áp dụng có thể hạn chế đối với một số loại thẻ, do đó Quý khách hàng vui lòng xem chi tiết tại đây hoặc liên hệ các đơn vị cung cấp ưu đãi để biết cách thức và điều kiện áp dụng.',
    href: '/news',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative">
        <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-[#002395] sm:text-4xl">
          Ưu đãi mở thẻ
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          Ngân hàng ACB là một trong những ngân hàng thương mại cổ phần hàng đầu Việt Nam. Với mạng
          lưới chi nhánh rộng khắp cả nước cùng đa dạng các đối tác trong nhiều loại hình dịch vụ,
          sản phẩm khác nhau. ACB là ngân hàng mang lại vô vàn ưu đãi hấp dẫn cho khách hàng khi mở
          thẻ tín dụng.
        </p>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{action.desc}</p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
