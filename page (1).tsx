export default async function ServerDemo() {
  const time = new Date().toISOString();

  console.log("Это сообщение появится в терминале, а не в браузере");

  return (
    <main className="content-card">
      <h1>Server Component</h1>
      <p>Время на сервере: {time}</p>
      <p className="muted">
        Этот компонент не содержит директиву use client, поэтому является Server Component по умолчанию.
      </p>
      <p>Открой терминал, где запущен npm run dev, чтобы увидеть сообщение console.log.</p>
    </main>
  );
}
