import Link from "next/link";

const demos = [
  { href: "/server-demo", title: "Server Component", text: "Асинхронный компонент и время сервера." },
  { href: "/client-demo", title: "Client Component + Server Function", text: "Счётчик, useState и вызов функции greet на сервере." },
  { href: "/about", title: "Статическая страница", text: "Пример обычного маршрута /about." },
  { href: "/blog/nextjs-vvedenie", title: "Динамический маршрут", text: "Статья с параметром slug и generateStaticParams." },
  { href: "/products/1", title: "Карточка товара", text: "Данные загружаются на сервере, кнопка работает на клиенте." },
];

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <span className="eyebrow">ПРАКТИЧЕСКАЯ РАБОТА №1.3</span>
        <h1>Server и Client Components</h1>
        <p>
          Учебный проект для знакомства со структурой App Router,
          серверными и клиентскими компонентами Next.js.
        </p>
      </section>

      <section className="articles">
        <h2>Разделы проекта</h2>
        <div className="article-grid">
          {demos.map((demo) => (
            <article className="article-card" key={demo.href}>
              <h3>{demo.title}</h3>
              <p>{demo.text}</p>
              <Link href={demo.href}>Открыть →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
