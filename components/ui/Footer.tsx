import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gradient-to-t from-gray-50 xl:-mt-4">
      <div className="mx-6 xl:max-w-7xl xl:mx-auto">
        {/* Main Content */}
        <div className="py-6 lg:pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Phone */}
          <div className="flex flex-col gap-1 xl:gap-2">
            <p className="text-sm font-medium text-gray-400 uppercase">
              Телефон:
            </p>
            <Link
              href="tel:+73812356401"
              target="_blank"
              className="text-base font-semibold text-gray-600 border-b hover:opacity-90 transition-all max-w-fit"
            >
              +7 (3812) 35-64-01
            </Link>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1 xl:gap-2">
            <p className="text-sm font-medium text-gray-400 uppercase">
              Адрес:
            </p>
            <p className="text-sm">
              Омская область, Омский район,
              <br />
              с. Дружино, ул. Придорожная, 63Б
            </p>
            <Link
              href="https://yandex.ru/maps/-/CPFleYLr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
            >
              <span className="text-sm border-b mt-1">
                Как к&nbsp;нам проехать
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Support & Social */}
          <div className="flex flex-col gap-1 xl:gap-2">
            <p className="text-sm font-medium text-gray-400 uppercase">
              Ответим на ваши вопросы:
            </p>
            <Link href="#" target="_blank" className="flex gap-2 items-center">
              <Image
                src="/assets/img/icons/icon-max.png"
                width={16}
                height={16}
                alt="Мессенджер MAX"
              />
              <p className="text-sm">Напишите в&nbsp;MAX</p>
            </Link>
            <p className="text-sm font-medium text-gray-400 uppercase mt-4 xl:mt-3">
              Подпишитесь на&nbsp;наши соцсети:
            </p>
            <Link
              href="https://vk.com/m_trucks"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M0 7.68c0-3.62 0-5.431 1.125-6.555C2.249 0 4.06 0 7.68 0h.64c3.62 0 5.431 0 6.555 1.125C16 2.249 16 4.06 16 7.68v.64c0 3.62 0 5.431-1.125 6.555C13.751 16 11.94 16 8.32 16h-.64c-3.62 0-5.431 0-6.555-1.125C0 13.751 0 11.94 0 8.32z"
                  fill="#07f"
                />
                <path
                  d="M8.546 11.666c-3.61 0-5.8-2.505-5.886-6.667h1.829c.057 3.058 1.448 4.353 2.514 4.62V5h1.752v2.639C9.783 7.525 10.86 6.325 11.221 5h1.725c-.276 1.629-1.448 2.829-2.276 3.324.829.4 2.162 1.448 2.676 3.342h-1.895c-.4-1.266-1.381-2.248-2.696-2.381v2.381z"
                  fill="#fff"
                />
              </svg>
              <p className="text-sm">ВКонтакте</p>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-100 flex flex-col items-start lg:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          {/* Copyright */}
          <p>© {currentYear} ООО «М-Тракс» ИНН 5528201508 ОГРН 1085543023433</p>

          {/* Privacy Policy */}
          <Link href="https://jac-omsk.ru/politic" className="border-b">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
