import { ShoppingBagIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'New Arrivals', href: '#new-arrivals' },
  { name: 'Best Sellers', href: '#best-sellers' },
  { name: 'Wardrobe Basics', href: '#basics' },
  { name: 'Statement Pieces', href: '#statement' },
  { name: 'Accessories', href: '#accessories' },
  { name: 'Humperia Home', href: '#home' }
];

const featuredProducts = [
  {
    name: 'Aura Linen Overshirt',
    description: 'Relaxed fit with dropped shoulders and horn buttons for polished comfort.',
    price: '€189',
    previousPrice: '€229',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Slate Minimalist Tote',
    description: 'Sculptural leather with magnetic closure and interior laptop sleeve.',
    price: '€249',
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Sienna Knit Dress',
    description: 'Soft rib knit with adjustable halter strap for custom silhouettes.',
    price: '€149',
    previousPrice: '€179',
    badge: 'Back in stock',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
  }
];

const bestSellers = [
  {
    name: 'Humperia Sculpt Blazer',
    price: '€289',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Form Pleated Trouser',
    price: '€199',
    rating: 4.8,
    reviews: 96,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Architect Bucket Bag',
    price: '€219',
    rating: 4.9,
    reviews: 205,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Echo Leather Mule',
    price: '€169',
    rating: 4.7,
    reviews: 74,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
  }
];

const editorialStories = [
  {
    title: 'Quiet Power Capsule',
    excerpt: 'Layer textural neutrals and metallic accents to build your meeting-to-evening uniform.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'The Gallery Edit',
    excerpt: 'Structured tailoring and glass-bead jewellery styled for weekend exhibitions.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80'
  }
];

const homeHighlights = [
  {
    name: 'Travertine Incense Holder',
    price: '€79',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Studio Throw Blanket',
    price: '€129',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Monolith Candle Duo',
    price: '€59',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  }
];

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1 text-sm text-amber-400">
      <span className="font-medium">{value.toFixed(1)}</span>
      <span className="text-xs text-slate-400">/ 5.0</span>
    </div>
  );
}

