# Практическая работа №1.3 — Server и Client Components

Учебный проект на Next.js 15 с App Router.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Маршруты

- `/` — главная страница и ссылки на демонстрации.
- `/about` — статическая страница.
- `/server-demo` — асинхронный Server Component; сообщение `console.log` видно в терминале сервера.
- `/client-demo` — Client Component со счётчиком и вызовом Server Function; сообщение `console.log` видно в консоли браузера.
- `/blog/nextjs-vvedenie` — динамический маршрут с `generateStaticParams`.
- `/blog/react-osnovy` — второй заранее генерируемый динамический маршрут.
- `/blog/любая-строка` — демонстрация получения любого slug.
- `/products/1` — карточка ноутбука с интерактивной кнопкой.
- `/products/2` — карточка мыши.

## Что изучается

- `app/`, `public/`, `package.json`, `next.config.ts`.
- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`.
- Server Components и Client Components.
- Директивы `"use client"` и `"use server"`.
- Server Function `greet`.
- Статические и динамические маршруты.
- `generateStaticParams()` и Next.js 15 `params: Promise<...>`.

## Проверка

```bash
npm run build
```

## GitHub

Создайте пустой репозиторий GitHub и выполните команды из этой папки:

```bash
git init
git add .
git commit -m "Complete practical work 1.3"
git branch -M main
git remote add origin https://github.com/ВАШ-ЛОГИН/ИМЯ-РЕПОЗИТОРИЯ.git
git push -u origin main
```

Замените URL на адрес своего репозитория.
