import Link from "next/link";

export function Contacts() {
  return (
    <section
      className="flex flex-col gap-4 my-8 xl:gap-8 scroll-mt-20"
      id="contacts"
    >
      <h2 className="text-3xl lg:text-5xl text-center text-gray-900 lg:max-w-5xl lg:mx-auto font-semibold">
        Контакты
      </h2>
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-lg bg-accent p-2">
          <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-background p-6">
            <div className="flex flex-col gap-1">
              <p className="text-xl xl:text-2xl">Отдел продаж</p>
              <p className="flex gap-2 items-center">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-sm opacity-60">
                  Работаем с 8:00 до 18:00
                </span>
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-lg lg:text-xl text-muted-foreground md:mb-3">
                  Адрес:
                </p>
                <Link
                  href="https://yandex.ru/maps/-/CPFleYLr"
                  target="_blank"
                  className="text-sm lg:text-base border-b"
                >
                  644507, с. Дружино, Омский район, Омская область, Омск, ул.
                  Придорожная, 61а
                </Link>
              </div>
              <div>
                <p className="text-lg lg:text-xl text-muted-foreground md:mb-3">
                  Телефон:
                </p>
                <Link
                  href="tel:+73812992871"
                  target="_blank"
                  className="text-sm lg:text-base border-b"
                >
                  +7 (3812) 99-28-71
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-6 rounded-md bg-background p-6">
            <div className="flex flex-col gap-1">
              <p className="text-xl xl:text-2xl">Сервис</p>
              <p className="flex gap-2 items-center">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-sm opacity-60">
                  Работаем с 8:00 до 21:00
                </span>
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-lg lg:text-xl text-muted-foreground md:mb-3">
                  Адрес:
                </p>
                <Link
                  href="https://yandex.ru/maps/-/CPFleYLr"
                  target="_blank"
                  className="text-sm lg:text-base border-b"
                >
                  644507, с. Дружино, Омский район, Омская область, Омск, ул.
                  Придорожная, 61а
                </Link>
              </div>
              <div>
                <p className="text-lg lg:text-xl text-muted-foreground md:mb-3">
                  Телефон:
                </p>
                <Link
                  href="tel:+73812356455"
                  target="_blank"
                  className="text-sm lg:text-base border-b"
                >
                  +7 (3812) 35-64-55
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[400px] lg:h-[550px] rounded-lg overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=73.157564%2C55.014034&mode=poi&poi%5Bpoint%5D=73.157126%2C55.014187&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D107580425756&rtext=55.014283%2C73.156526~55.014297%2C73.157173&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNeVCSQhWkDlxC&utm_source=share&z=16"
            width="100%"
            height="100%"
            allowFullScreen={false}
            title="М-Тракс"
            className="absolute inset-0 rounded-lg border-8 border-accent"
          />
        </div>
      </div>
    </section>
  );
}
