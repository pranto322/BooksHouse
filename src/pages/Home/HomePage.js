import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { FeaturedProducts } from "./components/FeaturedProducts";



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
