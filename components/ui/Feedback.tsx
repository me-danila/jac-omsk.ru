import Link from "next/link";

export function Feedback() {
  return (
    <section
      className="flex flex-col items-center justify-center p-2 xl:py-12 xl:px-4 xl:bg-[url('/assets/img/consult.webp')] xl:bg-contain xl:bg-no-repeat xl:bg-right xl:mt-8 scroll-mt-16"
      id="feedback"
    >
      <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">
        <div className="p-5 flex flex-col gap-2 xl:gap-4">
          <h3 className="text-3xl text-center md:text-start mb-3 xl:text-4xl font-semibold">
            Нужна помощь или&nbsp;консультация?
          </h3>
          <form>
            <div className="grid xl:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="hidden" htmlFor="feedback-name">
                  Имя
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  placeholder="Имя"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"
                />
              </div>
              <div>
                <label className="hidden" htmlFor="feedback-phone">
                  Номер телефона
                </label>
                <input
                  id="feedback-phone"
                  type="tel"
                  placeholder="Номер телефона"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="hidden" htmlFor="feedback-year">
                  Год покупки
                </label>
                <input
                  id="feedback-year"
                  type="number"
                  placeholder="Год покупки"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"
                />
              </div>
              <div>
                <label className="hidden" htmlFor="feedback-mileage">
                  Пробег
                </label>
                <input
                  id="feedback-mileage"
                  type="number"
                  placeholder="Пробег"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="hidden" htmlFor="feedback-model">
                Модель
              </label>
              <select
                id="feedback-model"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-900 transition-colors appearance-none bg-white cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M4%206l4%204%204-4%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.75rem_center] pr-10"
                defaultValue="Выберите модель"
              >
                <option disabled>Выберите модель</option>
                <option>K7</option>
                <option>N90</option>
                <option>N90X</option>
                <option>N120X</option>
                <option>N200</option>
                <option>N200 6x2</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input
                id="feedback-consent"
                type="checkbox"
                className="w-5 h-5 cursor-pointer accent-red-700 rounded-[5px] text-gray-300"
              />
              <label
                className="text-xs text-gray-500 cursor-pointer"
                htmlFor="feedback-consent"
              >
                Я ознакомлен (а) с
                <Link href="/politic/">
                  Политикой обработки персональных данных согласие
                  на&nbsp;предоставление и&nbsp;обработку персональных данных
                </Link>
                *
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gray-800 text-white rounded-lg text-sm cursor-pointer transition-all duration-200 hover:bg-red-700 active:scale-99"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
