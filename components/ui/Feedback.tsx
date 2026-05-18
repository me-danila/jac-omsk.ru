"use client";

import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export function Feedback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    year: "",
    mileage: "",
    model: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://example.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Form-Secret": "cc4d848a1a202d50d74966102e3657db",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          year: form.year,
          mileage: form.mileage,
          model: form.model,
        }),
      });

      const json = await res.json();

      if (json.ok) {
        setStatus("success");
        setForm({
          name: "",
          phone: "",
          year: "",
          mileage: "",
          model: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden p-2 xl:mt-8 xl:px-4 xl:py-6 scroll-mt-16"
      id="feedback"
    >
      <div className="pointer-events-none absolute inset-0 hidden xl:block">
        <OptimizedImage
          src="/assets/img/consult.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-contain object-right"
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">
        <div className="relative p-5 flex flex-col gap-2 xl:gap-4">
          <h3 className="text-3xl text-center md:text-start mb-3 xl:text-4xl font-semibold">
            Нужна помощь или&nbsp;консультация?
          </h3>
          <script src="https://forms.yandex.ru/_static/embed.js"></script><iframe  src="https://forms.yandex.ru/u/6a0ab2aef47e738cd8258982?iframe=1" frameBorder="0" name="ya-form-6a0ab2aef47e738cd8258982" width="100%"></iframe>
          {/*<form onSubmit={handleSubmit}>*/}
          {/*  <div className="grid xl:grid-cols-2 gap-4 mb-5">*/}
          {/*    <div>*/}
          {/*      <label className="hidden" htmlFor="feedback-name">*/}
          {/*        Имя*/}
          {/*      </label>*/}
          {/*      <input*/}
          {/*        id="name"*/}
          {/*        type="text"*/}
          {/*        required*/}
          {/*        placeholder="Имя"*/}
          {/*        value={form.name}*/}
          {/*        onChange={handleChange}*/}
          {/*        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <label className="hidden" htmlFor="feedback-phone">*/}
          {/*        Номер телефона*/}
          {/*      </label>*/}
          {/*      <input*/}
          {/*        id="phone"*/}
          {/*        type="tel"*/}
          {/*        required*/}
          {/*        placeholder="Номер телефона"*/}
          {/*        value={form.phone}*/}
          {/*        onChange={handleChange}*/}
          {/*        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="grid xl:grid-cols-2 gap-4 mb-5">*/}
          {/*    <div>*/}
          {/*      <label className="hidden" htmlFor="feedback-year">*/}
          {/*        Год покупки*/}
          {/*      </label>*/}
          {/*      <input*/}
          {/*        id="year"*/}
          {/*        type="number"*/}
          {/*        required*/}
          {/*        placeholder="Год покупки"*/}
          {/*        value={form.year}*/}
          {/*        onChange={handleChange}*/}
          {/*        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <label className="hidden" htmlFor="feedback-mileage">*/}
          {/*        Пробег*/}
          {/*      </label>*/}
          {/*      <input*/}
          {/*        id="mileage"*/}
          {/*        type="number"*/}
          {/*        placeholder="Пробег"*/}
          {/*        value={form.mileage}*/}
          {/*        onChange={handleChange}*/}
          {/*        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="mb-5">*/}
          {/*    <label className="hidden" htmlFor="feedback-model">*/}
          {/*      Модель*/}
          {/*    </label>*/}
          {/*    <select*/}
          {/*      id="model"*/}
          {/*      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors appearance-none bg-white cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M4%206l4%204%204-4%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.75rem_center] pr-10"*/}
          {/*      value={form.model}*/}
          {/*      onChange={handleChange}*/}
          {/*    >*/}
          {/*      <option value="" disabled>*/}
          {/*        Выберите модель*/}
          {/*      </option>*/}
          {/*      <option value="K7">K7</option>*/}
          {/*      <option value="N90">N90</option>*/}
          {/*      <option value="N90X">N90X</option>*/}
          {/*      <option value="N120X">N120X</option>*/}
          {/*      <option value="N200">N200</option>*/}
          {/*      <option value="N200 6x2">N200 6x2</option>*/}
          {/*    </select>*/}
          {/*  </div>*/}

          {/*  <div className="flex items-center gap-2 mb-6">*/}
          {/*    <input*/}
          {/*      id="consent"*/}
          {/*      type="checkbox"*/}
          {/*      className="w-5 h-5 cursor-pointer accent-red-700 rounded-[5px] text-gray-300"*/}
          {/*      required*/}
          {/*    />*/}
          {/*    <label*/}
          {/*      className="text-xs text-gray-500 cursor-pointer"*/}
          {/*      htmlFor="consent"*/}
          {/*    >*/}
          {/*      Я ознакомлен (а) с{" "}*/}
          {/*      <Link href="/#politic" className="border-b">*/}
          {/*        Политикой обработки персональных данных согласие*/}
          {/*        на&nbsp;предоставление и&nbsp;обработку персональных данных*/}
          {/*      </Link>*/}
          {/*      **/}
          {/*    </label>*/}
          {/*  </div>*/}

          {/*  <button*/}
          {/*    type="submit"*/}
          {/*    disabled={status === "loading"}*/}
          {/*    className="w-full py-3.5 bg-gray-800 text-white rounded-lg text-sm cursor-pointer transition-all duration-200 hover:bg-red-700 active:scale-99"*/}
          {/*  >*/}
          {/*    {status === "loading" ? "Отправка..." : "Отправить"}*/}
          {/*  </button>*/}
          {/*  {status === "success" && (*/}
          {/*    <p className="mt-3 text-sm text-green-700">Заявка отправлена.</p>*/}
          {/*  )}*/}
          {/*  {status === "error" && (*/}
          {/*    <p className="mt-3 text-sm text-red-700">*/}
          {/*      Не удалось отправить заявку.*/}
          {/*    </p>*/}
          {/*  )}*/}
          {/*</form>*/}
        </div>
      </div>
    </section>
  );
}
