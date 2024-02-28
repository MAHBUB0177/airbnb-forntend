import About from "@/components/about";
import Apicall from "@/components/apicall";
import CategoryList from "@/components/categoryList";


export default function Home() {
  return (
    <main className="bg-primary h-screen" >
      {/* <Apicall/> */}
      <About/>

      <CategoryList />
    </main>
  );
}
