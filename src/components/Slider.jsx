import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SlideCard from "./SliderCard/SlideCard"
import { SliderData } from "../utils /products"

const SliderHome = () => {
  return (
    <section>
      <Container>
        <Slider>
          {SliderData.map((slider, index) => {
            return (
              <SlideCard
                key={index}
                title={slider.title}
                cover={slider.cover}
                desc={slider.desc}
              />
            )
          })}
        </Slider>
      </Container>
    </section>
  )
}

export default SliderHome
