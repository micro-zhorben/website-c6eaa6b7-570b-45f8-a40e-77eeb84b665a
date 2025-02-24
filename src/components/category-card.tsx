import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  className?: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export function CategoryCard({
  className,
  title,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-colors hover:border-primary",
        className
      )}
    >
      <Link to={href}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <Typography.H3 className="mb-1">{title}</Typography.H3>
              <Typography.P className="text-muted-foreground">
                {description}
              </Typography.P>
            </div>
            <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}