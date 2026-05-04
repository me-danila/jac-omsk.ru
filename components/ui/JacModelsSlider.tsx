"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface ModelFeature {
  icon: React.ReactNode;
  text: string;
}

interface ModelData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  price?: string;
  features: ModelFeature[];
  image: string;
}

const models: ModelData[] = [
  {
    id: "k7",
    label: "K7",
    title: "K7",
    subtitle: "УВЕРЕННОСТЬ В ПУТИ",
    price: "от 7 300 000 ₽",
    features: [
      {
        icon: <EngineIcon />,
        text: "Двигатель объемом 11,8 л. мощностью 490 л.с",
      },
      { icon: <PayloadIcon />, text: "Грузоподъемность автопоезда до 45 тонн" },
      { icon: <WarrantyIcon />, text: "Расширенная гарантия до 4 лет" },
    ],
    image: "/assets/img/models/k7.webp",
  },
  {
    id: "n90",
    label: "N90",
    title: "N90",
    subtitle: "УСПЕХ В ЛЮБОЙ СФЕРЕ",
    price: "от 5 508 000 ₽",
    features: [
      {
        icon: <EngineIcon />,
        text: "Двигатель объемом 3,8 л. мощностью 152 л.с",
      },
      { icon: <PayloadIcon />, text: "Грузоподъемность шасси до 5,9 тонн" },
      { icon: <TireIcon />, text: "3 колесные базы" },
    ],
    image: "/assets/img/models/n90.webp",
  },
  {
    id: "n90x",
    label: "N90X",
    title: "N90X",
    subtitle: "СКОРО В ПРОДАЖЕ",
    price: "",
    features: [
      {
        icon: <EngineIcon />,
        text: "Двигатель объемом 4,5 л. мощностью 158 л.с",
      },
      { icon: <PayloadIcon />, text: "Грузоподъемность шасси до 6 тонн" },
      { icon: <TireIcon />, text: "3 колесные базы" },
    ],
    image: "/assets/img/models/n90x.webp",
  },
  {
    id: "n120x",
    label: "N120X",
    title: "N120X",
    subtitle: "БЕССПОРНЫЙ ЛИДЕР",
    price: "от 6 118 000 ₽",
    features: [
      {
        icon: <EngineIcon />,
        text: "Двигатель объемом 4,5 л. мощностью 207 л.с",
      },
      { icon: <PayloadIcon />, text: "Грузоподъемность шасси до 8 тонн" },
      { icon: <TireIcon />, text: "3 колесные базы" },
    ],
    image: "/assets/img/models/n120x.webp",
  },
  {
    id: "n200",
    label: "N200",
    title: "N200",
    subtitle: "ДЛЯ БЕЗГРАНИЧНЫХ ЗАДАЧ",
    price: "от 7 756 000 ₽",
    features: [
      {
        icon: <EngineIcon />,
        text: "Двигатель объемом 6,7 л. мощностью 271 л.с",
      },
      { icon: <PayloadIcon />, text: "Грузоподъемность шасси до 13,8 тонн" },
      { icon: <TireIcon />, text: "3 колесные базы" },
    ],
    image: "/assets/img/models/n200.webp",
  },
  {
    id: "n200-6x2",
    label: "N200 6x2",
    title: "N200 6x2",
    subtitle: "ДЛЯ БЕЗГРАНИЧНЫХ ЗАДАЧ",
    features: [
      {
        icon: <EngineIcon />,
        text: "Двигатель объемом 6,7 л. мощностью 271 л.с",
      },
      { icon: <PayloadIcon />, text: "Грузоподъемность шасси до 13,8 тонн" },
      { icon: <TireIcon />, text: "3 колесные базы" },
    ],
    image: "/assets/img/models/n200-6x2.webp",
  },
];

