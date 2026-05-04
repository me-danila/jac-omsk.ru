import Image from "next/image";
import Link from "next/link";

interface WarrantyItem {
  id: string;
  title: string;
}

const warrantyItems: WarrantyItem[] = [
  { id: "1", title: "Осуществляем гарантийный и постгарантийный ремонт." },
  { id: "2", title: "Располагаем официальным дилерским оборудованием." },
  {
    id: "3",
    title:
      "Специалисты проходят постоянное обучение и повышение квалификации у дистрибьютора. Запчасти в наличии и под заказ.",
  },
  { id: "4", title: "Держим ходовые позиции на складе в Омске!" },
];

export function Warranty() {
  return (
    <section className="flex flex-col md:flex-row justify-center xl:bg-[url('/assets/img/jac-motors.webp')] xl:bg-contain xl:bg-no-repeat xl:bg-left xl:py-4">
      <Image
        src="/assets/img/service-mob.webp"
        alt="Сервис и гарантия"
        width={375}
        height={312}
        className="m-4 md:hidden"
      />
      <div className="flex w-full justify-end max-w-6xl">
        <div className="p-5 flex flex-col gap-2 xl:gap-4 xl:max-w-xl">
          <h3 className="text-3xl text-center md:text-start mb-3 xl:text-4xl font-semibold">
            Сервис и&nbsp;гарантия
          </h3>
          <p className="text-sm/6 text-gray-600 mb-2 xl:text-base">
            М-ТРАКС&nbsp;&mdash; сертифицированный дилерский сервисный центр
            коммерческих автомобилей JAC в&nbsp;Омске.
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-3 pb-4 xl:max-w-5xl">
            {warrantyItems.map((item) => (
              <li key={item.id} className="text-sm xl:text-base">
                {item.title}
              </li>
            ))}
          </ul>
          <p className="text-sm/6 text-gray-600 xl:text-base">
            Все эти аспекты обеспечат вас качественным ремонтом, минимальными
            сроками и&nbsp;технически исправной техникой.
          </p>
          <Link
            href="https://drive.google.com/file/d/17SeddM8rSgLE4E_LG2bQDksRYJjzOpsS/view?usp=sharing"
            target="_blank"
            className="text-sm/6 mt-4 w-fit max-xl:underline xl:border-b xl:text-base"
          >
            Перечень основных работ по&nbsp;ТО&nbsp;автомобилей JAC
            (от&nbsp;01.01.2026)
          </Link>
        </div>
      </div>
    </section>
  );
}
