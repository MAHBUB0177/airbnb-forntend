import About from "@/components/about";
import Apicall from "@/components/apicall";
import CategoryList from "@/components/categoryList";
import ProductCard from "@/components/product/product-card";


export default function Home() {
  return (
    <main className="bg-primary h-screen" >
      {/* <Apicall/>
      <About/> */}
      <CategoryList />
      {/* <ProductCard /> */}

    </main>
  );
}
