import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  className?: string;
  title: string;
  price: number;
  description: string;
  image: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

export function ProductCard({
  className,
  title,
  price,
  description,
  image,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Typography.Large className="text-primary">
          {price.toLocaleString("ru-RU")} ₽
        </Typography.Large>
      </CardContent>
      <CardFooter className="gap-2">
        <Button
          className="flex-1"
          onClick={onAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="text-foreground"
          onClick={onAddToWishlist}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}