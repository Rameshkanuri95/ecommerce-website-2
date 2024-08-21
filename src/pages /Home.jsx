import Wrapper from "../components/wrapper/Wrapper"
import Section from "../components/Section"
import { products, discoutProducts } from "../utils /products"
import SliderHome from "../components/Slider"
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  )
  const bestSales = products.filter((item) => item.category === "sofa")
  useWindowScrollToTop()
  return (
    <>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      ></Section>
      <Section
        title="New Arriavals"
        bgColor="white"
        productItems={newArrivalData}
      ></Section>
      <Section
        title="Best Sales"
        bgColor="#f6f9fc"
        productItems={bestSales}
      ></Section>
    </>
  )
}

export default Home