function ProductCard({
  product,
  variant = 'default'
}: {
  product: {
    name: string;
    description?: string;
    price: string;
    previousPrice?: string;
    badge?: string;
    rating?: number;
    reviews?: number;
    image: string;
  };
  variant?: 'default' | 'compact';
}) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.6)] backdrop-blur transition hover:border-white/20 hover:bg-white/10 ${
        variant === 'compact' ? 'gap-4' : 'gap-6'
      }`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-900/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 22rem, 100vw"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-900">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">{product.name}</h3>
            {product.description && (
              <p className="mt-2 text-sm text-slate-300">{product.description}</p>
            )}
          </div>
          {product.rating && (
            <div className="text-right">
              <Rating value={product.rating} />
              {product.reviews && (
                <p className="text-xs text-slate-400">{product.reviews} reviews</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="font-display text-lg font-semibold text-white">{product.price}</span>
          {product.previousPrice && (
            <span className="text-sm text-slate-400 line-through">{product.previousPrice}</span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            <ShoppingBagIcon className="h-4 w-4" />
            Add to bag
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40">
            Quick view
          </button>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] flex justify-center blur-[160px]">
        <div className="h-[28rem] w-[48rem] rounded-full bg-gradient-to-r from-orange-500/30 via-purple-500/20 to-sky-500/30" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
        <Link href="#" className="font-display text-xl font-semibold tracking-[0.4em] text-white">
          HUMPERIA
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-6 text-sm text-slate-200">
          {categories.slice(0, 4).map((category) => (
            <Link key={category.name} href={category.href} className="transition hover:text-white">
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5 sm:flex">
            <SparklesIcon className="h-4 w-4" />
            Style quiz
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
            Sign in
          </button>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-4 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            Humperia.shop
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Premium webshop za minimaliste koji traže vrhunski osjećaj kupovine.
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            Pokreni prodaju kolekcija, dropova i limitiranih izdanja na responzivnoj platformi optimiziranoj za WordPress i WooCommerce. Napravljeno u Next.js-u sa fokusom na brz checkout i pričanje priče kroz proizvode.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#new-arrivals"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Pregled nove kolekcije
            </Link>
            <Link
              href="#best-sellers"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Pogledaj bestsellere
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-semibold text-white">48h</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">Brza isporuka</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">Free</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">Povrat robe</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">4.9/5</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">Ocjena kupaca</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">1.8k</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">Artikala na stanju</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.9)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80"
                alt="Humperia Collection"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26rem, 100vw"
                priority
              />
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                Besprijekorno iskustvo kupovine uz Next.js, server-side filtriranje i sinhronizaciju košarice.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Dinamičke kolekcije, preporuke i dostupnost u realnom vremenu iz WooCommerce kataloga.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Integrisana checkout iskustva, liste želja i moduli za CRM automatske kampanje.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-white">Shop by category</h2>
          <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
            Prikaži sve kolekcije
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              <span>{category.name}</span>
              <span className="absolute right-5 top-5 text-xs text-orange-300 transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="new-arrivals" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Novi dolasci</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">Svježe drop kolekcije</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Modularni blokovi prikazuju nove proizvode, opcije boja i ističu popuste. Dodaj backend API za automatsko punjenje iz WooCommerce kataloga.
            </p>
          </div>
          <Link href="#" className="text-sm font-semibold text-white underline-offset-4 transition hover:underline">
            Uvezi proizvode iz WooCommerce-a
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section id="best-sellers" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Top izbor kupaca</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">Bestseller shortlist</h2>
          </div>
          <div className="flex gap-2 text-sm text-slate-300">
            <button className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:text-white">
              Filter: Dostupno odmah
            </button>
            <button className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:text-white">
              Sortiraj po ocjeni
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.name} product={product} variant="compact" />
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold">Personalizirani shopping</h2>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200">
                CRM & Analytics
              </span>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Uključi liste želja, dinamičke preporuke i automatizirane kampanje. Next.js 14 omogućava server actions za kreiranje košarice, upsell i order tracking bez trećih servisa.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-semibold">Loyalty program</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Poveži WooCommerce kupce i reward nivoe direktno kroz Supabase ili Sanity korisničke profile.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-semibold">Prodajni tuneli</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Segmentiraj newslettere, retargeting i cross-sell putem izvoznih feedova i webhookova.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {editorialStories.map((story) => (
              <article key={story.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 24rem, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{story.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{story.excerpt}</p>
                  <Link href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3">
                    Čitaj priču <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="home" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Humperia Home</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">Dodaci za prostor</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Proširi ponudu na lifestyle i home kategorije. Komponente su spremne za proširenje sa varijantama, bundlovima i pretplatama.
            </p>
          </div>
          <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
            Pogledaj sve home proizvode
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article key={item.name} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 18rem, 100vw"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                <span className="text-sm text-slate-300">{item.price}</span>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                Dodaj u košaricu
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="mx-auto w-full max-w-5xl px-6 pb-32">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] backdrop-blur">
          <h2 className="font-display text-3xl font-semibold text-white">Prijavi se za VIP dropove</h2>
          <p className="mt-3 text-sm text-slate-300">
            Automatiziraj segmentaciju, SMS kampanje i ekskluzivne ponude kroz integraciju sa Mailchimp, Klaviyo ili custom CRM-om.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Email adresa"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white/40 focus:outline-none"
            />
            <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
              Pošalji
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-400">Bez spama. Samo drops i savjeti stilista.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Humperia. Sva prava zadržana.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition hover:text-white">
              Politika privatnosti
            </Link>
            <Link href="#" className="transition hover:text-white">
              Uslovi kupovine
            </Link>
            <Link href="#" className="transition hover:text-white">
              Kontakt podrška
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
