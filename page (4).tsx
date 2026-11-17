import Link from "next/link";

const knownArticles: Record<string, { title: string; description: string }> = {
  "nextjs-vvedenie": {
    title: "Введение в Next.js",
    description: "Знакомство с возможностями фреймворка Next.js.",
  },
  "react-osnovy": {
    title: "Основы React",
    description: "Знакомство с компонентами, props и state в React.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "nextjs-vvedenie" },
    { slug: "react-osnovy" },
  ];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = knownArticles[slug];

  return (
    <main className="content-card">
      <Link href="/" className="back-link">← На главную</Link>
      <h1>{article?.title ?? `Статья: ${slug}`}</h1>
      <p>{article?.description ?? "Это демонстрация динамического маршрута. Значение slug получено из URL."}</p>
      <p className="muted">Параметр маршрута: {slug}</p>
    </main>
  );
}
