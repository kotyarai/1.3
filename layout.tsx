import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Практическая работа 1.3 — Next.js",
  description: "Демонстрация Server и Client Components в Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">Next.js Практика 1.3</Link>
          <nav aria-label="Основная навигация">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/server-demo">Server</Link>
            <Link href="/client-demo">Client</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">Учебный проект Next.js · 2026</footer>
      </body>
    </html>
  );
}
