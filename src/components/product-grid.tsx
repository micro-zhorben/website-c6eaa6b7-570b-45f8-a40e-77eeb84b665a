import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/product-card";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductGridProps {
  className?: string;
  products: Product[];
  onAddToCart?: (productId: string) => void;
  onAddToWishlist?: (productId: string) => void;
}

export function ProductGrid({
  className,
  products,
  onAddToCart,
  onAddToWishlist,
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          onAddToCart={() => onAddToCart?.(product.id)}
          onAddToWishlist={() => onAddToWishlist?.(product.id)}
        />
      ))}
    </div>
  );
}