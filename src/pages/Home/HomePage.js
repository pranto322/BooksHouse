import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";


export const HomePage = () => {
  useTitle('Explore the world of Books')

  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        
    </main>
  )
}
