import BottomBannere from "./Home/BottomBannere/BottomBannere"
import Faq from "./Home/Faq/Faq"
import Footer from "./Home/Footer/Footer"
import Hero from "./Home/Hero/Hero"
import NavBar from "./Home/NavBar/NavBar"
import Service from "./Home/Service/Service"
import Testimonial from "./Home/Testimonial/Testimonial"
import WhoAreWe from "./Home/WhoAreWe/WhoAreWe"


function App() {


  return (
    <>
      <NavBar/>
      <Hero/>
      <WhoAreWe/>
      <Service/>
      <Testimonial/>
      <Faq/>
      <BottomBannere/>
      <Footer/>
    </>
  )
}

export default App
