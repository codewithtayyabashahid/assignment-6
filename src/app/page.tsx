import Image from "next/image"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"

import Hero from "../../components/hero"
import Header from "../../components/header"
import Achivements from "../../components/Achivements"
import Category from "../../components/Category"
import Courses from "../../components/Courses"
import Team from "../../components/Team"
import Testimonial from "../../components/Testimonial"
import Footer from "../../components/Footer"
export default function Home(){
return(
  <main>
<div className=" h-12 py-3 px-11 flex items-center">
<h1 className="text-xs">
  <span>Phone Number: 956 742 455 678</span>
</h1>
<span className="text-slate-600 text-4xl pb-2 mx-2">|</span>
<h1 className="text-xs">
  <span>Email: info@ddsgnr.com</span>
</h1>
{/*Social media icons*/}
<div className="flex space-x-5 text-2xl ml-auto">
  <AiFillFacebook/>
  <AiFillInstagram/>
  <AiFillTwitterCircle/>
  <AiFillLinkedin/>
</div>
</div>
<div>
  <Header />
  <Hero />
  <Category/>
  <Achivements />
  <Courses />
  <Team />
  <Testimonial />
  <Footer />

</div>
</main>
)
}