/* ---------- Icons ---------- */
function EngineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <title>Engine icon</title>
      <path d="M240,104H227.31L192,68.69A15.86,15.86,0,0,0,180.69,64H140V40h24a8,8,0,0,0,0-16H100a8,8,0,0,0,0,16h24V64H64A16,16,0,0,0,48,80v52H24V108a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0V148H48v20.69A15.86,15.86,0,0,0,52.69,180L92,219.31A15.86,15.86,0,0,0,103.31,224h77.38A15.86,15.86,0,0,0,192,219.31L227.31,184H240a16,16,0,0,0,16-16V120A16,16,0,0,0,240,104Zm0,64H224a8,8,0,0,0-5.66,2.34L180.69,208H103.31L64,168.69V80H180.69l37.65,37.66A8,8,0,0,0,224,120h16Z" />
    </svg>
  );
}

function PayloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  );
}

function WarrantyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <title>Check icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );
}

function TireIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <title>Tire icon</title>
      <path d="M149.26,159.26C155.09,173.82,163.5,176,168,176s12.91-2.18,18.74-16.74c3.39-8.48,5.26-19.58,5.26-31.26s-1.87-22.78-5.26-31.26C180.91,82.18,172.5,80,168,80s-12.91,2.18-18.74,16.74C145.87,105.22,144,116.32,144,128S145.87,150.78,149.26,159.26ZM168,96.2c2.62,2.06,8,13,8,31.8s-5.38,29.74-8,31.8c-2.62-2.06-8-13-8-31.8S165.38,98.26,168,96.2ZM232,216H196.41C213.12,197.73,224,165.47,224,128c0-58.32-26.35-104-60-104H92C58.35,24,32,69.68,32,128S58.35,232,92,232H232a8,8,0,0,0,0-16ZM193.74,63.93C202.93,80.91,208,103.67,208,128s-5.07,47.09-14.26,64.07C185.38,207.5,174.82,216,164,216s-21.38-8.5-29.74-23.93C125.07,175.09,120,152.33,120,128s5.07-47.09,14.26-64.07C142.62,48.5,153.18,40,164,40S185.38,48.5,193.74,63.93ZM48,128c0-2.5.07-5,.17-7.44L80,97.83l24.43,17.45c-.28,4.16-.43,8.41-.43,12.72a179.89,179.89,0,0,0,3.07,33.5l-22.42-16a8,8,0,0,0-9.3,0l-23.74,17A161,161,0,0,1,48,128ZM62.26,63.93C70.62,48.5,81.18,40,92,40h39.59c-11.9,13-20.84,33.12-25,57.16L84.65,81.49a8,8,0,0,0-9.3,0L50.49,99.25C52.85,86,56.83,74,62.26,63.93Zm0,128.14a100.08,100.08,0,0,1-5.94-13.32L80,161.83l33.94,24.24c4.6,12,10.6,22.22,17.65,29.93H92C81.18,216,70.62,207.5,62.26,192.07Z" />
    </svg>
  );
}

