"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Search,
  Heart,
  ShieldCheck,
  Truck,
  CreditCard,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Smartphone,
  Shirt,
  Home,
} from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80";

function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.src !== fallbackImage) target.src = fallbackImage;
      }}
    />
  );
}

function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
}) {
  const styles = {
    default: "bg-slate-950 text-white hover:bg-orange-500",
    outline:
      "border border-slate-300 bg-white text-slate-900 hover:border-orange-500 hover:text-orange-600",
    ghost: "bg-transparent text-inherit hover:bg-white/10",
  };

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-12 w-full rounded-full border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-orange-500 ${props.className || ""}`}
    />
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

const heroImage =
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80";
const electronicsImage =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80";
const homeImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";
const beautyImage =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80";

type Product = {
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  image: string;
  tag: string;
  rating: string;
};

const featuredProducts: Product[] = [
  {
    name: "Apple iPhone 15 Pro",
    category: "Gadgets",
    price: "₦680,000",
    oldPrice: "₦750,000",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80",
    tag: "Best Seller",
    rating: "4.9",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    category: "Gadgets",
    price: "₦920,000",
    oldPrice: "₦990,000",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80",
    tag: "Top Rated",
    rating: "4.9",
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    category: "Gadgets",
    price: "₦120,000",
    oldPrice: "₦140,000",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    tag: "Noise Cancel",
    rating: "4.8",
  },
  {
    name: "Men’s Premium Native Outfit",
    category: "Men",
    price: "₦65,000",
    oldPrice: "₦80,000",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1200&q=80",
    tag: "Luxury",
    rating: "4.8",
  },
  {
    name: "Men’s Casual Polo Set",
    category: "Men",
    price: "₦28,000",
    oldPrice: "₦35,000",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
    tag: "Casual",
    rating: "4.7",
  },
  {
    name: "Men’s Leather Loafers",
    category: "Men",
    price: "₦42,000",
    oldPrice: "₦50,000",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
    tag: "Classic",
    rating: "4.7",
  },
  {
    name: "Women’s Elegant Evening Dress",
    category: "Women",
    price: "₦72,000",
    oldPrice: "₦90,000",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80",
    tag: "Trending",
    rating: "4.7",
  },
  {
    name: "Women’s Luxury Handbag",
    category: "Women",
    price: "₦58,000",
    oldPrice: "₦70,000",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    tag: "Hot",
    rating: "4.8",
  },
  {
    name: "Women’s Designer Heels",
    category: "Women",
    price: "₦49,000",
    oldPrice: "₦60,000",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    tag: "Popular",
    rating: "4.8",
  },
  {
    name: "Gold Plated Necklace Set",
    category: "Jewelry",
    price: "₦35,000",
    oldPrice: "₦45,000",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
    tag: "Luxury",
    rating: "4.9",
  },
  {
    name: "Diamond Stud Earrings",
    category: "Jewelry",
    price: "₦25,000",
    oldPrice: "₦32,000",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80",
    tag: "Elegant",
    rating: "4.8",
  },
  {
    name: "Men’s Stainless Steel Watch",
    category: "Jewelry",
    price: "₦55,000",
    oldPrice: "₦70,000",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
    tag: "Premium",
    rating: "4.7",
  },
  {
    name: "Luxury Sofa Set",
    category: "Home",
    price: "₦350,000",
    oldPrice: "₦420,000",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    tag: "Premium Home",
    rating: "4.7",
  },
  {
    name: "Modern LED Chandelier",
    category: "Home",
    price: "₦95,000",
    oldPrice: "₦120,000",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    tag: "Upgrade",
    rating: "4.6",
  },
  {
    name: "Complete Skincare Kit",
    category: "Beauty",
    price: "₦32,000",
    oldPrice: "₦40,000",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    tag: "Glow",
    rating: "4.9",
  },
  {
    name: "Luxury Perfume Collection",
    category: "Beauty",
    price: "₦45,000",
    oldPrice: "₦55,000",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    tag: "Fragrance",
    rating: "4.8",
  },
];

const categories = [
  {
    title: "Gadgets",
    count: "142+ items",
    icon: Smartphone,
    image: electronicsImage,
  },
  {
    title: "Men",
    count: "89+ items",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Women",
    count: "96+ items",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jewelry",
    count: "60+ items",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
  { title: "Home", count: "55+ items", icon: Home, image: homeImage },
  { title: "Beauty", count: "64+ items", icon: Heart, image: beautyImage },
] as const;

const trustPoints = [
  {
    title: "Fast delivery",
    description: "Same-day in Lagos. Fast shipping across Nigeria.",
    icon: Truck,
  },
  {
    title: "Secure payment",
    description: "Paystack, cards, transfers, and trusted checkout.",
    icon: CreditCard,
  },
  {
    title: "Authentic products",
    description: "Curated quality products from trusted sellers only.",
    icon: ShieldCheck,
  },
  {
    title: "Easy returns",
    description: "Simple return support for eligible orders.",
    icon: CheckCircle2,
  },
];

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Lagos Shopper",
    text: "This feels like a premium global marketplace made for Nigeria. Fast delivery, beautiful layout, and products I actually want.",
  },
  {
    name: "Emeka A.",
    role: "Tech Buyer",
    text: "The product presentation is clean, premium, and trustworthy. It makes buying feel easy and high-end.",
  },
  {
    name: "Tobi F.",
    role: "Fashion Customer",
    text: "Finally, an online store that looks classy and still feels simple to use. The visual quality is excellent.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
      ) : null}
    </div>
  );
}

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return featuredProducts;
    return featuredProducts.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-10">
            <a
              href="#top"
              className="text-2xl font-semibold tracking-tight text-white"
            >
              Kart<span className="text-orange-500">NG</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <a
                href="#featured"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Shop
              </a>
              <a
                href="#collections"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Collections
              </a>
              <a
                href="#featured"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Featured
              </a>
              <a
                href="#reviews"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Reviews
              </a>
            </nav>
          </div>

          <div className="hidden flex-1 px-8 lg:block">
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search products, brands, and collections"
                className="border-white/10 bg-white/10 pl-11 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" className="text-white hover:text-white">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Wishlist</span>
            </Button>
            <Button variant="ghost" className="text-white hover:text-white">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
          <Img
            src={heroImage}
            alt="Premium shopping lifestyle"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
                <Sparkles className="h-4 w-4" /> Nigeria’s premium online
                marketplace
              </div>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
                Shop premium.
                <span className="block text-orange-500">Live better.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                From fashion to gadgets and everyday essentials. Discover
                quality products at great prices, delivered fast.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-orange-500 px-7 py-4 text-white hover:bg-orange-600">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 px-7 py-4 text-white hover:bg-white/10 hover:text-white"
                >
                  Explore Deals
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-400" /> Same-day
                  Lagos delivery
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-400" /> Paystack
                  secured
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-400" /> Premium
                  support
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {featuredProducts.slice(0, 4).map((item, index) => (
                <Card
                  key={item.name}
                  className={`overflow-hidden border-white/10 bg-white/10 backdrop-blur-xl ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`relative ${index === 0 ? "h-72" : "h-56"}`}
                    >
                      <Img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        {item.tag}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <div className="mb-2 flex items-center gap-1 text-sm text-orange-300">
                          <Star className="h-4 w-4 fill-orange-300 text-orange-300" />{" "}
                          {item.rating}
                        </div>
                        <h3 className="text-lg font-semibold md:text-xl">
                          {item.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-lg font-bold">
                            {item.price}
                          </span>
                          <span className="text-sm text-white/55 line-through">
                            {item.oldPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-4 md:px-8">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="collections"
          className="mx-auto max-w-7xl px-4 py-20 md:px-8"
        >
          <SectionTitle eyebrow="Collections" title="Shop by category" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <CardContent className="p-0">
                      <div className="relative h-80 overflow-hidden">
                        <Img
                          src={category.image}
                          alt={category.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 shadow-md">
                          <Icon className="h-4 w-4 text-orange-500" />{" "}
                          {category.title}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-semibold">
                            {category.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-200">
                            {category.count}
                          </p>
                          <Button
                            type="button"
                            onClick={() => {
                              setActiveCategory(category.title);
                              document
                                .getElementById("featured")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="mt-4 bg-white text-slate-950 hover:bg-orange-500 hover:text-white"
                          >
                            Explore category
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="featured" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionTitle
                eyebrow="Featured"
                title={
                  activeCategory === "All"
                    ? "Top picks for you"
                    : `${activeCategory} picks for you`
                }
              />
              <div className="flex flex-wrap gap-3">
                {["All", ...categories.map((category) => category.title)].map(
                  (category) => (
                    <Button
                      key={category}
                      type="button"
                      variant={
                        activeCategory === category ? "default" : "outline"
                      }
                      onClick={() => setActiveCategory(category)}
                      className={
                        activeCategory === category
                          ? "bg-slate-950 text-white hover:bg-orange-500"
                          : ""
                      }
                    >
                      {category}
                    </Button>
                  ),
                )}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <CardContent className="p-0">
                      <div className="relative h-72 overflow-hidden">
                        <Img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                          {item.tag}
                        </div>
                        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-900 shadow-md transition hover:scale-105">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="space-y-3 p-5">
                        <div className="flex items-center gap-1 text-sm text-amber-500">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                          <span className="font-medium text-slate-700">
                            {item.rating}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-slate-950">
                            {item.price}
                          </span>
                          <span className="text-sm text-slate-400 line-through">
                            {item.oldPrice}
                          </span>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <Button className="flex-1">Add to cart</Button>
                          <Button variant="outline">Buy</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionTitle
              eyebrow="Customer reviews"
              title="What shoppers are saying"
              body="Trusted by customers who want quality products, clean shopping, and fast delivery."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <Card className="h-full border-white/10 bg-white/5 text-white backdrop-blur-xl">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex items-center gap-1 text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-orange-400 text-orange-400"
                          />
                        ))}
                      </div>
                      <p className="flex-1 text-base leading-8 text-slate-200">
                        “{item.text}”
                      </p>
                      <div className="mt-6 border-t border-white/10 pt-4">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-slate-400">
                          {item.role}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
          <div>
            <h3 className="text-2xl font-semibold">
              Kart<span className="text-orange-500">NG</span>
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Premium marketplace for fashion, gadgets, and lifestyle products
              in Nigeria.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#featured" className="hover:text-white">
                  Men
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white">
                  Women
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white">
                  Gadgets
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white">
                  Jewelry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Stay Updated</h4>
            <p className="mb-4 text-sm text-slate-400">
              Get updates on new arrivals and deals.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Email address"
                className="border-white/10 bg-white/10 text-white placeholder:text-slate-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} KartNG. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
