import HomeHero from "@/components/home/HomeHero";
import ProductCatalogues from "@/components/home/ProductCatalogues";


export default function Home() {
  return (
    <div className="w-full max-h-screen min-h-screen h-full bg-black text-white">
      <HomeHero />
      <ProductCatalogues/>
    </div>
  );
}
