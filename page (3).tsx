"use client";

import { useState } from "react";
import { greet } from "../actions";

export default function ClientDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("Это сообщение появится в консоли браузера");

  async function handleGreet() {
    setLoading(true);
    try {
      const result = await greet("Студент");
      setMessage(result);
    } catch {
      setMessage("Не удалось вызвать серверную функцию. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="content-card">
      <h1>Client Component</h1>
      <p>Этот компонент использует useState и обработчики событий.</p>

      <h2>Счётчик кликов</h2>
      <p>Кликов: {count}</p>
      <button className="counter-button" onClick={() => setCount((value) => value + 1)}>
        Увеличить
      </button>
      <button className="counter-button" onClick={() => setCount(0)}>
        Сбросить
      </button>

      <hr />
      <h2>Вызов Server Function</h2>
      <p>Нажми кнопку: функция greet выполнится на сервере и вернёт результат.</p>
      <button className="action-button" onClick={handleGreet} disabled={loading}>
        {loading ? "Отправка..." : "Поздороваться"}
      </button>
      {message && <p className="status-message">{message}</p>}

      <p className="muted">
        Открой инструменты разработчика браузера (F12 → Console), чтобы увидеть сообщение console.log.
      </p>
    </main>
  );
}
