import { Search, User, ShoppingBag, Menu } from "lucide-react";

// Product data
const products = [
  { id: 1, name: "Air Force 1 Low", brand: "Nike", price: 120, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop" },
  { id: 2, name: "550 White Green", brand: "New Balance", price: 130, originalPrice: 160, sale: true, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop" },
  { id: 3, name: "Classic Crew Socks 3-Pack", brand: "Essentials", price: 28, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop" },
  { id: 4, name: "Cargo Overalls", brand: "Carhartt WIP", price: 248, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop" },
  { id: 5, name: "Logo Hoodie Black", brand: "Fear of God", price: 395, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop" },
  { id: 6, name: "Trail Runners", brand: "Salomon", price: 180, originalPrice: 220, sale: true, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
  { id: 7, name: "Graphic Tee White", brand: "Stüssy", price: 55, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" },
  { id: 8, name: "Classic Beanie", brand: "Acne Studios", price: 140, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop" },
  { id: 9, name: "Baggy Jeans Indigo", brand: "Levi's", price: 98, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop" },
  { id: 10, name: "Track Pants Black", brand: "Adidas", price: 85, originalPrice: 110, sale: true, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop" },
  { id: 11, name: "Leather Belt", brand: "A.P.C.", price: 195, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" },
  { id: 12, name: "Crewneck Sweatshirt", brand: "Champion", price: 75, image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400&h=400&fit=crop" },
  { id: 13, name: "Leather Boots", brand: "Dr. Martens", price: 180, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop" },
  { id: 14, name: "Crossbody Bag", brand: "Côte&Ciel", price: 295, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop" },
  { id: 15, name: "Windbreaker Navy", brand: "The North Face", price: 165, originalPrice: 200, sale: true, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop" },
  { id: 16, name: "Dad Cap Black", brand: "Palace", price: 48, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop" },
  { id: 17, name: "Fleece Jacket", brand: "Patagonia", price: 179, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop" },
  { id: 18, name: "Running Shorts", brand: "Nike", price: 55, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop" },
  { id: 19, name: "Wool Scarf", brand: "Acne Studios", price: 220, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop" },
  { id: 20, name: "Canvas Sneakers", brand: "Converse", price: 70, originalPrice: 85, sale: true, image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop" },
  { id: 21, name: "Puffer Vest", brand: "Stone Island", price: 450, image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=400&h=400&fit=crop" },
  { id: 22, name: "Striped Rugby Shirt", brand: "Noah", price: 148, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop" },
  { id: 23, name: "Suede Loafers", brand: "Clarks", price: 140, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop" },
  { id: 24, name: "Slim Chinos", brand: "COS", price: 89, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop" },
];

// Brand logos for footer
const brands = [
  "KITH", "NIKE", "NEW BALANCE", "ADIDAS", "ASICS", "VANS"
];

// Navigation categories
const categories = [
  "New Arrivals", "Footwear", "Apparel", "Accessories", "Sale"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-widest uppercase">
        Free Shipping on Orders Over $150
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu */}
            <button className="lg:hidden p-2 -ml-2">
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none">
              <h1 className="text-xl font-bold tracking-tighter uppercase text-center lg:text-left">
                STREET<span className="font-light">WEAR</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 mx-auto">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="nav-link"
                >
                  {cat}
                </a>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {products.length} Products
              </span>
            </div>
            <div className="flex items-center gap-4">
              <select className="text-xs uppercase tracking-widest bg-transparent border-none outline-none cursor-pointer text-muted-foreground">
                <option>Sort By: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group product-card animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden bg-secondary mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                {product.sale && (
                  <span className="sale-badge">Sale</span>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {product.brand}
                </p>
                <h3 className="text-xs font-medium text-foreground line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors">
            Load More
          </button>
        </div>
      </main>

      {/* Brand bar */}
      <section className="border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-sm font-bold tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Shop</h4>
              <ul className="space-y-2">
                {["Men", "Women", "Kids", "Sale"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Help</h4>
              <ul className="space-y-2">
                {["FAQ", "Shipping", "Returns", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Stores", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up for exclusive offers and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 text-sm bg-secondary border border-border outline-none focus:border-foreground transition-colors"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-widest">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 STREETWEAR. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Accessibility"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
