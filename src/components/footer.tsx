import { Link } from "react-router-dom";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Typography.H3>О компании</Typography.H3>
            <Typography.List>
              <li>
                <Link to="/about" className="text-foreground hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-foreground hover:text-primary">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-foreground hover:text-primary">
                  Доставка
                </Link>
              </li>
            </Typography.List>
          </div>

          <div>
            <Typography.H3>Каталог</Typography.H3>
            <Typography.List>
              <li>
                <Link to="/catalog/trainers" className="text-foreground hover:text-primary">
                  Тренажеры
                </Link>
              </li>
              <li>
                <Link to="/catalog/weights" className="text-foreground hover:text-primary">
                  Утяжелители
                </Link>
              </li>
              <li>
                <Link to="/catalog/accessories" className="text-foreground hover:text-primary">
                  Аксессуары
                </Link>
              </li>
            </Typography.List>
          </div>

          <div>
            <Typography.H3>Помощь</Typography.H3>
            <Typography.List>
              <li>
                <Link to="/faq" className="text-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-foreground hover:text-primary">
                  Возврат
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-foreground hover:text-primary">
                  Гарантия
                </Link>
              </li>
            </Typography.List>
          </div>

          <div>
            <Typography.H3>Контакты</Typography.H3>
            <Typography.List>
              <li>
                <Typography.P>8 800 555 35 35</Typography.P>
              </li>
              <li>
                <Typography.P>info@sporttovary.ru</Typography.P>
              </li>
              <li className="flex gap-4">
                <Link to="#" className="text-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </li>
            </Typography.List>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <Typography.Small>
            © 2024 СпортТовары. Все права защищены.
          </Typography.Small>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-foreground hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-foreground hover:text-primary">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}