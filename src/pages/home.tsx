import { Typography } from "@/components/ui/typography";
import { CategoryCard } from "@/components/category-card";
import { ProductGrid } from "@/components/product-grid";

const featuredCategories = [
  {
    title: "Тренажеры",
    description: "Профессиональные тренажеры для домашнего использования",
    image: "/placeholder.svg",
    href: "/category/trainers",
  },
  {
    title: "Гантели и штанги",
    description: "Широкий выбор свободных весов",
    image: "/placeholder.svg",
    href: "/category/weights",
  },
  {
    title: "Фитнес аксессуары",
    description: "Все необходимое для эффективных тренировок",
    image: "/placeholder.svg",
    href: "/category/accessories",
  },
  {
    title: "Спортивное питание",
    description: "Протеины, витамины и добавки",
    image: "/placeholder.svg",
    href: "/category/nutrition",
  },
];

const featuredProducts = [
  {
    id: "1",
    title: "Беговая дорожка Fitness Pro X1",
    description: "Профессиональная беговая дорожка с множеством программ тренировок",
    price: 49990,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Набор гантелей (2-20кг)",
    description: "Набор хромированных гантелей с резиновым покрытием",
    price: 15990,
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Скакалка скоростная Pro Jump",
    description: "Профессиональная скакалка для кроссфита",
    price: 1990,
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Коврик для йоги Premium",
    description: "Экологичный коврик для йоги повышенной прочности",
    price: 2990,
    image: "/placeholder.svg",
  },
];

export function Home() {
  const handleAddToCart = (productId: string) => {
    console.log("Added to cart:", productId);
  };

  const handleAddToWishlist = (productId: string) => {
    console.log("Added to wishlist:", productId);
  };

  return (
    <div className="container py-8">
      <section className="mb-16">
        <Typography.H1 className="mb-8 text-center">
          Добро пожаловать в мир спорта
        </Typography.H1>
        <Typography.Lead className="text-center">
          Найдите лучшее спортивное оборудование для ваших тренировок
        </Typography.Lead>
      </section>

      <section className="mb-16">
        <Typography.H2 className="mb-8">Популярные категории</Typography.H2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              href={category.href}
            />
          ))}
        </div>
      </section>

      <section>
        <Typography.H2 className="mb-8">Популярные товары</Typography.H2>
        <ProductGrid
          products={featuredProducts}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </section>
    </div>
  );
}