"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useEffect, useRef, useState } from "react";

const menuItems = [
  { label: "Модельный ряд", href: "/#models" },
  { label: "Сервис и гарантия", href: "/#service" },
  { label: "Контакты", href: "/#contacts" },
];

const serviceDetails = {
  title: "Отдел сервиса",
  schedule: "Пн-Вс: с 08.00 до 21.00",
  phone: "+7 (3812) 35‒64‒55",
  href: "tel:+73812356455",
};

const salesDetails = {
  title: "Отдел продаж",
  schedule: "Пн-Пт: с 09.00 до 18.00",
  phone: "+7 (3812) 35-64-01",
  href: "tel:+73812356401",
};

const locationDetails = {
  title: "Адрес",
  label:
    "644507 / с. Дружино, Омский район, Омская область, Омск, Придорожная улица, 61а",
  href: "https://yandex.ru/maps/-/CPFleYLr",
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleMenuLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#") || href === "#") {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);

    requestAnimationFrame(() => {
      const target = document.querySelector(href);

      if (!(target instanceof HTMLElement)) {
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (!isMenuOpen) {
      menuButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md xl:-mb-4">
        <div className="flex items-center justify-between gap-4 p-2 lg:py-3 xl:max-w-7xl xl:mx-auto">
          <div className="flex items-center gap-5 lg:gap-8">
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-95"
              aria-label="Перейти на главную"
            >
              <Image
                src="/assets/img/logos/logo-jac.svg"
                width={59}
                height={30}
                alt="Логотип JAC Motors"
                className="h-auto w-auto"
              />
            </Link>
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-95"
              aria-label="Перейти на главную"
            >
              <Image
                src="/assets/img/logos/logo-m-trucks.svg"
                width={176}
                height={30}
                alt="Логотип М-Тракс"
                className="h-auto w-auto"
              />
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <nav className="hidden items-center gap-2 lg:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-gray-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#feedback"
              className="hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 lg:inline-flex"
            >
              Заказать звонок
            </Link>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out bg-gray-50 border-t border-gray-100 ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-48 opacity-100"
          }`}
        >
          <div className="flex px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-600 items-center gap-12 xl:max-w-7xl xl:mx-auto xl:justify-between xl:px-2">
            <div className="flex flex-col gap-1 xl:flex-row xl:gap-2">
              <p className="font-semibold">{serviceDetails.title}:</p>
              <Link
                href={serviceDetails.href}
                target="_blank"
                className="border-b max-w-fit"
              >
                {serviceDetails.phone}
              </Link>
            </div>
            <div className="flex flex-col gap-1 xl:flex-row xl:gap-2">
              <p className="font-semibold">{salesDetails.title}:</p>
              <Link
                href={salesDetails.href}
                target="_blank"
                className="border-b max-w-fit"
              >
                {salesDetails.phone}
              </Link>
            </div>
            <div className="flex-col gap-1 xl:flex-row xl:gap-2 hidden xl:flex">
              <p className="font-semibold">{locationDetails.title}:</p>
              <Link
                href={locationDetails.href}
                target="_blank"
                className="border-b max-w-fit"
              >
                {locationDetails.label}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        inert={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-2">
          {/*<p className="text-sm font-semibold uppercase text-gray-500">*/}
          {/*  Навигация*/}
          {/*</p>*/}
          <Link href="/" onClick={(event) => handleMenuLinkClick(event, "/")}>
            Навигация
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-colors hover:bg-gray-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-8 overflow-y-auto px-4 py-3">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleMenuLinkClick(event, item.href)}
                className="rounded-lg border border-gray-200 px-3 py-3 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-6 rounded-lg bg-gray-50 p-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900">
                {serviceDetails.title}:
              </p>
              <p className="text-sm text-gray-600">{serviceDetails.schedule}</p>
              <Link
                href={serviceDetails.href}
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex border-b border-gray-300 text-sm font-medium text-gray-800"
              >
                {serviceDetails.phone}
              </Link>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900">
                {salesDetails.title}:
              </p>
              <p className="text-sm text-gray-600">{salesDetails.schedule}</p>
              <Link
                href={salesDetails.href}
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex border-b border-gray-300 text-sm font-medium text-gray-800"
              >
                {salesDetails.phone}
              </Link>
            </div>

            <Link
              href={locationDetails.href}
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm leading-6 text-gray-600"
            >
              {locationDetails.label}
            </Link>
          </div>
        </div>

        <div className="p-4">
          <Link
            href="/#feedback"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Заказать звонок
          </Link>
        </div>
      </aside>
    </>
  );
}
