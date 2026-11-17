import AddToCartButton from "./add-to-cart-button";
import Link from "next/link";

async function getProduct(id: string) {
  const products: Record<string, { name: string; price: number }> = {
    "1": { name: "Ноутбук", price: 75000 },
    "2": { name: "Мышь", price: 1500 },
  };

  return products[id] ?? null;
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <main className="content-card">
        <h1>Товар не найден</h1>
        <Link href="/">Вернуться на главную</Link>
      </main>
    );
  }

  return (
    <main className="content-card">
      <Link href="/" className="back-link">← На главную</Link>
      <h1>{product.name}</h1>
      <p className="product-price">Цена: {product.price.toLocaleString("ru-RU")} ₽</p>
      <p className="muted">Данные товара получены в Server Component.</p>
      <AddToCartButton />
    </main>
  );
}