/* ---------- Slider Component ---------- */
function TruckSlider({
  models,
  activeIndex,
  onSlideChange,
}: {
  models: ModelData[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const getStep = useCallback(() => {
    if (!containerRef.current?.firstElementChild) return 0;
    return (
      (containerRef.current.firstElementChild as HTMLElement).offsetWidth + 16
    ); // 16 = gap-4
  }, []);

  useEffect(() => {
    if (!containerRef.current || isDragging) return;
    const container = containerRef.current;
    const step = getStep();
    if (step === 0) return;
    const target = activeIndex * step;
    if (Math.abs(container.scrollLeft - target) > 5) {
      container.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [activeIndex, isDragging, getStep]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    setIsDragging(false);

    const container = containerRef.current;
    const step = getStep();
    const newIndex = Math.round(container.scrollLeft / step);
    const clampedIndex = Math.max(0, Math.min(newIndex, models.length - 1));

    if (clampedIndex !== activeIndex) {
      onSlideChange(clampedIndex);
    } else {
      container.scrollTo({ left: clampedIndex * step, behavior: "smooth" });
    }
  }, [isDragging, activeIndex, models.length, onSlideChange, getStep]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const step = getStep();
    const newIndex = Math.round(container.scrollLeft / step);
    const clampedIndex = Math.max(0, Math.min(newIndex, models.length - 1));

    if (clampedIndex !== activeIndex) {
      onSlideChange(clampedIndex);
    } else {
      container.scrollTo({ left: clampedIndex * step, behavior: "smooth" });
    }
  };

  return (
    <div className="relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex overflow-hidden cursor-grab active:cursor-grabbing gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {models.map((model, index) => {
          const isActive = index === activeIndex;
          const distance = Math.abs(index - activeIndex);
          const blur =
            distance === 0
              ? "blur(0px)"
              : distance === 1
                ? "blur(2px)"
                : "blur(6px)";
          const scale = isActive ? 1 : distance === 1 ? 0.92 : 0.8;
          const opacity = isActive ? 1 : distance === 1 ? 0.6 : 0.15;

          return (
            <div
              key={model.id}
              className="flex-shrink-0 w-[85%] sm:w-[80%] lg:w-[75%] flex items-center justify-center"
              style={{
                opacity,
                filter: blur,
                transform: `scale(${scale})`,
                transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <Image
                  src={model.image}
                  alt={model.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  draggable={false}
                  priority={index === activeIndex}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-2 lg:hidden bg-white/50 max-w-fit p-2 rounded-full border mx-auto">
        {models.map((model, index) => (
          <button
            key={model.id}
            type="button"
            onClick={() => onSlideChange(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-gray-700" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function JacModelsSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeModel = models[activeIndex];

  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="max-xl:bg-gray-100 flex flex-col gap-4 w-full py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold lg:text-5xl/13 text-center text-gray-900 lg:max-w-5xl lg:mx-auto">
        <span className="text-red-600">М-Тракс</span> - официальный дилер
        коммерческого транспорта JAC
      </h2>
      <p className="text-sm lg:text-base text-center text-gray-500 xl:mt-2 xl:mb-8 xl:max-w-3xl xl:mx-auto">
        Подход компании JAC Motors к продвижению продукции основывается на
        принципах профессионализма, максимальной клиентоориентированности и
        честной конкурентной политики.
      </p>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:gap-4 lg:items-start xl:bg-gray-100 xl:py-6 rounded-2xl bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="w-xl space-y-10 xl:p-16">
          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl text-gray-900">
              {activeModel.title}{" "}
              <span className="text-gray-400">| {activeModel.subtitle}</span>
            </h3>
            {activeModel.price && (
              <p className="text-xl lg:text-2xl text-gray-600">
                {activeModel.price}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {activeModel.features.map((feature) => (
              <div
                key={feature.text}
                className="flex gap-4 items-center text-gray-700"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-500">
                  {feature.icon}
                </div>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex-1 space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-white rounded gap-2">
              {models.map((model, index) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-all duration-300 cursor-pointer ${
                    index === activeIndex
                      ? "bg-gray-100 font-semibold"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {model.label}
                </button>
              ))}
            </div>
          </div>

          <TruckSlider
            models={models}
            activeIndex={activeIndex}
            onSlideChange={handleSlideChange}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6 mt-4">
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-gray-50 rounded gap-1">
            {models.map((model, index) => (
              <button
                key={model.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all duration-300 whitespace-nowrap ${
                  index === activeIndex
                    ? "bg-gray-100 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {model.label}
              </button>
            ))}
          </div>
        </div>

        <TruckSlider
          models={models}
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />

        <div className="space-y-4 mt-4">
          <div className="space-y-2 text-center">
            <h3 className="text-xl sm:text-2xl text-gray-900">
              {activeModel.title}{" "}
              <span className="text-gray-400">| {activeModel.subtitle}</span>
            </h3>
            {activeModel.price && (
              <p className="text-lg sm:text-xl text-gray-600">
                {activeModel.price}
              </p>
            )}
          </div>

          <div className="space-y-2 max-w-md mx-auto sm:mx-0">
            {activeModel.features.map((feature) => (
              <div key={feature.text} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  {feature.icon}
                </div>
                <p className="text-gray-700 pt-1 text-sm sm:text-base leading-snug">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
