import { Header } from "@/components/boty/header";
import { Hero } from "@/components/boty/hero";
import { ProductGrid } from "@/components/boty/product-grid";
import { CollectionBanner } from "@/components/boty/collection-banner";
import { Celebs } from "@/components/boty/celebs";
import { FeatureSection } from "@/components/boty/feature-section";
import { Newsletter } from "@/components/boty/newsletter";
import { Footer } from "@/components/boty/footer";

export default async function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductGrid />
      <CollectionBanner />
      <Celebs />
      <FeatureSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
