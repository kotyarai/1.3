"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="content-card">
      <h1>Что-то пошло не так</h1>
      <p>Произошла ошибка при отображении страницы.</p>
      <button className="counter-button" onClick={() => reset()}>
        Попробовать снова
      </button>
    </main>
  );
}
